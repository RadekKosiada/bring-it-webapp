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
    const isMounted = useRef(false);
    
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(value)
            setValue(e.target.value);
        },
        [value],
    );

    const getQuery = (feedback: string) => {
        setButtonQuery(feedback);
        console.log('feedback from REC: ', feedback);
    }

    useEffect(() => {
        /* will not be triggered on the 1st render
         will display data if input is NOT empty */
        if (isMounted.current && value.length) {
            const fetch = fetchProducts(value);

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
        } else {
            isMounted.current = true;
        }

    }, [value, buttonQuery])


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
            {(value && products && !errorMessage) && <Results products={products} />}
            {(value && errorMessage) &&
                <div>
                    <p>{errorMessage}</p>
                    <p>Bitte versuchen Sie es nochmal</p>
                </div>
            }
            {!value && <Recommendations getQuery={getQuery} />}
        </div>
    );
}

export default Search;