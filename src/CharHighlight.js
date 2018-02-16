import React from "react";
import CharDetails from "./CharDetails";
import axios from "axios";

class CharHighlight extends React.Component {
  state = {
    starwarsChar: null
  };

  componentDidMount() {
    axios
      .get(`https://swapi.co/api/people/${this.props.match.params.id}`)
      .then(data => {
        this.setState({ starwarsChar: data.data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  // // regex expression to get the number out of the URL
  // /https:\/\/swapi.co\/api\/people\/(*.?)\//

  render() {
    if (!this.state.starwarsChar) {
      return <div>Loading character information...</div>;
    } else {
      return (
        <div>
          <div className="char">
            <div className="bio">
              <p>Birth Year: {this.state.starwarsChar.birth_year}</p>
              <p>Gender: {this.state.starwarsChar.gender}</p>
              <p>Weight (kg): {this.state.starwarsChar.mass}</p>
              <p>Height (cm): {this.state.starwarsChar.height}</p>
              <p>Eye Color: {this.state.starwarsChar.eye_color}</p>
              <p>Hair Color: {this.state.starwarsChar.hair_color}</p>
              <CharDetails homeworldUrl={this.state.starwarsChar.homeworld} />
            </div>
            <h1>{this.state.starwarsChar.name}</h1>
          </div>
        </div>
      );
    }
  }
}

export default CharHighlight;
