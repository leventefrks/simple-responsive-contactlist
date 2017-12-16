import React from 'react';

// displays the number of contacts - presentational component  
const NumberOfContacts = ({contacts}) => {
    return (
        <div className="contact-list-number">
          { contacts.length } contacts
        </div>
        );
}

export default NumberOfContacts;