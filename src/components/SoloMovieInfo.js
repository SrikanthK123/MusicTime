import React, { useEffect, useState, useRef } from "react";
import { IndividualTeluguSong } from './Data';
import { Link } from 'react-router-dom';
import SoundWave from "../Assets/SongsList/SoundWave.gif"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion"
import { UseDispatch, useDispatch } from "react-redux";
import { add } from "../store/cartSlice";


const SoloMovieInfo = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  const [audioPlayingIndex, setAudioPlayingIndex] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef([]);

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
    const settings1 = {
        dots: false,
        infinite: true,
        speed: 550,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    //  Define Dispatch //

    const dispatch = useDispatch()

    const addSong = (song) => {
        dispatch(add(song))
    }

    return (
        <motion.div className='HomePage' style={{ minHeight: '110vh' }} intial={{opacity : 0}} animate={{opacity : 1}} exit ={{opacity : 0,transition: {duration:0.05}}}>
            <h3 className='text-white p-3 mx-4'>{props.Name} Album</h3>
            <div className="container col-xxl-8 px-4 py-2 d-flex justify-content-center">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={props.ImageUrl} className="d-block mx-lg-auto img-fluid rounded-5" alt="Album Cover" width="700" height="500" loading="lazy" />
                </div>
                
                
            </div>
            
            <div className='container py-5'>
            <div className="MusicInform" style={{width:'100%'}}>
                    <p className="p-4 text-white" style={{textAlign:'justify',fontSize:'14px'}}> {props.MusicInfo} </p>
                </div>
           
                <h3 className='text-white border-bottom py-3 my-4'>Songs</h3>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                    {props.SongList.map((song, songIndex) => (
                        
                        <div className="col d-flex justify-content-center my-2" key={songIndex}>
                            <div id="SmallCard">
                                <div className="img" id="SmallCardImg" style={{ background: `url(${props.ImageUrl})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100% 100%" }}>
                                   
                                    {audioPlayingIndex === props.SongList.length + songIndex && <img src={SoundWave} style={{ height: '100%', width: '100%',backgroundColor:'#060505C7',borderRadius:'10px'}} />}
                                </div>
                                <div className="textBox">
                                    <div className="textContent">
                                        <p className="h1 my-1">{song.SongName}</p>
                                    </div>
                                    <p className="p my-1">{props.Name}</p>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <div className="progress" style={{ width: '130px', height: '5px', backgroundColor: '#051622', marginTop: '7px' }}>
    <div className="progress-bar" role="progressbar" style={{ backgroundColor: '#ffb5b5', width: `${(audioPlayingIndex === props.SongList.length + songIndex ? currentTime / duration : 0) * 100}%` }} aria-valuenow={currentTime} aria-valuemin="0" aria-valuemax={duration}></div>
</div>

                                    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => addSong({...song, imageUrl: props.ImageUrl, movieName: props.Name})} width="20" height="20" fill="currentColor" class="bi bi-heart mx-2" viewBox="0 0 16 16">

  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
                                        <div onClick={() => playAudio(props.SongList.length + songIndex)} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            {audioPlayingIndex === props.SongList.length + songIndex ? (
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
                                    <audio ref={(ref) => (audioRef.current[props.SongList.length + songIndex] = ref)} src={song.song} onTimeUpdate={updateTime} />
                                </div>
                            </div>
                        </div>
                        
                    ))}
                </div>
                
                <div className="my-4 ">
                <h3 className='text-white border-bottom py-3'>Cast & Music-Director</h3>
                <Slider {...settings1} >
                    
                    {props.Cast.map((cast, index) => (
                        <div className='col d-flex justify-content-center mx-2 my-5'>
                           <div class="Card mx-2" id="CastInfo">
        <div class="Castimg" style={{ background: `url(${cast.CastImage})`, backgroundPosition: 'center', backgroundSize: '100% 100%' }}></div>
        <div>
         {/** <div class="text1 ">
          <div class="card-title text-white" id="CastName">{cast.CastName} <br/>
    </div>
            
          </div> */}
        </div>
      </div>
                      </div>
                    ))}
                </Slider>
                

                </div>
           {/** <div className="bg-white my-5" style={{width:'100%',height:'50vh',borderRadius:'15px'}}>
                <p className="p-4">Movie Lyric </p>
            </div>*/} 
            </div>
        </motion.div>
    )
}

export default SoloMovieInfo;
