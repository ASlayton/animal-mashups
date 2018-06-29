import React from 'react';
import './AnimalForm.css';

class AnimalForm extends React.Component {
  render () {
    return (
      <div>
        <h2>Submit a Smashimal</h2>
        <div>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Name</span>
            <input type="text" className="form-control" placeholder="Give it a name..." aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <span className="input-group-addon" id="basic-addon1">Image URL</span>
            <input type="text" className="form-control" placeholder="Where's the evidence?" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group">
            <label htmlFor="animal-desc">Description:</label>
            <textarea id="animal-desc" type="text" className="form-control" placeholder="Describe your smashimal..." aria-describedby="basic-addon1" />
          </div>
        </div>
      </div>
    );
  }
};

export default AnimalForm;
