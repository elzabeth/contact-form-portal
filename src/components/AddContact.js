import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddContact(props) {

    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email:""
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const add = (e) => {
        e.preventDefault();
        if (contact.name === "" || contact.email === "") {
            alert("All fields are mandatory")
            return;
        }

        props.addContactHandler(contact);

        setContact(prevState => ({
            ...prevState,
            name: "",
            email: ""
        }))

        navigate('/')

    }

    return (
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"
                        value={contact.name}
                        onChange={handleChange} />
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"
                        value={contact.email}
                        onChange={handleChange} />
                </div>
                <button className="ui button blue" onClick={add}>
                    Add</button>
            </form>
        </div>
    );
}

export default AddContact;