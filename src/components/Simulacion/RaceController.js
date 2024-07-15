import React, { useState } from 'react';

const RaceController = ({ tracks, setSelectedTrack, startRace }) => {
    const [selectedTrackName, setSelectedTrackName] = useState('');

    const handleSelectTrack = (event) => {
        const trackName = event.target.value;
        setSelectedTrackName(trackName);
        const track = tracks.find(t => t.name === trackName);
        setSelectedTrack(track);
    };

    return (
        <div>
            <button
            className="border-2 border-blue-600 text-blue-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-600 hover:text-white" 
            onClick={startRace}>Iniciar Carrera</button>
        </div>
    );
}

export default RaceController;
