import React, { useEffect, useState, useRef } from "react";
import { IndividualTeluguSong } from './Data';
import { Link } from 'react-router-dom';

const SingleMovieAlbum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [audioPlayingIndex, setAudioPlayingIndex] = useState(null);
  const audioRef = useRef([]);

  const playAudio = (index) => {
    if (index === audioPlayingIndex) {
      // If the clicked song is already playing, pause it
      audioRef.current[index].pause();
      setAudioPlayingIndex(null);
    } else {
      // Pause the currently playing song, if any
      if (audioPlayingIndex !== null) {
        audioRef.current[audioPlayingIndex].pause();
      }
      // Start playing the clicked song
      audioRef.current[index].play();
      setAudioPlayingIndex(index);
    }
  };

  return (
    <div className='HomePage' style={{ minHeight: '100vh' }}>
      {IndividualTeluguSong.map((album, index) => (
        <div key={index}>
          <h3 className='text-white p-3 mx-4'>{album.Name} Album</h3>
          <div className="container col-xxl-8 px-4 py-5 d-flex justify-content-center">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={album.ImageUrl} className="d-block mx-lg-auto img-fluid rounded-5" alt="Album Cover" width="700" height="500" loading="lazy" />
            </div>
          </div>
          <div className='container my-5 border-bottom'>
            <h3 className='text-white'>Songs</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
              {album.SongList.map((song, songIndex) => (
                <div className="col d-flex justify-content-center my-2" key={songIndex}>
                  <div id="SmallCard">
                    <div className="img" id="SmallCardImg" style={{ background: `url(${album.ImageUrl})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100% 100%" }}></div>
                    <div className="textBox">
                      <div className="textContent">
                        <p className="h1 my-1">{album.Name}</p>
                      </div>
                      <p className="p my-1">{song.SongName}</p>
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div onClick={() => playAudio(index * album.SongList.length + songIndex)} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                          {audioPlayingIndex === index * album.SongList.length + songIndex ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <audio ref={(ref) => (audioRef.current[index * album.SongList.length + songIndex] = ref)} src={song.song} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleMovieAlbum;
