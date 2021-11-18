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
    const [query, setQuery] = useState('');
    const timeoutId: React.MutableRefObject<any> = useRef();
    const [counter, setCounter] = useState(0);
    const makingCall = React.useRef(false);

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(value);

            setValue(e.target.value);
            // Set buttonQuery to empty string when user has typed in input
            setButtonQuery('');
        },
        [value],
    );


    const getQuery = (feedback: string) => {
        console.log('FF', feedback)
        setButtonQuery(feedback);
        // Set value to empty string when user looks at recommendations
        setValue('');
    }

    useEffect(() => {
        /* will not be triggered on the 1st render
         will display data if input is NOT empty */
        if (buttonQuery.length || value.length) {
            let searchQuery: string;
            if (value.length) {
                searchQuery = value;
            } else if (buttonQuery.length) {
                searchQuery = buttonQuery
            } else {
                searchQuery = ''
            }
            console.log(searchQuery);

            if (!makingCall.current) {
                makingCall.current = true;

                setTimeout(() => {
                    makingCall.current = false;

                    let counter = 0;
                    const counting = setInterval(() => {
                        counter++;
                        console.log(counter);
                    }, 10)

    
                    const fetch = fetchProducts(searchQuery);
    
                    fetch
                        .then(data => {
                            console.log(data);
                            setProducts(data.products);
                            setErrorMessage('');
                            makingCall.current = false;
                            clearInterval(counting);
                            counter = 0;
                        })
                        .catch(error => {
                            console.log(error);
                            setErrorMessage(error);
                            setProducts([]);
                        })
    
                }, 2000);
            }
            

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
            {(!value) && <Recommendations getQuery={getQuery} />}
            {((value || buttonQuery) && products && !errorMessage) && <Results products={products} />}
            {((value || buttonQuery) && errorMessage) &&
                <div>
                    <p>{errorMessage}</p>
                    <p>Bitte versuchen Sie es nochmal</p>
                </div>
            }
        </div>
    );
}

export default Search;