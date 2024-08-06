import React, { useState } from "react";

const Login = () => {
    const [status, setStatus] = useState(null);
    const [data, setData] = useState({
        username:"",
        password:""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        if(!data.username || !data.password) {
            setStatus(false)
        } else {
            setStatus(true)
        }
    };
    const handleChange = (event) => {
        let {name, value} = event.target;
        setData({
            ...data, [name]:value
        })
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label hthmlfor="name">Username:</label>
                        <input style={{width:"40%"}} type="text" name="username" id="username" value={data.username} className="form-control" onChange={handleChange} placeholder="Enter User Name"/> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass">Password:</label>
                        <input style={{width:"40%"}} id="password" name="password" type="password" value={data.password} onChange={handleChange} className="form-control" placeholder="Enter Password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    {status === false && <div className="text-error" >Enter User Name and Password</div>}
                    {status === true && <div className="text-success">Login Succes</div>}
                </form>
            </div>
        </>
    );
}

export default Login;