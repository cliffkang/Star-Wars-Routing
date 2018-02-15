import React, { Component } from 'react';
import './App.css';
import AppStyled from './AppStyled';
import Character from './Character';

class App extends Component {
  state = {
    starwarsChars: []
  };
  
  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <AppStyled>
        <div className='Header'></div>
        <div className='character'>
          {
            this.state.starwarsChars.map(character => {
              return <Character character={character} />
            })
          }
        </div>
      </AppStyled>
    );
  }
}

export default App;
