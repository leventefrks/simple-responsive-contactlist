import React from 'react';

// displays the editing container with icons
const EditingContainer = () => {
    return (
        <div className="editing-container float-right">
          <div className="editing-new">
            <i className="fa fa-envelope" aria-hidden="true"> </i> New
          </div>
          <div className="editing-pencil">
            <i className="fa fa-pencil" aria-hidden="true"></i>
          </div>
        </div>
        );
}

export default EditingContainer;