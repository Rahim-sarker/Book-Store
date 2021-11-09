import React from 'react';
import { useParams } from 'react-router';

const Purches = () => {
    const { purchesID } = useParams();
    return (
        <div>
            <h2>This is Purches id:{purchesID}</h2>
        </div>
    );
};

export default Purches;