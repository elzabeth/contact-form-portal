import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import uuid from "react-uuid";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    // to add contact
    const addContactHandler = (contact) => {
        setContacts([...contacts, { id: uuid(), ...contact }])
    };

    // to remove contact
    const removeContactHandler = (id) => {
        setContacts(contacts.filter(obj => obj.id !== id))
    }

    //to retrieve the local storage data for very first time when the page is loaded
    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retrieveContacts) setContacts(retrieveContacts);
    }, []);

    //to store the data in local storage
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

  return (
      <div className="ui container">
          <Router>
              <Header/>
              <Routes>
                  <Route exact path="/" element={
                      <ContactList
                          contacts={contacts}
                          removeContactHandler={removeContactHandler} />
                  }/>
                  <Route exact path="/add" element={
                      <AddContact
                          addContactHandler={addContactHandler} />
                  }/>
              </Routes>
          </Router>
      </div>
  );
}

export default App;
