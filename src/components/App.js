import React from 'react'
import SongList from './SongList'
import SongDetails from './SongDetails'

const App = () => {
    return (
        <div>
            <h1>Music Player</h1>
            <SongList />
            <SongDetails/>
        </div>
    );
}


export default App;