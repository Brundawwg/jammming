import React from 'react'
import './Playlist.css';
import PlaylistName from './PlaylistName';
import PlaylistItems from './PlaylistItems';




const Playlist = ({ albums, setAlbums, handleDelete, handleSubmit, playlistTracks, setPlaylistTracks }) => {
  return (
    <div className="playlistContainer">
      <div className="playlistHeader">Playlist</div>
      <div className="playlist">
        <PlaylistItems 
          albums={albums}
          setAlbums={setAlbums}
          handleDelete={handleDelete}          
          playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}
        />
      </div>
      <div>
        <PlaylistName 
        handleSubmit={handleSubmit}
        />
      </div>
    </div>
  )
}

export default Playlist