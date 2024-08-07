import React, { useState } from "react";

const Serach = () => {
    const [serachText, setSearchText] = useState("");
    function handleKeyPress(event) {
        if(event.key === "Enter"){
            handleSubmit();
        } else {
            console.log("key pressed : ", event.key);
        }
    }
    function handleSubmit() {
        console.log("search submitted: ", serachText);
        // we can Also add Search submission Logic here
    }
    return (
        <>
        <h2>Search Form (Key-Events Demo)</h2>
        <input type="text" value={serachText} onChange={(event) => setSearchText(event.target.value)} onKeyPress={handleKeyPress} placeholder="Search..."/>
        <button onClick={handleSubmit}>Search</button>
        </>
    );
}

export default Serach;