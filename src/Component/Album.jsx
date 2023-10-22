import React from 'react';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import CoverImage from './CoverImage';

//  You should display the following for each album:
// - album cover image
// - album name
// - the name of each artist involved with a comma between  


const Album = ({ data }) => {
  const {name, images, artists , href} = data;

  return (
    <div className="album">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <CoverImage src={images[0].url} alt={name} />
        <AlbumName name={name} />
        <ArtistName artists={artists} />
      </a>
    </div>
  );
};

export default Album