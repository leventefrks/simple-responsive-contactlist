
import React, { Component } from 'react';
import ContactPicture from './contactpicture';
import ContactName from './contactname';
// each contact in the contact list


// displays the current container with its details
class Contact extends Component {
  render() {
    return (
      <div>
        <div className="contact-order"></div>
        <li className="contact-profile" onClick={ () => {
                                                    this.props.currentContact(this.props.contact)
                                                  } }>
          <ContactPicture contact={ this.props.contact } />
          <ContactName contactName={ this.props.contact.name } />
        </li>
      </div>
      );
  }
}

export default Contact;
