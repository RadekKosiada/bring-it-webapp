import '../App.css';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { fetchProducts } from '../api/index';

import Products from '../interfaces/Products'

import Results from './Results';
import Recommendations from './Recommendations';
import ErrorMessage from './ErrorMessage';

function Search() {
    const [value, setValue] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [products, setProducts] = useState<Array<Products>>([]);
    const [buttonQuery, setButtonQuery] = useState('');
    const [delayedValue, setDelayedValue] = useState('');
    const isMounted = useRef(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        // Sets buttonQuery to an empty string when user has typed in the input
        setButtonQuery('');
    };

    useEffect(() => {
        // prevents useEffect to be triggered on the 1st component's render
        if (isMounted.current) {
            let delay = setTimeout(() => {
                setDelayedValue(value);
            }, 800);

            return () => {
                clearTimeout(delay);
            }
        } else {
            isMounted.current = true;
        }
    }, [value])

    const getQuery = useCallback((feedback: string) => {
        setButtonQuery(feedback);
    }, [setButtonQuery]);

    useEffect(() => {
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
                <ErrorMessage errorMessage={errorMessage} />}
        </div>
    );
}

export default Search;