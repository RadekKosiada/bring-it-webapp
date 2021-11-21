import '../App.css';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { fetchProducts } from '../api/index';

import Products from '../interfaces/Products'

import Results from './Results';
import Recommendations from './Recommendations';

function Search() {
    const [value, setValue] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [products, setProducts] = useState<Array<Products>>([]);
    const [buttonQuery, setButtonQuery] = useState('');
    const [delayedValue, setDelayedValue] = useState('');
    const isMounted = useRef(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setValue(e.target.value);
            // Set buttonQuery to empty string when user has typed in input
            setButtonQuery('');
        },
        [value],
    );

    useEffect(() => {
        // prevents useEffect to be triggered on the 1st component's render
        if (isMounted.current) {
            let delay = setTimeout(() => {
                setDelayedValue(value);
            }, 800);

            /* clean up function runs before the setTimeout and cancels it;
            thus as long as user types and value changes it will run 
            and will not allow delayedValue to be set; 
            As soon as it's set, another useEffect with API request can be triggered;
            */
            return () => {
                clearTimeout(delay);
            }
        } else {
            isMounted.current = true;
        }

    }, [value])

    const getQuery = (feedback: string) => {
        setButtonQuery(feedback);
    };

    useEffect(() => {
        /* will not be triggered on the 1st render
         and will fetch data 
         only if buttonQuery or delayedValue are available */
        if (buttonQuery.length || delayedValue.length) {

            let searchQuery;
            if (delayedValue.length) {
                searchQuery = delayedValue;
            } else if (buttonQuery.length) {
                searchQuery = buttonQuery
            } else {
                searchQuery = ''
            }

            const fetch = fetchProducts(searchQuery);

            fetch
                .then(data => {
                    setProducts(data.products);
                    setErrorMessage('');
                })
                .catch(error => {
                    setErrorMessage(error);
                    setProducts([]);
                })
        }
    }, [delayedValue, buttonQuery])

    return (
        <div>
            <input
                className='search-input'
                placeholder="Suche"
                id=""
                type="text"
                value={value}
                onChange={handleChange}
            />
            {(!delayedValue) && <Recommendations getQuery={getQuery} />}
            {((delayedValue || buttonQuery) && products && !errorMessage) && <Results products={products} />}
            {((delayedValue || buttonQuery) && errorMessage) &&
                <div>
                    <p>{errorMessage}</p>
                    <p>Bitte versuchen Sie es nochmal</p>
                </div>
            }
        </div>
    );
}

export default Search;