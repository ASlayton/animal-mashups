import React from 'react';
import './AnimalForm.css';
import PropTypes from 'prop-types';

const defaultForm = {
  name: '',
  description: '',
  imgUrl: '',
};
class AnimalForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    newAnimal: defaultForm,
  };

  formFieldStringState = (name, e) => {
    const tempAnimal = {...this.state.newAnimal};
    tempAnimal[name] = e.target.value;
    this.setState({newAnimal: tempAnimal});
  };

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  };

  descriptionChange = (e) => {
    this.formFieldStringState('description', e);
  };

  imgUrlChange = (e) => {
    this.formFieldStringState('imgUrl', e);
  };

  formSubmit = (e) => {
    const {onSubmit} = this.props;
    const {newAnimal} = this.state;
    e.preventDefault();
    if (
      newAnimal.name &&
      newAnimal.description &&
      newAnimal.imgUrl
    ) {
      onSubmit(this.state.newAnimal);
      this.setState({newAnimal: defaultForm});
    } else {
      alert ('Something has gone wrong');
    };
  };

  render () {
    const {newAnimal} = this.state;
    return (
      <div>
        <h2>Submit a Smashimal</h2>
        <form onSubmit={this.formSubmit}>
          <fieldset>
            <label htmlFor="name">Name:</label>
            <br/>
            <input
              type="text"
              id="name"
              placeholder="Enter Critter Name Here..."
              value={newAnimal.name}
              onChange={this.nameChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="imgUrl">Image:</label>
            <br/>
            <input
              type="text"
              id="imgUrl"
              placeholder="Enter Image URL HERE..."
              value={newAnimal.imgUrl}
              onChange={this.imgUrlChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="description">Description:</label>
            <br/>
            <input
              type="text"
              id="description"
              placeholder="Enter Brief Description"
              value={newAnimal.description}
              onChange={this.descriptionChange}
            />
          </fieldset>
          <button>Submit Smashimal</button>
        </form>
      </div>
    );
  }
};

export default AnimalForm;
