import React from 'react';

import './AlbumName.css';

const AlbumName = ({ name, href }) => {
  return <a href={href} className='albumName'>{name}</a>;
};

export default AlbumName;