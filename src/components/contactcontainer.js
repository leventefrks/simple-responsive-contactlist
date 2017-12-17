import React from 'react';
import Contact from './contact';
import NumberOfContacts from './numberofcontacts';

const ContactContainer = ({contacts, currentContact, search, isActive}) => {

  // filtering the contacts
  let filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
  });

  //  map through the contacts (in the beginning it is the full list fetched by axios)
  let contactItem = filteredContacts.map((contact) => {

    return (
      <Contact key={ contact._id } contact={ contact } currentContact={ currentContact } isActive={ isActive } />)
  });

  return (
    <div>
      <NumberOfContacts contacts={ contacts } />
      <ul className="contact-container-outer">
        <div className="contact-container-inner">
          { contactItem }
        </div>
      </ul>
    </div>
    );
}

export default ContactContainer;