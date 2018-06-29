import React from 'react';
import './Animals.css';

class Animals extends React.Component {
  render () {
    const {animals} = this.props;
    const animalsItemComponents = animals.map((animal) => {
      return (
        <li key={animal.id} className="col-sm-6 col-md-4">
          <div className="row">
            <div>
              <div className="thumbnail">
                <img src={animal.imgUrl} alt={animal.name}></img>
                <div className="caption">
                  <h3>{animal.name}</h3>
                  <p>{animal.description}</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="Animals">
        <h2>Smooshy Beasties</h2>
        <ul>
          {animalsItemComponents}
        </ul>
      </div>
    );
  };
};

export default Animals;
