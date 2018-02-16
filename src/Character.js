import React from 'react';
import CharDetails from './CharDetails';
import { Link } from 'react-router-dom'

function Character(props) {
  return(
    <Link to={`/character/${props.character.id}`} >
      <div className='char'>
        <div className='bio'>
          <p>Birth Year: {props.character.birth_year}</p>
          <p>Gender: {props.character.gender}</p>
          <p>Weight (kg): {props.character.mass}</p>
          <p>Height (cm): {props.character.height}</p>
          <p>Eye Color: {props.character.eye_color}</p>
          <p>Hair Color: {props.character.hair_color}</p>
          <CharDetails homeworldUrl={props.character.homeworld} />
        </div>
        <h1>{props.character.name}</h1>
      </div>
      {/* <Route path='/character/:name' component={this} /> */}
    </Link>
  )
}
export default Character;