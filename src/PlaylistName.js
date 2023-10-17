import React from 'react'
import './PlaylistName.css'



const PlaylistName = ( {handleSubmit}) => {

  const testConsole = () => {
    console.log("saved to spotify")
  }

  return (
    <>
        <form className='NameList' onSubmit={handleSubmit}>
            <input type="text" placeholder='Name Your Playlist' id="nameplaylist" name="nameplaylist" />
            <button type="button" className='nameButton' onClick={testConsole}>Save To Spotify</button>
        </form>  
    </>
  )
}

export default PlaylistName
