import React from 'react'
import Playlist from './Playlist';
import Results from './Results';
import './Content.css';
import { useState } from 'react';


const Content = ({handleSubmit, albums, setAlbums, tracks, playlistTracks, setPlaylistTracks}) => {

  return (
    <div className="container">
        <div>
          <Results 
            albums={albums}
            handleSubmit={handleSubmit}
            setAlbums={setAlbums}
            tracks={tracks}
            playlistTracks={playlistTracks}
            setPlaylistTracks={setPlaylistTracks}
            
          />
        </div>
        <div>
          <Playlist 
            tracks={tracks}
            playlistTracks={playlistTracks}
            setPlaylistTracks={setPlaylistTracks}
            handleSubmit={handleSubmit}
            setAlbums={setAlbums}
            albums={albums}
          />
        </div>
    </div>
  )
}

export default Content