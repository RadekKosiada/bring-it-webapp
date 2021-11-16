import React, { useState } from 'react';

import QueryButton from './QueryButton';

function Recommendations() {

    const [query, setQuery] = useState('');

    const recommendations = ['Wiesenhof', 'Eiscreme', 'Langnese',
        'Eier', 'Kidneybohnen'];

    const getQuery = (feedback: string) => {
        setQuery(feedback);
        console.log('feedback from REC: ', feedback);
    }

    return (
        <div>
            <p>Derzeit beliebt:</p>
            {recommendations.map((hint, index) => {
                return (
                    <QueryButton
                        key={index}
                        title={hint}
                        getQuery={getQuery}
                    />
                )
            })}
        </div>
    )
}

export default Recommendations

