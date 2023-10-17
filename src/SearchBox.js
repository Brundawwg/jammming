import React from 'react'
import './SearchBox.css';

const SearchBox = ( {setSearchInput, search, handleSubmit} ) => {

 
   
  return (
    <>
      <form className='search' id="searchform" name="searchform" onSubmit={handleSubmit} autoComplete='off' >
        <input 
        type="text" 
        id="searchbar"
        name="searchbar"
        className="box" 
        placeholder='Enter Search Here'
        tabIndex="0"
        onChange={event => setSearchInput(event.target.value)}
        required
        />
        <button type="button" className='searchButton' onClick={handleSubmit}> Get Searchin!!</button>
      </form>
    </>
  )
}

export default SearchBox
