import '../App.css';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { fetchProducts } from '../api/index';

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
    const [value, setValue] = useState('');
    const [products, setProducts ] = useState<Array<Products>>([]);
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
        })
        .catch(error => {
            console.log(error.message)
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
            {products && products.map((product, index) => {
                return (
                    <div key={index}>
                        <p>{product.name}</p>
                         < img src={product.image} />
                        </div>

                )
            })}
        </div>
    );
}

export default Search;