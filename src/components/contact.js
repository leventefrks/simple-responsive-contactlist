
import React from 'react';
import ContactPicture from './contactpicture';
import ContactName from './contactname';

// each contact in the contact list
const Contact = ({contact, isActive}) => {
    const showProfile = () => {
        console.log(contact.name);
        console.log(isActive);
    }

    return (
        <div>
          <div className="contact-order"></div>
          <li className="contact-profile" onClick={ showProfile }>
            <ContactPicture contact={ contact } />
            <ContactName contactName={ contact.name } />
          </li>
        </div>
        );
}

export default Contact;