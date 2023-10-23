
  {albums.map( (album, i) => {
    return (
      <li key={album.id} className='track'>
        <img src="#" />
        <> "{album.name}" </>
      </li>
    )
  })}



<ul>
          {tracks.map((track) => (
            <li className= 'track' key={track.id}>
              {track}
              <FaTrashAlt role='button' tabIndex='0' />
            </li>
          ))}
</ul>

const handleDelete = (album.id) => {
    const deletedList = albums.filter((album) => album.id !== id);
    setAlbums(albums);
};

{playlistTracks.map( (track, i) => {
  return (
    <li key={track.id} className='track'>
      <img src={track.images[0].url} />
     "{track.name}"
      <FaPlus role='button' tabIndex='0' className='addButton'  />
    </li>
  )
})}