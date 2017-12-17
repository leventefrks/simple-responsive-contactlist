import React from 'react';

// displays the editing container with icons
const EditingContainer = () => {
  return (
    <div className="editing-container float-right">
      <div className="editing-new" data-toggle="tooltip" title="New Contact">
        <i className="fa fa-envelope" aria-hidden="true"> </i> New
      </div>
      <div className="editing-pencil" data-toggle="tooltip" title="Edit Contact">
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </div>
    </div>
    );
}

export default EditingContainer;