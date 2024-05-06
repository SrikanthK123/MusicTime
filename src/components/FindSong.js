import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://spotify23.p.rapidapi.com/tracks/?ids=208sMwgVcaFt2mT79Df1KG';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '588a15d329msh4a16a27af05edd5p100bf4jsn40205c3af33b',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Assuming the tracks are in the "tracks" array
        setTracks(data.tracks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      <h1>All Songs</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <h3>{track.name}</h3>
            <p>Preview URL: {track.preview_url}</p>
            <audio src={track.preview_url} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
