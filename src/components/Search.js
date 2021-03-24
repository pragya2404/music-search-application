import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup} from 'react-bootstrap';

class Search extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.searchArtist();
    }
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    return (
      <div className="App">
        <FormGroup>
          <InputGroup>
          <FormControl onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder='Search for an Artist'/>
        <button className="btn btn-danger" onClick={this.searchArtist}>Search</button>
        </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default Search;
