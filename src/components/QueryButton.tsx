import React from 'react';

type QueryButtonProps = {
    title: string,
    getQuery: (feedback: string) => void
}

function QueryButton({ title, getQuery }: { title: string, getQuery: QueryButtonProps['getQuery'] }) {

    const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        getQuery((e.target as HTMLInputElement).value);
    }

    return (
        <input className="query-button" type="button" value={title} onClick={handleClick} />
    )
}

export default QueryButton;


