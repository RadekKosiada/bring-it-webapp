import React, {useState} from 'react';

function QueryButton({ title, index }: { title: string; index: number }) {

    const [query, setQuery] = useState('');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuery((e.target as HTMLButtonElement).innerHTML);
        console.log(query)
    }

    return (
        <div>
            <button key={index} onClick={handleClick}>{title}</button>
        </div>
    )
}

export default QueryButton

