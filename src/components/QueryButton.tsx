import React, {useState} from 'react';

function QueryButton({ title }: { title: string }) {

    const [query, setQuery] = useState('');

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setQuery((e.target as HTMLButtonElement).innerHTML);
        console.log(query)
    }

    return (
        <button onClick={handleClick}>{title}</button>
    )
}

export default QueryButton

