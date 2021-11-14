import '../App.css';
import React, {useState, useCallback} from 'react';
import { fetchProducts } from '../api/index';

function Search() {
    const [value, setValue] = useState('')


    const handleChange = useCallback (
        (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(value)
            setValue(e.target.value);
        },
        [value],
    );

    return (
        <div>
            <form
            // onSubmit={}
            >
                <label htmlFor="">
                    <input
                        placeholder="Suche"
                        id=""
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                </label>
            </form>

        </div>
    );
}

export default Search;