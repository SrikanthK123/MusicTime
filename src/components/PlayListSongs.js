import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import SoundWave from "../Assets/SongsList/SoundWave.gif"
import { remove } from "../store/cartSlice";

const PlayListSongs = () => {
    const SongCart = useSelector(state => state.cart)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dispatch = useDispatch()
    const [audioPlayingIndex, setAudioPlayingIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef([]);

    useEffect(() => {
        const handleAudioEnded = () => {
            // Find the index of the next song
            const nextIndex = (audioPlayingIndex + 1) % SongCart.length;
            // Play the next song
            playAudio(nextIndex);
        };
    
        // Listen for audio ended event
        if (audioPlayingIndex !== null) {
            audioRef.current[audioPlayingIndex].addEventListener("ended", handleAudioEnded);
        }
    
        // Clean up event listener
        return () => {
            if (audioPlayingIndex !== null) {
                audioRef.current[audioPlayingIndex].removeEventListener("ended", handleAudioEnded);
            }
        };
    }, [audioPlayingIndex, SongCart]);
    

    const updateTime = () => {
        const audioElement = audioRef.current[audioPlayingIndex];
        if (audioElement) {
            setCurrentTime(audioElement.currentTime);
            setDuration(audioElement.duration);
        }
    };
    
    const playAudio = (index) => {
        const audioElement = audioRef.current[index];
        if (!audioElement) {
            console.error(`Audio element at index ${index} is undefined.`);
            return;
        }
    
        if (index === audioPlayingIndex) {
            // If the clicked song is already playing, pause it
            if (!audioElement.paused) {
                audioElement.pause();
            }
            setAudioPlayingIndex(null);
        } else {
            // Pause the currently playing song, if any
            const currentAudioElement = audioRef.current[audioPlayingIndex];
            if (currentAudioElement && !currentAudioElement.paused) {
                currentAudioElement.pause();
            }
            // Start playing the clicked song
            if (audioElement.paused) {
                audioElement.play()
                    .then(() => {
                        setAudioPlayingIndex(index);
                    })
                    .catch((error) => {
                        console.error(`Error playing audio at index ${index}:`, error);
                    });
            }
        }
    };
    const removeItem = (SongName) => {
        if (SongName) {
            dispatch(remove(SongName));
        } else {
            console.error("SongName is null or undefined.");
        }
    };
    
    
    
    

    return (
        <div className="HomePage" style={{ width: '100%', minHeight: '100vh' }}>
            <div className='container '>
                <h3 className='text-white border-bottom py-3'>PlayList Songs</h3>
                {
                    SongCart.length === 0 ? (
                        <div style={{ width: '100%', height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            {SongCart.length === 0 ? (
                                <div>
                                    <h3 style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>No favorite Songs 😞.</h3>
                                    <p style={{ textAlign: 'center', color: 'white' }}>Add some songs to your playlist!</p>
                                </div>
                            ) : (
                                <h3 style={{ textAlign: 'center', marginTop: '20px', color: 'white' }}>Your Playlist</h3>
                            )}
                        </div>

                    ) : (
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mx-3">
                           {SongCart.map((song, songIndex) => (
    <div className="col d-flex justify-content-center my-2" key={songIndex}>
        <div id="SmallCard">
            <div className="img" id="SmallCardImg" style={{ background: song?.imageUrl ? `url(${song.imageUrl})` : 'url(defaultImageUrl)', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100% 100%" }}>
                {audioPlayingIndex === songIndex && <img src={SoundWave} style={{ height: '100%', width: '100%', backgroundColor: '#060505C7', borderRadius: '10px' }} />}
            </div>
            <div className="textBox">
                <div className="textContent">
                    <p className="h1 my-1">{song?.movieName}</p>
                </div>
                <p className="p my-1">{song?.SongName}</p>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <div className="progress" style={{ width: '130px', height: '5px', backgroundColor: '#051622', marginTop: '7px' }}>
                        <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#ffb5b5', width: `${(audioPlayingIndex === songIndex ? currentTime / duration : 0) * 100}%` }} aria-valuenow={currentTime} aria-valuemin="0" aria-valuemax={duration}></div>
                    </div>
                    <div onClick={() => removeItem(song?.SongName)} style={{ display: 'flex' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3 mx-2" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div onClick={() => playAudio(songIndex)} style={{ display: 'flex', marginRight: '10px' }}>
                            {audioPlayingIndex === songIndex ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                </svg>
                            )}
                        </div>
                        <audio ref={(ref) => (audioRef.current[songIndex] = ref)} src={song?.song} onTimeUpdate={updateTime} />
                    </div>
                </div>
            </div>
        </div>
    </div>
))}


                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default PlayListSongs;
