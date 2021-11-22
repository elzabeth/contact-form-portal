import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard'

const ContactList = (props) => {

    const renderContactsList = props.contacts.map((obj) => {
        return (<ContactCard key={obj.id} contacts={obj} removeContactHandler={props.removeContactHandler}/>)
    })

    return (
        <div className="main">
            <h2>Contact List 
            <Link to="/add">
                <button className="ui right floated button blue">Add Button</button>
            </Link>
            </h2>
            <div className="ui celled list">
                {renderContactsList}
            </div>
        </div>);
}

export default ContactList;