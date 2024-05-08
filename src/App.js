import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import AllSongsList from './components/AllSongsList';
import SingleMovieAlbum from './components/SingleMovieAlbum';
import SoloMovieInfo from './components/SoloMovieInfo';
import { IndividualTeluguSong } from './components/Data';
import './App.css';
import NavBar from './components/NavBar';
import AnimatedRoutes from './components/AnimatedRoutes';
import { Provider } from 'react-redux'
import store, { persistor } from './store/store';
import AddSongs from './components/AddSongs';
import { PersistGate } from 'redux-persist/integration/react';
import Footer from './components/Footer';
import UserViews from './components/UserViews';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {loading ? (
            // Render loading screen here
            <div className="loading" style={{width:'100%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',color:'white',flexDirection:'row'}}> <div><img src='https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif' style={{width:'250px',height:'250px',borderRadius:'50%'}} />
            <div class="loader">
   <div data-glitch="Loading..." class="glitch bg-dark my-2">Loading...</div>
</div>
            </div>
          {/**
           * <div class="loading-wave">
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
        <div class="loading-bar"></div>
      </div>
           */}  
      </div>
          ) : (
            <Router>
              <NavBar />
              <AddSongs />
              <AnimatedRoutes />
              <Footer />
            </Router>
          )}
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
