import React, { Component } from "react";
import "./App.css";
import AppStyled from "./AppStyled";
import Character from "./Character";
import CharHighlight from './CharHighlight';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
      console.log('App Component Mount',this.state);
  }

  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={this.Main} exact />
          <Route path='/character/:name' component={CharHighlight} />
        </div>
      </Router>
    );
  }

  Main = () => {
    return <AppStyled>
      <div className="Header" />
      <div className="character">
        {console.log('Main runs state', this.state)}
        {this.state.starwarsChars.map(character => {
          return <Character character={character}/>;
        })}
      </div>
    </AppStyled>
  }

  // CharHighlight = () => {
  //   const specific = this.state.starwarsChars.filter(character => {
  //     if(character.name === props.match.params.name) return character;
  //   })
  //   return <CharHighlight character={specific}/>
  // }
}

export default App;
