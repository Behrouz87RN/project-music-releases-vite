import React from 'react';
import AlbumName from './AlbumName';
import ArtistName from './ArtistName';
import CoverImage from './CoverImage';

import heartIcon from '../assets/icons/heart.svg';
import playIcon from '../assets/icons/play.svg';
import dotsIcon from '../assets/icons/dots.svg';

import './Album.css';

//  You should display the following for each album:
// - album cover image
// - album name
// - the name of each artist involved with a comma between  


const Album = ({ data }) => {
  const {name, images, artists , href} = data;

  return (
    <div className='albumItem'>
      <a className='imgContainer' href={href}>
        <CoverImage src={images[0].url} alt={name} />
        <div className='hoverButtons'>
          <span className='heartIcon'><img src={heartIcon} /></span>
          <span className='playIcon'><img src={playIcon} /></span>
          <span className='dotsIcon'><img src={dotsIcon} /></span>
        </div>
      </a>
      <AlbumName name={name} href={href} />
      <ArtistName artists={artists} />
    </div>
);
};

export default Album;