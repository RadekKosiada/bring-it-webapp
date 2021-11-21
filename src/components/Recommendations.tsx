import React from 'react';

import QueryButton from './QueryButton';

function Recommendations({ getQuery }: { getQuery: (feedback: string) => void }) {

    const recommendations = ['Wiesenhof', 'Eiscreme', 'Langnese',
        'Eier', 'Kidneybohnen'];

    return (
        <div className="recommendations-container">
            <p className="recommendations-title">Derzeit beliebt:</p>
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

