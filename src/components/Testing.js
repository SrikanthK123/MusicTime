import React from 'react'

const Testing = () => {
    const [searchInput, setSearchInput] = useState('');
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const [playlists, setPlaylists] = useState([]);
  
    const searchMovie = async () => {
      const url = `https://spotify23.p.rapidapi.com/search/?q=${searchInput}&type=tracks&offset=0&limit=10&numberOfTopResults=5`;
  
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '588a15d329msh4a16a27af05edd5p100bf4jsn40205c3af33b',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      };
  
      try {
        const response = await fetch(url, options);
        const resultData = await response.json();
  
        const songsList = resultData.tracks.items.map(async (item) => {
          const songDetails = await getSongDetails(item.data.id);
          return {
            name: item.data.name,
            popularity: item.data.popularity,
            id: item.data.id,
            previewUrl: songDetails.preview_url,
          };
        });
  
        const resolvedSongs = await Promise.all(songsList);
  
        setSongs(resolvedSongs);
        setError('');
        setShowDetails(true);
      } catch (error) {
        console.error(error);
        setError('An error occurred while fetching data.');
        setShowDetails(false);
      }
    };
  
    const getSongDetails = async (songId) => {
      const url = `https://spotify23.p.rapidapi.com/tracks/?ids=${songId}`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '588a15d329msh4a16a27af05edd5p100bf4jsn40205c3af33b',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
        },
      };
  
      try {
        const response = await fetch(url, options);
        const resultData = await response.json();
  
        if (resultData.tracks && resultData.tracks.length > 0) {
          const song = resultData.tracks[0];
          return { preview_url: song.preview_url };
        } else {
          console.log('Song not found');
          return { preview_url: null };
        }
      } catch (error) {
        console.error(error);
        return { preview_url: null };
      }
    };
  
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
  
          setSongs(data.tracks);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    useEffect(() => {
      const fetchPlaylists = async () => {
        // Replace 'YOUR_PLAYLIST_API_ENDPOINT' with the actual API endpoint for fetching playlists
        const playlistUrl = 'YOUR_PLAYLIST_API_ENDPOINT';
        const playlistOptions = {
          method: 'GET',
          headers: {
            // Add any headers required for authentication or other purposes
          },
        };
  
        try {
          const playlistResponse = await fetch(playlistUrl, playlistOptions);
          const playlistData = await playlistResponse.json();
  
          if (playlistData && playlistData.totalCount > 0) {
            setPlaylists(playlistData.items);
          }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchPlaylists();
    }, []);
    
  return (
    <div>
         <div className="container my-4">
      <h1 className="text-white my-4">Movie Search</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter movie name"
      />
      <button onClick={searchMovie}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showDetails && (
        <div>
          <h2>Song Details</h2>
          <ul className="text-white">
            {songs.map((song, index) => (
              <li key={index}>
                <p>Name: {song.name}</p>
                <p>Popularity: {song.popularity}</p>
                <p>{song.id}</p>
                <audio src={song.previewUrl} controls />
              </li>
            ))}
          </ul>
        </div>
      )}
</div>
    </div>
  )
}

export default Testing
