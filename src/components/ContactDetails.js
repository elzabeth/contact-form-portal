import React from 'react'
import user from '../images/user.png'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ContactDetails(props) {
    const location = useLocation();
    const { name, email } = location.state.contact;

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="ui one column stackable center aligned page grid">
                <Link to="/">
                <button className="ui button blue center">
                        Back to Contact List</button>
                </Link>
            </div>
        </div>
    )
}