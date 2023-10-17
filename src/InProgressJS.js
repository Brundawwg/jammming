const tracks = () => {
    const [tracks, setTracks] = useState([
      {
        id: 1
        artist: '',
        name: '' ,
        album: '',  
      }
    ])
  }; 

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
    const albums = albums.filter((album) => album.id !== id);
    setAlbums(albums);
}