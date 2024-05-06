import React, { useEffect, useState,useRef,audioRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ClassicalSong, HomeSliderData, TrendingSong, AllTeluguSongs,AllHindiSongs } from "./Data";
import { MelodySongs } from "./Data";
import { Devotional } from "./Data";
import { PopSong } from "./Data";
import song from '../Assets/SongsList/Kurchi Madathapetti.mp3'
import { Link } from "react-router-dom";
import KalkiBGM from "../Assets/SongsList/Kalki 2898AD BGM.mp3"
import Pause from "../Assets/Images/pause.gif"
import Play from "../Assets/Images/play.gif"
import {motion} from "framer-motion"
import KalkiPoster from "../Assets/Images/Kalki2898AD2.jpg"
import { LatestMovieInfo } from "./Data";
import MainBoxWaveGif from "../Assets/Images/WaveInMainPage.gif"
import MainImage from "../Assets/Images/HeadSet.png"
import BGGif from "../Assets/Images/BG2.gif"
import LoadingCD from "../Assets/Images/LoadingCD.gif"

const Home = () => {

  const [loadingComplete, setLoadingComplete] = useState(false);
  const [isPlaying, setIsPlaying] = useState({});
  const audioRefs = useRef({});

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingComplete(true);
      window.scrollTo(0, 0);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

const toggleAudio = (name, url) => {
    const audioRef = audioRefs.current[name];
    if (!audioRef.paused) {
        audioRef.pause();
    } else {
        for (const key in audioRefs.current) {
            if (audioRefs.current.hasOwnProperty(key) && key !== name) {
                audioRefs.current[key].pause();
            }
        }
        audioRef.play();
    }
    setIsPlaying({ ...isPlaying, [name]: !audioRef.paused });
};

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 550,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  
  return (
    <motion.div className="HomePage py-4" intial={{opacity : 0}} animate={{opacity : 1}} exit ={{opacity : 0,transition: {duration:0.05}}}>
    {/**  <Slider {...settings} className="container" >
  {HomeSliderData.map((item, index) => (
    <div className="slider1" key={index} id="HomeSlider">
      <div
        className="Banner"
        style={{
          display: "flex",
          alignItems: "center",
          //background: `url(${item.ImageUrl})`,
          height: "70vh", // Keep the height of the Banner as it is
          borderRadius: "15px",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          margin:'10px'
        }}
      >
        <div className="mx-4">
          <h3 className="text-white">{item.Name}</h3>
          <p className="text-center lead text-white fw-bold">
            {item.Desc}
          </p>
        </div>
       
      </div>}
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={item.ImageUrl} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" style={{borderRadius:'15px'}}/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
        <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div> HeadSetImage --->https://cdn.wallpapersafari.com/36/26/LOwgY8.jpg
      </div>
    </div>
    </div>
  ))}
</Slider>*/} 

<div className="HomeBox">



 <div className="container col-xxl-12 px-4 py-5"  style={{background:`url(https://acegif.com/wp-content/gif/outerspace-70.gif)`,backgroundPosition:'right',backgroundRepeat:'no-repeat',backgroundSize:'100% 100%',}}>
          
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5" style={{borderRadius:'15px'}}>
                <div className="col-12 col-sm-8 col-lg-6" >
                    <img src=  {MainImage} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" style={{ borderRadius: '15px', }} />
                </div>
                <div className="col-lg-6" >
                    <h1 className="fw-bold text-white lh-1 mb-3">Music: The Universal Language of <span style={{color:'#f70776'}}>Emotion</span>.</h1>
                    <p className="lead text-white">
Press play, escape, and let your <span style={{color:'#ffb5b5',fontWeight:'bold'}}>favorite</span> song paint your world in melodies of joy.</p>
                  
                </div>
            </div>
          
            {/* Audio element */}
           {/** <audio ref={audioRef} src={KalkiBGM}></audio> */} 
        </div>


      <h3 className='text-white p-3 border-bottom my-3  '>Telugu Songs Album</h3>
      <Slider {...settings1} className="container my-5">
      {AllTeluguSongs.map((item, index) => (
   <Link to={`/${item.Name}`} className="link-no-decoration" >
   <div className='col d-flex justify-content-center '>
     <div class="Card mx-2" id="SingleMovieAlnum">
       <div class="img" style={{ background: `url(${item.ImageUrl})`, backgroundPosition: 'center', backgroundSize: '100% 100%' }}></div>
       <div>
         <div class="text">
           <p class="h3 mx-3">{item.Name}</p>
         </div>
       </div>
     </div>
   </div>
   </Link>
))}



      </Slider>
      <h3 className='text-white p-3 border-bottom my-3 '>Hindi Songs Album</h3>
      <Slider {...settings1} className="container my-5">
      {
  AllHindiSongs.map((item, index) => (
    <Link to={`/${item.Name}`} className="link-no-decoration" >
    <div className='col d-flex justify-content-center'>
      <div class="Card mx-2" id="SingleMovieAlnum">
        <div class="img" style={{ background: `url(${item.ImageUrl})`, backgroundPosition: 'center', backgroundSize: '100% 100%' }}></div>
        <div>
          <div class="text">
            <p class="h3 mx-3">{item.Name}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  ))
}

      </Slider>

      <div className="container">
        <h2 className="text-white my-3 py-2">All Songs</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {AllTeluguSongs.map((item, index) => (
            <div className="col d-flex justify-content-center my-2">
              <div id="SmallCard">
                <div
                  class="img"
                  id="SmallCardImg"
                  style={{
                    background: `url(${item.ImageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
                  }}
                ></div>
                <div class="textBox">
                  <div class="textContent">
                    <p class="h1"> {item.Name} </p>
                  </div>
                  <p class="p"> {item.MovieSong} </p>

                  <div></div>
                </div>
              </div>
            </div>
          ))}
          
        </div><Link to="/AllSongs" id="AllSongsLink" >View More....</Link>
        <h2 className="text-white my-3 py-2">Trending Songs</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {TrendingSong.map((item, index) => (
            <Link to={`/${item.Name}`} style={{textDecoration:'none'}}>
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
                ></div>
                <div className="textBox">
                  <div className="textContent">
                    <p className="h1 my-1"> {item.Name} </p>
                  </div>
                  <p className="p my-1"> {item.MovieSong}
                    
                  </p>
                  <div></div>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
       
       <div className="container"> 
       <h2 style={{color:'white',margin:'30px',backgroundColor:'black',padding:'15px',textAlign:'center',boxShadow:'#265a70 0px 3px 8px',fontFamily:'monospace'}}>UpComing Movies </h2>
        {/** <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-12 col-sm-8 col-lg-6">
                    <img src="https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/01/kalki-2898-ad-1705045306.jpg" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" style={{ borderRadius: '15px' }} />
                </div>
                <div className="col-lg-6">
                    <h1 className="fw-bold text-white lh-1 mb-3">Kalki 2898 AD</h1>
                    <p className="lead text-white">From the future streets of Kasi, Introducing 'BHAIRAVA' from #Kalki2898AD.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                       
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" id="MainPageBtn" onClick={toggleAudio} >
                            {isPlaying ? <img src= {Pause} style={{width:'50px',height:'50px'}} /> : <img src= {Play} style={{width:'50px',height:'50px'}} />} Kalki BGM
                        </button>
                    </div>
                </div>
            </div>  **/}
            <Slider {...settings} style={{marginTop:'50px',}}>
  {LatestMovieInfo.map((item, index) => (
    <div>
      <div key={index} className="row flex-lg-row-reverse align-items-center g-5 py-4 m-1 " id="LatestMovies" style={{background:'rgba(51, 71, 131, 0.2)',borderRadius:'15px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px'}} >
       
        <div className="col-12 col-sm-8 col-lg-6  ">
          <img src={item.ImageUrl} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" style={{ borderRadius: '15px',boxShadow:'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px' }} />
        </div>
        <div className="col-lg-6 p-2" style={{background:`linear-gradient(rgba(5, 22, 34, 0.7), rgba(5, 22, 34, 0.7)),url(${item.backgroundImage})`,backgroundRepeat:'no-repeat',backgroundPosition:'left',backgroundSize:'100% 100%'}}>
          <h1 className="fw-bold text-white lh-1 mb-3">{item.Name}</h1>
          <p className=" text-white">{item.Desc}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 MainPageBtn" id={`MainPageBtn-${index}`} onClick={() => toggleAudio(item.Name, item.BGM)} style={{ display: 'inline-flex', alignItems: 'center',justifyContent:'center',boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
              <img src={isPlaying[item.Name] ? Pause : Play} style={{ width: '50px', height: '50px', marginRight: '10px' }} alt={isPlaying[item.Name] ? "Pause icon" : "Play icon"} />
             
              <h>{item.Name} </h>
            </button>
            <audio ref={(ref) => (audioRefs.current[item.Name] = ref)} src={item.BGM}></audio>
          </div>
        </div>
      </div>
    </div>
  ))}
</Slider>

       </div>
      </div>
      </div>
      
    </motion.div>
  );
};

export default Home;
