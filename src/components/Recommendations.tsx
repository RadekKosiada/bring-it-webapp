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
                        title={hint}
                        index={index}
                    />
                )
            })}
        </div>
    )
}

export default Recommendations

