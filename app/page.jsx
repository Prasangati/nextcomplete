"use client";
import {useState} from 'react';

import Form from "./components/form";
import Table from "./components/Table";

function Homepage(){
    const [count, setCount] = useState(4);
    return (
        <div>
            <h1>FavLinks</h1>

            <Form />

            <Table />

        </div>
    )
}
export default Homepage;