import React, {useState} from 'react'
import axios from 'axios';
export default props => {
    const { initialFirstName, initialLastName, onSubmitProp} = props;
    const [FirstName, setFirstName] = useState(initialFirstName);
    const [LastName, setLastName] = useState(initialLastName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({FirstName,LastName})
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>First Name</label><br/>
                <input 
                type="text"
                value={FirstName}
                onChange={(e)=>setFirstName(e.target.value)} />
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text"
                value= {LastName}
                onChange={(e)=>setLastName(e.target.value)} />
            </p>
            <input type="submit"/>
        </form>
    )
}