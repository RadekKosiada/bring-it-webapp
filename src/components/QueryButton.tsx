import React, {useState} from 'react';

// type QueryButtonProps = {
//     title: string,
//     getQuery: (feedback: string) =>  void
// }

function QueryButton({ title, getQuery }: { title: string, getQuery: (feedback: string) =>  void}) {

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        getQuery((e.target as HTMLButtonElement).innerHTML);
    }

    return (
        <button onClick={handleClick}>{title}</button>
    )
}

export default QueryButton;

