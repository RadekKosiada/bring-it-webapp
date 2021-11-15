import '../App.css';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { fetchProducts } from '../api/index';
import formatPrice from '../helpers/formatPrice';

import Results from './Results';

interface Products {
    sku: string;
    name: string;
    image: string;
    packing: string;
    price: number;
    basePrice: number;
    baseUnit: string;
};

function Search() {
    const [value, setValue] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [products, setProducts] = useState<Array<Products>>([]);
    const isMounted = useRef(false);


    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(value)
            setValue(e.target.value);
        },
        [value],
    );

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

    }, [value])


    return (
        <div>
            <form>
                <input
                    placeholder="Suche"
                    id=""
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </form>
            {(value && products && !errorMessage) && <Results products={products} />}
            {(value && errorMessage) &&
                <div>
                    <p>{errorMessage}</p>
                    <p>Bitte versuchen Sie es nochmal</p>
                </div>
            }
        </div>
    );
}

export default Search;