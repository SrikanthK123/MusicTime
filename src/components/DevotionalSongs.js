import React, { useEffect, useState, useRef } from "react";
import { Devotional } from './Data';
import SoundWave from "../Assets/SongsList/SoundWave.gif";
import { Link } from "react-router-dom";

const DevotionalSongs = () => {
    const [audioPlayingIndex, setAudioPlayingIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef([]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [audioPlaying, setAudioPlaying] = useState(Array(Devotional.length).fill(false));
    const audioRefs = useRef(Array(Devotional.length).fill(null));

 const updateTime = (index) => {
        const audioElement = audioRefs.current[index];
        if (audioElement) {
            setCurrentTime(audioElement.currentTime);
            setDuration(audioElement.duration);
        }
    };

    const playAudio = (index) => {
        const audioElement = audioRefs.current[index];
        if (!audioElement) {
            console.error(`Audio element at index ${index} is undefined.`);
            return;
        }

        if (index === audioPlayingIndex) {
            // If the clicked song is already playing, pause it
            if (!audioElement.paused) {
                audioElement.pause();
                setAudioPlayingIndex(null);
            }
        } else {
            // Pause the currently playing song, if any
            const currentAudioElement = audioRefs.current[audioPlayingIndex];
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


    return (
        <div className='HomePage' style={{ minHeight: '100vh' }}>
            
            <div className='container py-4'>
                
                <h3 className='text-white my-3'>Devotional Songs</h3>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {Devotional.map((item, index) => (
                        <div className="col d-flex justify-content-center my-2" key={index}>
                            <div id="SmallCard">
                                <div
                                    className="img"
                                    id="SmallCardImg"
                                    style={{
                                        background: `url(${item.ImageUrl})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        backgroundSize: "100% 100%",
                                    }}
                                >
                                    {audioPlaying[index] && <img src={SoundWave} alt="SoundWave" style={{ width: '50px', height: '50px', backgroundColor: '#060505C7', borderRadius: '10px' }} />}
                                </div>
                                <div className="textBox">
                                    <div className="textContent">
                                        <p className="h1 my-1"> {item.MovieSong} </p>
                                    </div>
                                    <p className="p my-1"> {item.Name}
                                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <div className="progress" style={{ width: '130px', height: '5px', backgroundColor: '#051622', marginTop: '7px', marginRight: '7px' }}>
                                                <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#ffb5b5', width: `${(audioPlayingIndex === index ? currentTime / duration : 0) * 100}%` }} aria-valuenow={currentTime} aria-valuemin="0" aria-valuemax={duration}></div>
                                            </div>
                                            <div onClick={() => playAudio(index)} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                {audioPlayingIndex === index ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pause-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-play-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                                                    </svg>
                                                )}
                                            </div>
                                            <audio ref={(ref) => (audioRefs.current[index] = ref)} src={item.SongName} onTimeUpdate={() => updateTime(index)}  />
                                        </div>
                                    </p>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/MusicTime"><button className="BackBtn m-3">Back</button></Link>
            </div>
            
        </div>
    );
}

export default DevotionalSongs;
