import React from 'react';

class CharDetails extends React.Component {
  state = {
    homeworld: null,
  };

  render() {
    return (
      <div>
        {this.state.homeworld !== null ? (
          <div>Homeworld: {this.state.homeworld.name}</div>
        ) : null}
      </div>
    )
  }

  componentDidMount() {
    fetch(this.props.homeworldUrl)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
}

export default CharDetails;