import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AuthorForm from '../Components/AuthorForm';

export default props => {
    const { id } = props;
    const [author, setAuthor] = useState('');
    const[loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [])
    const updateAuthor = author => {
        axios.put('http://localhost:8000/api/author/' + id,author) 
            .then(res => console.log(res));
    }

    return(
        <div>
            {loaded &&  
                <AuthorForm
                    onSubmitProp={updateAuthor}
                    initialFirstName={author.FirstName}
                    initialLastName={author.LastName}/>
            }
        </div>
    )}
