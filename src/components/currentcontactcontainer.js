import React, { Component } from 'react';

// displays the current container with its details
class CurrentContactContainer extends Component {

    render() {
        const currentContact = this.props.currentContact;
        if (currentContact.name) {
            return (
                <div className="col-xs-8 col-sm-7 col-md-8 col-lg-8 col-xl-8">
                  <div className="contact-description-container">
                    <div className="contact-description-profile">
                      <img src={ currentContact.picture } className="contact-description-picture" alt={ currentContact.name } />
                      <div className="contact-description-name">
                        <div className="contact-description-star fa-lg">
                          <i className="fa fa-star" aria-hidden="true"></i>
                        </div>
                        { currentContact.name }
                      </div>
                    </div>
                    <table className="table contact-descripton">
                      <tbody>
                        <tr>
                          <td className="contact-description-head">Phone</td>
                          <td>
                            { currentContact.phone }
                          </td>
                          <td className="contact-description-head">Home</td>
                        </tr>
                        <tr>
                          <td className="contact-description-head">Email</td>
                          <td>
                            { currentContact.email }
                          </td>
                          <td className="contact-description-head">Home <i className="fa fa-envelope fa-lg" aria-hidden="true"></i></td>
                        </tr>
                        <tr>
                          <td className="contact-description-head">Group</td>
                          <td>
                            { currentContact.group }
                          </td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                );
        } else {
            return (
                <div className="col-xs-8 col-sm-7 col-md-8 col-lg-8 col-xl-8">
                  <div className="contact-description-container-init">
                    <h1>Contact List WebApp</h1>
                  </div>
                </div>
                );
        }
    }
}

export default CurrentContactContainer;