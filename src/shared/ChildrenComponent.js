import React from 'react';

const ChildComponent = ({ onIncrement }) => {
    return (
        <button onClick={onIncrement}>
            Increment Count
        </button>
    );
};
export default ChildComponent;