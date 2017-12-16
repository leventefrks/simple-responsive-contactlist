import React from 'react';

// displays contact name - presentational component  
const ContactName = ({contactName}) => {
  return (
    <div className="contact-profile-name">
      { contactName }
    </div>
    );
}

export default ContactName;