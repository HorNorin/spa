import React from 'react';

export default class AnimeList extends React.Component {
  render() {
    const animeNodes = this.props.animes.map((anime) => {
      return (
        <a href="#" key={ anime.id }>
          <div className="image"><img src={ anime.image } /></div>
          <p>{ anime.title }</p>
        </a>
      );
    });

    return (<div className="animes">{ animeNodes }</div>);
  }
}
