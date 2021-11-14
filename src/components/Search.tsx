import '../App.css';
import React, { useState, useCallback, useEffect } from 'react';
import { fetchProducts } from '../api/index';

function Search() {
    const [value, setValue] = useState('')


    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(value)
            setValue(e.target.value);
        },
        [value],
    );

    useEffect(() => {
        console.log('effect: ', value);
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
        </div>
    );
}

export default Search;