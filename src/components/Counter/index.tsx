import React, { useEffect, useState } from "react";

import "./style.css"

const Counter : React.FC = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("Counter Mounted");

        return function() {
            console.log("Counter Unmounted")
        }
    }, []);

    useEffect(() => {
        console.log("Counter changed");
    }, [counter]);
    
    return (
        <div className="counter-container">
            <h1>{counter}</h1>
            <button onClick={e => setCounter(counter+1)} style={{background: "lightgreen"}}>INC</button>
            <button onClick={e => setCounter(counter-1)} style={{background: "tomato"}}>DEC</button>
        </div>
    )
}

export default Counter;