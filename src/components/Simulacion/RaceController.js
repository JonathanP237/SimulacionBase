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
            <label htmlFor="track-select">Seleccione una pista:</label>
            <select id="track-select" value={selectedTrackName} onChange={handleSelectTrack}>
                <option value="">Seleccionar pista</option>
                {tracks.map(track => (
                    <option key={track.name} value={track.name}>{track.name}</option>
                ))}
            </select>
            <button onClick={startRace}>Iniciar Carrera</button>
        </div>
    );
}

export default RaceController;
