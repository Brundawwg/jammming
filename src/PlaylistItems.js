import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';



const PlaylistItems = ({albums, playlistTracks, setPlaylistTracks, setAlbums}) => {
  
  const handleDelete = (id) => {
    var updatedList = playlistTracks.filter((track) => track.id !== id);
    setPlaylistTracks(updatedList);
};

  const putAlbumBack = (id) => {
    var updatedAlbums = albums.push(id);
    setAlbums(updatedAlbums);
  } 


    return (
      <>
    {playlistTracks.map( (track, i) => {
      return (
        <li key={track.id} className='track'>
          <img src={track.images[0].url} />
         "{track.name}"
          <FaTrashAlt role='button' tabIndex='0' className='addButton' onClick={() => {setAlbums([...albums, track]); handleDelete(track.id); }} />
        </li>
      )
    })}
    </>
  )
    
}

export default PlaylistItems


