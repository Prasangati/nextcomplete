"use client";
import {useState} from 'react';


function Homepage(){
    const [count, setCount] = useState(4);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{setCount(count + 1)}}>
                Add one</button>
        </div>
    )
}
export default Homepage;