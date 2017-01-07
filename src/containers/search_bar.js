import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    // need to bind the context when a callback is passed this way
    // binding the method as a property of this container
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    // need to fetch weather data
    this.props.fetchWeather(this.state.term);
    // clearing out the search input
    this.setState({ term: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Get a 5-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
    // callback assigned this way has a different binding for 'this'
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
  // ensures that the action (that is returned by the action creator) flows
  // flows down into the middleware and then the reducers
}

// hooking up action creator to the container searchbar
// here we don't map state to props and hence 1st arg is null
export default connect(null, mapDispatchToProps)(SearchBar);
// now can access this.props.fetchWeather
