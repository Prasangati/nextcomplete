"use client";
import { useState } from 'react';

import Form from "./components/form";
import Table from "./components/Table";

function Homepage() {

    const [favLinks, setFavLinks] = useState([]);
    function handleNewFavLink(favLink) {
        console.log(favLink, "in HomePage");
        let newFavLinks = [...favLinks, favLink];
        setFavLinks(newFavLinks);
    }

    return (
        <div>
            <h1>FavLinks</h1>

            <Form submitFavLink={handleNewFavLink} />

            <Table data={favLinks} />

        </div>
    );
}

export default Homepage;
