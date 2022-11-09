import React, { useState, useEffect } from 'react';
import GMap from './GMap';


// function App() {
//   return (
//     <div className="App">
//       <h1>this is google map</h1>
//       <GMap />
//     </div>
//   );
// }

// export default App;
//API key of the google map
const GOOGLE_MAP_API_KEY = '<YOUR_GOOGLE_MAP_API_KEY>';

//load google map script
const loadGoogleMapScript = (callback) => {
  if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
    callback();
  } else {
    const googleMapScript = document.createElement("script");
//googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", callback);
  }
}

const App = () => {
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    loadGoogleMapScript(() => {
      setLoadMap(true)
    });
  }, []);

  return (
    <div className="App">

      {!loadMap ? <div>Loading...</div> : <GMap />}
      <br/>
      <small><b>Note:</b> I need GOOGLE_MAP_API_KEY</small>
    </div>
  );
}

export default App;
