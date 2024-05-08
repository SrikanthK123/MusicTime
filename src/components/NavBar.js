import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Importing useHistory directly
import Logo from "../Assets/Images/M2.png"
import { IndividualTeluguSong } from './Data';
import { UseSelector, useSelector } from 'react-redux';

const NavBar = () => {
  const songList = useSelector(state => state.cart)
  const [searchTerm, setSearchTerm] = useState('');
  const filteredMovie = IndividualTeluguSong.filter((movie) =>
    movie.Name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!searchTerm) {
      alert('Please enter a movie Name.');
      return;
    }
    if (filteredMovie.length > 0) {
      const firstMovie = filteredMovie[0];
      navigate(`/${firstMovie.Name}`); 
    }
    setSearchTerm(''); // Clearing the searchTerm state
    document.getElementById("search").focus(); // Focusing on the input field
    event.target.reset(); // Resetting the form
  };
  
  
  

  return (
    <div style={{ backgroundColor: 'rgba(5, 22, 34, 0.95)', position: 'sticky', top: '0', zIndex: '1000' }}>
      <header className="py-3 ">
        <div className="container-fluid d-grid gap-3 align-items-center" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="dropdown">
            <Link to="MusicTime" style={{ textDecoration: 'none'}}>
              <h3 className='text-white p-1' style={{marginLeft:'10px'}}>
                <img src={Logo} id="LogoImg" style={{ width: '50px', height: '50px', borderRadius: '50%', padding: '6px', boxShadow: 'rgba(75, 245, 228, 0.4) -2px -6px 12px, rgba(8, 138, 86, 0.41) 0px -12px 30px, rgb(42 169 207 / 77%) 0px 4px 6px, rgba(218, 209, 209, 0.435) 0px 12px 13px, rgba(199, 190, 190, 0.396) 0px -3px 5px' }} />
                
              </h3>
            </Link>
            
          </div>

          <div className="d-flex align-items-end justify-content-end  gap-2 ">
            
       



          
            <form class="form" onSubmit={handleSearchSubmit} >
              
    <label for="search">
        <input class="input" type="text" required="" placeholder="Search Movie" id="search" list="Movies" onChange={handleSearchInputChange} />
        <datalist id='Movies'>
                {
                  IndividualTeluguSong.map((movie, index) => (
                    <option key={index} value={movie.Name}>
                      
                    </option>
                  ))
                }
              </datalist>
        <div class="fancy-bg"></div>
       
        
        <div class="search" style={{cursor:'pointer'}}>
            <svg viewBox="0 0 24 24" aria-hidden="true" class="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
            </svg>
        </div>
        
        
        <button class="close-btn" type="reset" style={{backgroundColor:'#265a70'}}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" >
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
    </label>
   
</form>


            <div className="flex-shrink-0 dropdown">
              <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <button className="copy " >
                  <span>
                    <svg style={{ enableBackground: "new 0 0 512 512" }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-music-note-list" viewBox="0 0 16 16">
                      <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2" />
                      <path fillRule="evenodd" d="M12 3v10h-1V3z" />
                      <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z" />
                      <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5" />
                    </svg>
                  </span>
                </button>
              </a>
              
              <ul className="dropdown-menu text-small bg-black "  >
                <li><Link className="dropdown-item text-white" id="SelectingLI" to="/MusicTime">Lobby</Link></li>
                <li><Link className="dropdown-item text-white" id="SelectingLI" to="/AllSongs">All Songs</Link></li>
                <li><Link className="dropdown-item text-white" id="SelectingLI" to="/DevotionalSongs">Devotional Songs</Link></li>
                
              </ul>
              
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default NavBar;
