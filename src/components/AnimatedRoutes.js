import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './Home';
import AllSongsList from './AllSongsList';
import SoloMovieInfo from './SoloMovieInfo';
import { IndividualTeluguSong } from './Data';
import SingleMovieAlbum from './SingleMovieAlbum';
import {AnimatePresence } from "framer-motion"
import store from '../store/store';
import AddSongs from './AddSongs';
import PlayListSongs from './PlayListSongs';
import DevotionalSongs from './DevotionalSongs';

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
   
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route exact path="/MusicTime" element={<Home />} />
          <Route exact path="/AllSongs" element={<AllSongsList />} />
          <Route exact path="/SingleMovieAlbum" element={<SingleMovieAlbum />} />
          {IndividualTeluguSong.map((movie, index) => (
            <Route
              key={index}
              exact
              path={`/${movie.Name}`}
              element={<SoloMovieInfo Name={movie.Name} ImageUrl={movie.ImageUrl} SongList={movie.SongList}  Cast={movie.Cast} MusicInfo = {movie.MusicInfo}   />}
            />
          ))}
         <Route exact path='/PlayListSongs' element={<PlayListSongs/>}></Route>
         <Route exact path="/DevotionalSongs" element={<DevotionalSongs/>}></Route>
        
         
        </Routes>
        </AnimatePresence>
       
  )
}

export default AnimatedRoutes
