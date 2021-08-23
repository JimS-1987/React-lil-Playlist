import React from 'react';
import './App.css';
import SongOverview from './Components/SongOverview';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Lil' Playlist</h1>
      </header>
      <main class="list">
      <SongOverview/>
      </main>
    </div>
  );
}

export default App;