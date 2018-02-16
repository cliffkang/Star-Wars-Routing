import React, { Component } from "react";
import "./App.css";
import AppStyled from "./AppStyled";
import Character from "./Character";
import CharHighlight from "./CharHighlight";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    starwarsChars: []
  };

  componentDidMount() {
    fetch("https://swapi.co/api/people")
      .then(res => {
        return res.json();
      })
      .then(data => {
        const pattern = /https:\/\/swapi.co\/api\/people\/(.*?)\//;
        const starwarsChars = data.results.map(char => ({
          id: char.url.match(pattern)[1],
          ...char
        }));
        this.setState({ starwarsChars });
      })
      .catch(err => {
        throw new Error(err);
      });
    console.log("App Component Mount", this.state);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={this.Main} exact />
          <Route path="/character/:id" component={CharHighlight} />
        </div>
      </Router>
    );
  }

  Main = () => {
    return (
      <AppStyled>
        <div className="Header" />
        <div className="character">
          {console.log("Main runs state", this.state)}
          {this.state.starwarsChars.map(character => {
            return <Character key={character.id} character={character} />;
          })}
        </div>
      </AppStyled>
    );
  };
}

export default App;
