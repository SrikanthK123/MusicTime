import React, { useEffect, useState } from "react";
const Audio = () => {
    const [playlists, setPlaylists] = useState([]);
    const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://spotify23.p.rapidapi.com/search/?q=${searchInput}%20kaaram&type=playlists&offset=0&limit=10&numberOfTopResults=5`; // Replace with the actual API endpoint for fetching playlists
      const options = {
        method: 'GET',
        headers: {
          // Add any headers required for authentication or other purposes
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        if (data && data.totalCount > 0) {
          setPlaylists(data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
           <h1>Playlists</h1>
           
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.uri}>
            <h3>{playlist.name}</h3>
            <p>{playlist.description}</p>
            {playlist.images.length > 0 && (
              <img
                src={playlist.images[0].url}
                alt={playlist.name}
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
            )}
          </li>
        ))}
      </ul>
      
    </div>
    
  )
}

export default Audio
