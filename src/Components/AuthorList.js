import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router'

export default props => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/Author/' + authorId)
        .then(res => {
            removeFromDom(authorId)
        })
    }
    console.log(props)
    
    return (
        <div>
            {props.Author.map((author, idx)=>{
                
                return <p key={idx}>
                    <Link to={"/" + author._id}>
                        {author.FirstName}, {author.LastName}
                    </Link>
                    <button onClick={(e) =>{deleteAuthor(author._id)}}>
                        Delete this Author
                    </button>
                        </p>
            })}
        </div>
    )
}