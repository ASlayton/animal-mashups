import React, { Component } from 'react';
import './App.css';
import connection from '../firebaseRequests/connection';
import animalRequests from '../firebaseRequests/Animals';
import Animals from '../components/Animals/Animals';
import AnimalForm from '../components/AnimalForm/AnimalForm';

class App extends Component {
  state = {
    animals: [],
  }

  componentDidMount () {
    connection();
    animalRequests.getRequest()
      .then((animals) => {
        this.setState({animals});
      })
      .catch((err) => {
        console.error('error with animals GET:', err);
      });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Animal Mashup</h1>
        </header>
        <div className="col-sm-8">
          <Animals animals={this.state.animals} />
        </div>
        <div className="col-sm-4">
          <AnimalForm />
        </div>
      </div>
    );
  }
}

export default App;
