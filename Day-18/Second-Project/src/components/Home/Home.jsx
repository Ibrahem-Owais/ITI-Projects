import React, { useState, useEffect } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component rendered or state updated');
    });

    useEffect(() => {
        console.log('Component Mounted (Loaded)');

        return () => {
            console.log('Component Unmounted (Destroyed)');
        };
    }, []);

    useEffect(() => {
        console.log(`Count changed to: ${count}`);
    }, [count]);

    return (
        <div className="container py-4">
            <h2>Home Component</h2>
            <p>Count: {count}</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                Increase Count
            </button>
        </div>
    );
}