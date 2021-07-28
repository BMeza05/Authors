import axios from 'axios';
import React, {useEffect, useState} from 'react'
import AuthorForm from '../Components/AuthorForm'
import AuthorList from '../Components/AuthorList'

export default () => {
    const [Author, setAuthor] = useState([]);

    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/Author')
        .then(res =>{
            setAuthor(res.data);
            setLoaded(true);
        });
    },[])

    const removeFromDom = AuthorId =>{
        setAuthor(Author.filter(Author => Author._id !== AuthorId));
    }

    const createAuthor = newAuthor => {
        axios.post('http://localhost:8000/api/Authors', newAuthor)
        .then(res => {
            setAuthor([...Author, res.data]);
        })
    }

    return(
        <div>
            < AuthorForm onSubmitProp={createAuthor} initialFirstName=""
            initialLastName=""/>
            <hr/>
            {loaded && <AuthorList Author={Author} removeFromDom={removeFromDom}/>}
        </div>
    )
}