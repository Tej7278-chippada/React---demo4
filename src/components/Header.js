import React from "react";
import {Link, Outlet} from 'react-router-dom';
const Header = () => {
    return (
        <nav>
            <Link to="1">Register</Link> |
            <Link to="login">Login</Link> |
            <Link to="axiosPostDelete">Axios Post Delete</Link>
            <Outlet/>
        </nav>
    );
}

export default Header;