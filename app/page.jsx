"use client";
import {useState} from 'react';

import Form from "./components/form";
import Table from "./components/Table";

function Homepage(){

    const [favLinks, setFavLinks] = useState([]);
    function HandleNewFavLink(favlink){
        console.log(favlink, "in HomePage");
        let newFavLink = [...favLinks, favlink];
        setNewFavLink(favlink);
    }

    const [count, setCount] = useState(4);
    return (
        <div>
            <h1>FavLinks</h1>

            <Form submitFavLink={HandleNewFavLink}/>

            <Table data={favLinks}/>

        </div>
    )
}
export default Homepage;