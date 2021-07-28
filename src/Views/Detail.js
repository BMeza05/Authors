import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default props => {
    const [author, setauthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/:id" + props.id)
            .then(res => setauthor(res.data))
    }, [])
    return (
        <div>
            <p>First Name: {author.FirstName}</p>
            <p>Last Name: {author.LastName}</p>
            <link to={"/author/" + author.id + "/edit"}>
            Edit This Author
            </link>
        </div>
    )
}
