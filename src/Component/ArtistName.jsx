import React from 'react';

const ArtistName = ({ artists }) => {
  return <p>{
    artists.map((artist) => {
        return <a href={artist.external_urls.spotify}>{artist.name}, </a>;
    })
  }</p>;
};

export default ArtistName;