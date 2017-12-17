import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// imorting the application's scss stylesheet
import './scss/App.scss';
// importing axios - it is responsible module for fetching local data
import axios from 'axios';
// importing the building blocks of the application
import ContactContainer from './components/contactcontainer';
import EditingContainer from './components/editingcontainer';
import Divider from './components/divider';
import CurrentContactContainer from './components/currentcontactcontainer';

// main wrapper
class ContactListApp extends Component {
  constructor() {
    super();
    // the inital state of the application
    this.state = {
      contacts: [], // empty array in the beginning 
      searchValue: '', // this state variable will be the filtered value
      currentContact: '',
      isActive: false,
      backgroundColor: '#eee'
    };
  }

  // invoking data fetching function
  componentDidMount() {
    this.dataFetch();
  }

  // local data fetching 
  dataFetch = () => {
    // local url of the static contact.json file
    const baseUrl = 'http://localhost:3000/contacts/contacts.json';
    axios.get(baseUrl)
      .then((response) => {

        // sorting contacts alphabetically
        const sortedContacts = response.data.sort((a, b) => {
          const contactA = a.name.toLowerCase();
          const contactB = b.name.toLowerCase();
          return (contactA < contactB) ? -1 : (contactA > contactB) ? 1 : 0;
        });

        // setting state after the data is fetched and sorted alphabetically
        this.setState({
          contacts: sortedContacts
        })
      })
      // error handling and description
      .catch((error) => {
        console.log(error);
      });
  }

  // selecting current contact profile
  currentContact = (contact) => {
    this.setState({
      currentContact: contact,
      isActive: !this.state.isActive
    })
  }

  // BONUS TASK - search for contacts
  searchContact = (e) => {
    this.setState({
      searchValue: e.target.value
    });
  }

  render() {
    if (this.state.contacts) {
      return (
        // the outermost wrapper container for the application

        <ReactCSSTransitionGroup transitionName="example" transitionAppear={ true } transitionAppearTimeout={ 500 } transitionEnter={ false }
          transitionLeave={ false }>
          <div className="ContactListApp">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <div className="contact-search-container">
                    <input type="text" className="contact-search col-sm-12" aria-label="Search for Contact" placeholder="&#xf002; Find contacts" autoComplete="off" onChange={ this.searchContact }
                    />
                  </div>
                  <Divider />
                </div>
                <div className="col-md-8 col-lg-8 col-xl-8">
                  <EditingContainer />
                </div>
              </div>
              <div className="row">
                <div className="col-xs-4 col-sm-5 col-md-4 col-lg-4 col-xl-4">
                  <ContactContainer contacts={ this.state.contacts } currentContact={ this.currentContact } search={ this.state.searchValue } isActive={ this.state.isActive } />
                </div>
                <CurrentContactContainer currentContact={ this.state.currentContact } />
              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>

        );
    }
  }
}

export default ContactListApp;
