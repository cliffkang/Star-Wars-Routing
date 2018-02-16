import React from 'react';
import CharDetails from './CharDetails';
import axios from 'axios';

class CharHighlight extends React.Component {
  state = {
    starwarsChars: []
  };

  componentDidMount() {
    console.log('componentDidMount ran');
    let name = this.props.match.params.name;
    console.log('name is', name);
    axios
      .get(`https://swapi.co/api/people`)
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return(
        <div>
          {console.log('state inside render',this.state)}
          <div className='char'>
            <div className='bio'>
              <p>Birth Year: {this.findCharacter().birth_year}</p>
              <p>Gender: {this.findCharacter().gender}</p>
              <p>Weight (kg): {this.findCharacter().mass}</p>
              <p>Height (cm): {this.findCharacter().height}</p>
              <p>Eye Color: {this.findCharacter().eye_color}</p>
              <p>Hair Color: {this.findCharacter().hair_color}</p>
              {/* <CharDetails homeworldUrl={this.findCharacter().homeworld} /> */}
            </div>
          <h1>{this.findCharacter().name}</h1>
        </div>
      </div>
    )
  }

  findCharacter = () => {
    return this.state.starwarsChars.filter(character => {
      if(character.name === this.props.match.params.name) return character;
    });
  }
}


export default CharHighlight;