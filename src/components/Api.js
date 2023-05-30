import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Api.css'
const API_URL = "https://jsonplaceholder.typicode.com/users"

function Api() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(API_URL)
            .then(res => setData(res.data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="api">

            {
                data?.map((item)=>
                    <div key={item} className="api__card">
                          <h3><font>id:</font>{item.id}</h3>  
                          <h3><font>Name:</font>{item.name}</h3>
                          <h3><font>Usernmae:</font>{item.username}</h3>
                          <h3><font>Email:</font>{item.email}</h3>
                          <h3><font>Street:</font>{item.address.street}</h3>
                          <h3><font>Suite:</font>{item.address.suite}</h3>
                          <h3><font>City:</font>{item.address.city}</h3>
                          <h3><font>Zipcode:</font>{item.address.zipcode}</h3>
                          <h3><font>Phone:</font>{item.phone}</h3>
                          <h3><font>Website:</font>{item.website}</h3>
                    </div>
                )
            }
                </div>
    )
}

export default Api