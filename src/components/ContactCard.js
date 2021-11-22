import React from 'react'
import user from '../images/user.png'
import { useNavigate } from 'react-router-dom';

export default function ContactCard(props) {

    const navigate = useNavigate();

    const { name, email, id } = props.contacts

    const displayContactDetails = () => {
        navigate(`/contact/${id}`,
            {
                state:
                {
                    contact: props.contacts
                }
            });
    }

     return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
             <div className="content" >
                 <span
                     style={{ cursor: "pointer" }}
                     onClick={() => { displayContactDetails() }}>
                    <div className="header">{name}</div>
                    <div>{email}</div>
                 </span>
            </div>
             <i className="trash alternate outline icon"
                 style={{ color: "red", marginTop: "2 px" }}
                 onClick={() => props.removeContactHandler(id)}
             ></i>
        </div>
        )
}