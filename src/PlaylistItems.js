import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';


const PlaylistItems = ({albums, playlistTracks, setPlaylistTracks, setAlbums}) => {

  const handleDelete = (id) => {
    const newAlbums = albums.filter((album) => album.id !== id);
    setAlbums(newAlbums);
    console.log(newAlbums)
}

  return (
    <>
         {albums.map( (album, i) => {
          return (
            <li key={album.id} className='track'>
              <img src={album.images[0].url} />
              <> "{album.name}" </>
              <FaTrashAlt role='button' tabIndex='0' className='addButton' onClick={handleDelete} />
            </li>
          )
        })}
       
    </>
  )
}

export default PlaylistItems


