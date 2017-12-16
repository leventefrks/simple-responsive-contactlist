import React from 'react';

// displays contact picture - presentational component  
const ContactPicture = ({contact}) => {
    return (
        <img src={ contact.picture } alt={ contact.name } className="contact-profile-image" />
        );
}

export default ContactPicture;