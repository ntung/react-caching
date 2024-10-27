import React, { useState } from 'react';
import ChildComponent from './ChildrenComponent';

const ParentComponent = () => {
    const [number, setNumber] = useState(0);

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const handleIncrement = () => {
        setNumber(randomNumberInRange(1, 20));
    };
    return (
        <div>
            <p>Check</p>
            <ChildComponent onIncrement={handleIncrement} />
            <p>Count: {number}</p>
        </div>
    );
};
export default ParentComponent;