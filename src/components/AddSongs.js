import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AddSongs = () => {
    const songList = useSelector(state => state.cart);
    return (
        <div style={{  position: 'fixed', bottom: '100px', right: '10px', zIndex: '1000', display: 'flex', alignItems: 'center', padding: '0 10px', }} >
            <Link to="/PlayListSongs" style={{textDecoration:'none'}}>
                {
                    songList.length > 0 ? (
                        <button  className='PlayListBtn' style={{ display: 'flex', alignItems: 'center',backgroundColor:songList.length > 0 ? 'cyan' : '#545b78' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-music mx-2" viewBox="0 0 16 16" style={{color:'black'}}>
              <path d="M10.304 3.13a1 1 0 0 1 1.196.98v1.8l-2.5.5v5.09c0 .495-.301.883-.662 1.123C7.974 12.866 7.499 13 7 13s-.974-.134-1.338-.377C5.302 12.383 5 11.995 5 11.5s.301-.883.662-1.123C6.026 10.134 6.501 10 7 10c.356 0 .7.068 1 .196V4.41a1 1 0 0 1 .804-.98z"/>
              <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
            </svg>
                            <span style={{color:'black'}}>{songList.length}</span>
                        </button>
                    ) : <button style={{display:'none'}}></button>
                }
            
            </Link>
        </div>
    );
};

export default AddSongs;
