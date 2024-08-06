import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import Employee from './Employee';

const Demo = () => {
    const [productDetails, setProductDetails] = useState([]);
    const [error, setError] = useState([]);
    const [id, setId] = useState("");
    useEffect(() => {
        axios.get("http://localhost:4000/employee/" + id)
        .then(response => setProductDetails(response.data))
        .catch(error => setError(error))
    });
    return (
        <div>
            {productDetails.map((productDetail) => 
            <Employee productDetail={productDetail} /> )}
        </div>
    );
}

export default Demo;