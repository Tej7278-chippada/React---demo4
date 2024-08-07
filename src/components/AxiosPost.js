import React, { useState } from 'react';
import axios from 'axios';

const AxiosPost = () => {
    const [state, setState] = useState({
        personName : "",
        age : ""
    });
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/data", state)
        .then((response) => {
            setState("");
            console.log(response.data);
        })
        .catch((error) => {
            console.log("Cant Post");
        });
    };
    return (
        <>
        <h1 style={{backgroundColor:"green", color:"White", padding:"15px",}}>Data Form</h1>
        <form onSubmit={handleSubmit} style={{margin:"100px"}}>
            <input type="text" name="personName" onChange={handleChange} placeholder="enter Name" value={state.personName} style={{borderRadius:"15px"}}></input><br/><br/>
            <input type="number" name='age' onChange={handleChange} placeholder='Enter age' value={state.age} style={{borderRadius:"15px"}}></input><br/>
            <button type='submit' style={{padding:"15px", margin:"20px", width:"250px", marginLeft:"350px"}}>Submit</button>
            {/* {success?<div className="text-success">{success}</div>:null}
            {error?<div className="text-danger">{error}</div>:null} */}
        </form>
        </>
    );
};

export default AxiosPost;