import './App.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import SearchBox from './SearchBox';
import { useEffect, useState } from 'react';

// API Stuff //
const CLIENT_ID="a3b0ca25d17a4daaba31c6d69e2ad290";
const CLIENT_SECRET="66698f8cb1174dec950e27be23231529";



function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [tracks, setTracks]= useState([{
    name: '',
    id: 1

  }]);


  
useEffect(() => {
  var authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
  }
  fetch('https://accounts.spotify.com/api/token', authParameters)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
}, []);


async function search() {

   //Artist ID
  var searchParameters = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
    }
  }

 

  var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
    .then(response => response.json())
    .then(data => {return data.artists.items[0].id})
    

    console.log("Artist ID is " + artistID);

  //grab albums
  var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
    .then(response => response.json())
    .then(data => {setAlbums(data.items);
    });

    console.log(albums)

  //display albums
};

const handleSubmit = (event) => {
  
  event.preventDefault();
  search();
}

   return (
    
    <>
    <Header />
    <SearchBox 
      setSearchInput={setSearchInput}
      search={search}
      handleSubmit={handleSubmit}
    />
    <Content 
      handleSubmit={handleSubmit}
      albums={albums}
      setAlbums={setAlbums}
      tracks={tracks}
      playlistTracks={playlistTracks}
      setPlaylistTracks={setPlaylistTracks}
    />
    <Footer />
    </>
  );
}

export default App;
