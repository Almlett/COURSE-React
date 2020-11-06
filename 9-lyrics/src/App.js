import React, { Fragment, useState, useEffect } from 'react';
import Form from './Components/Form.jsx';
import Lyrics from './Components/Lyrics.jsx';
import ArtistInfo from './Components/ArtistInfo.jsx';
import axios from 'axios';

function App() {

  const [searchLyrics, setSearchLyrics] = useState({})
  const [lyrics, setLyrics] = useState('')
  const [artist_information, setArtistInformation] = useState({})

  useEffect(() => {
    if (Object.keys(searchLyrics).length === 0) return;
    const {artist, song} = searchLyrics;

    const ConsultAPILyrics = async () => {
      const url_lyrics = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const url_artist = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      const [lyrics, information] = await Promise.all([
        axios.get(url_lyrics),
        axios.get(url_artist)
      ])
     
      if (information.data.artists){
        setLyrics(lyrics.data.lyrics)
        setArtistInformation(information.data.artists[0])
      }
    };

   
    ConsultAPILyrics();
     
  },[searchLyrics])


  return (
    <Fragment>
      <Form 
        setSearchLyrics={setSearchLyrics}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo
              artist_information={artist_information}
            />
          </div>
          <div className="col-md-6">
            <Lyrics 
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
