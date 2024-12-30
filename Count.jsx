
import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Nisanth');

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const setNameToNisanth = () => {
        setName('Nisanth');
    };

    return (
        <div id='count'>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <div>
                <input type="text" value={name} onChange={handleNameChange} placeholder="Enter name" />
        
                <h2>User Name: {name}</h2>
            </div>
        </div>
    );
};

export default Count;