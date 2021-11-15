import React from 'react';

import QueryButton from './QueryButton';

function Recommendations() {
    const recommendations = ['Wiesenhof', 'Eiscreme', 'Langnese',
        'Eier', 'Kidneybohnen'];

    return (
        <div>
            <p>Derzeit beliebt:</p>
            {recommendations.map((hint, index) => {
                return (
                    <QueryButton
                        key={index}
                        title={hint}
                    />
                )
            })}
        </div>
    )
}

export default Recommendations

