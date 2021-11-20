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

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(value)
            setValue(e.target.value);
            // Set buttonQuery to empty string when user has typed in input
            setButtonQuery('');
        },
        [value],
    );

    useEffect(() => {
        let delay = setTimeout(() => {
            console.log('stopped typing');
            setDelayedValue(value);
        }, 800);

        return () => {
            console.log('typing');
            clearTimeout(delay);
        }

    }, [value])

    const getQuery = (feedback: string) => {
        console.log('FF', feedback)
        setButtonQuery(feedback);
        // Set value to empty string when user looks at recommendations
    };

    useEffect(() => {
        /* will not be triggered on the 1st render
         will display data if input is NOT empty */
        if (buttonQuery.length || delayedValue.length) {

            let searchQuery;
            if (delayedValue.length) {
                searchQuery = delayedValue;
            } else if (buttonQuery.length) {
                searchQuery = buttonQuery
            } else {
                searchQuery = ''
            }
            console.log(searchQuery);

            const fetch = fetchProducts(searchQuery);

            fetch
                .then(data => {
                    console.log(data);
                    setProducts(data.products);
                    setErrorMessage('');
                })
                .catch(error => {
                    console.log(error);
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