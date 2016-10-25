import AnimeList from './animeList';
import { connect } from 'react-redux';
import React, { PropTypes } from 'react';

class App extends React.Component {
  static propTypes = {
    animes: PropTypes.array.isRequired
  }

  render() {
    const { animes } = this.props;

    if (animes.length === 0) {
      return null;
    } else {
      return (<AnimeList animes={ animes } />);
    }
  }
}

export default connect(
  (state) => state,
  { }
)(App);
