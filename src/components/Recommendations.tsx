import React, { useState } from 'react';

import QueryButton from './QueryButton';

function Recommendations({ getQuery }: { getQuery: (feedback: string) =>  void}) {

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
                        getQuery= {getQuery}
                    
                    />
                )
            })}
        </div>
    )
}

export default Recommendations

