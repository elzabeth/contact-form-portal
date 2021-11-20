import React from 'react';
import ContactCard from './ContactCard'

const ContactList = (props) => {

    const renderContactsList = props.contacts.map((obj) => {
        return (<ContactCard key={obj.id} contacts={obj} />)
    })

    return (<div className="ui celled list">
        <h2>Contact List </h2>
        {renderContactsList}
    </div>)

}

export default ContactList;