import React from 'react'
import './Results.css'
import { FaPlus } from 'react-icons/fa'



const Results = ( {tracks, handleSubmit, albums, setAlbums, playlistTracks, setPlaylistTracks} ) => {


const addToPlaylist= () => {
  setPlaylistTracks(playlistTracks, ...playlistTracks)
  console.log(playlistTracks)

}

  return (
    <div className="resultsContainer">
      <div className="resultsHeader">
        Results
      </div>
      <div className="results">
         <>
         {albums.map( (album, i) => {
          return (
            <li key={album.id} className='track'>
              <img src={album.images[0].url} />
             "{album.name}"
              <FaPlus role='button' tabIndex='0' className='addButton' onClick={addToPlaylist} />
            </li>
          )
        })}
       
          </>
      </div>
    </div>
  )
}

export default Results


