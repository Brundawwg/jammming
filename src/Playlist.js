import React from 'react'
import './Playlist.css';
import PlaylistName from './PlaylistName';
import PlaylistItems from './PlaylistItems';
import { FaPlus } from 'react-icons/fa'




const Playlist = ({ albums, setAlbums, handleDelete, handleSubmit, playlistTracks, setPlaylistTracks }) => {
  return (
    <div className="playlistContainer">
      <div className="playlistHeader">Playlist</div>
      <div className="playlist">
        <PlaylistItems 
          playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}
          albums={albums}
          setAlbums={setAlbums}
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