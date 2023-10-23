import React, { useState } from 'react'
import './Results.css'
import { FaPlus } from 'react-icons/fa'



const Results = ( {tracks, handleSubmit, albums, setAlbums, playlistTracks, setPlaylistTracks} ) => {


  const resultDelete = (id) => {
    var updatedResults = albums.filter((album) => album.id !== id);
    setAlbums(updatedResults);
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
                  <FaPlus role='button' tabIndex='0' className='addButton' onClick={() => {setPlaylistTracks([...playlistTracks, album]);resultDelete(album.id)} } />
                </li>
              )
            })}
          
              </>
          </div>
        </div>
      )
  }


export default Results