import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosDelete = () => {
    const [storedData, setStoredData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4000/data").then((result) => {setStoredData(result.data)}).catch((error) => { alert("Something went wronge")});
    }, []);
    const handleDelete = (id) => {
        axios.delete("http://localhost:4000/data/"+id).then((result) => { alert("The ID : "+id+"is Deleted");}).catch((error) => { alert("Data not Deleted");} );
    };
    return (
        <div style={{backgroundColor:"white", opacity:"0.95", marginTop:"50px"}}>
            {storedData.map((details) => {
                return (
                    <div style={{ padding: "5px", borderRadius: "10px" }}
                          key={details.id}>
                          <h4 style={{
                              backgroundColor: "blueviolet",
                              color: "white",
                              borderRadius: "15px",
                              padding: "5px",
                            }} >Id : {details.id}</h4>
                          <p>Person Name : {details.personName}</p>
                          <p>Place : {details.age}</p>
                          <button onClick={() => {handleDelete(details.id);}}
                            style={{ padding: "10px", borderRadius: "5px", fontSize: "11px" }}>
                            Delete
                          </button>
                        </div>
                      );
            })}
        </div>
    );
};

export default AxiosDelete;