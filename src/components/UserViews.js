import React, { useState, useEffect } from 'react';

const UserViews = () => {
  const [viewsCount, setViewsCount] = useState(5); // Initial count
  const [randomUserData, setRandomUserData] = useState(null); // State to store the random user data BackgroundColor : #365867

  useEffect(() => {
    // Fetch a random user's data from the API
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        // Extracting relevant data
        const username = `${data.results[0].name.first} ${data.results[0].name.last}`;
        const email = data.results[0].email;
        const country = data.results[0].location.country;
        // Storing data in state
        setRandomUserData({ username, email, country });
      })
      .catch(error => console.error('Error fetching random user data:', error));

    let intervalId;
    const updateInterval = () => {
      if (viewsCount < 100) {
        intervalId = setInterval(() => {
          const randomIncrement = Math.floor(Math.random() * 10) + 4;
          setViewsCount(prevCount => prevCount + randomIncrement);
        }, 10000); // 10 seconds
      } else if (viewsCount >= 100 && viewsCount < 250) {
        intervalId = setInterval(() => {
          const randomIncrement = Math.floor(Math.random() * 11) + 2;
          setViewsCount(prevCount => prevCount + randomIncrement);
        }, 300000); // 5 minutes
      } else {
        intervalId = setInterval(() => {
          const randomIncrement = Math.floor(Math.random() * 11) + 1;
          setViewsCount(prevCount => prevCount + randomIncrement);
        }, 600000); // 10 minutes
      }
    };

    updateInterval(); // Initial call to set the appropriate interval

    return () => clearInterval(intervalId); // Cleanup function
  }, [viewsCount]);

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {/*<button className="Btn" style={{  right: '10px', zIndex: '1000', display: 'flex', alignItems: 'center', padding: '0 10px' }}>
        <span className="leftContainer">
          <span className="like p-2">Visited</span>
        </span>
        <span className="likeCount">{viewsCount}</span>
  </button>*/}
      {randomUserData && (
        <div>
         {/*<div>Username: {randomUserData.username}</div>
          <div>Email: {randomUserData.email}</div>
          <div>Country: {randomUserData.country}</div> */} 
<div class="walletBalanceCard mb-4 pt-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" style={{color:'white'}}>
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>

  <div class="balancewrapper">
    <span class="balanceHeading mt-1">{randomUserData.email}</span>
    <p class="balance"><span id="currency" style={{color:'cyan',fontWeight:'bold'}}>{randomUserData.username}</span> just viewed the site</p>

  </div>

  {/*<button class="addmoney"><span class="plussign">+</span>Add Money</button>*/}
</div>

        </div>
        
      )}
    </div>
  );
};

export default UserViews;
