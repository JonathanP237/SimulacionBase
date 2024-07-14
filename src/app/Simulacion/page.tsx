"use client";
import React, { useState, useEffect } from 'react';
import TeamSelector from '../../components/Simulacion/TeamSelector';
import MapView from '../../components/Simulacion/MapView';
import RaceController from '../../components/Simulacion/RaceController';
import { Track, Ciclista, Team } from '../../types';
import '../../styles/estilos.css';

const Simulacion: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [tracks, setTracks] = useState<Track[]>([]);
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
    const [selectedCyclists, setSelectedCyclists] = useState<Ciclista[]>([]);

    useEffect(() => {
        fetch('/cyclist.json')
            .then(response => response.json())
            .then(data => setTeams(data))
            .catch(error => console.error('Error fetching the JSON file:', error));

        fetch('/Tracks.json')
            .then(response => response.json())
            .then(data => setTracks(data))
            .catch(error => console.error('Error fetching the JSON file:', error));
    }, []);

    const startRace = () => {
        if (!selectedTrack || selectedCyclists.length === 0) {
            return;
        }

        const trackStart = selectedTrack.coordinates[0];
        const trackEnd = selectedTrack.coordinates[selectedTrack.coordinates.length - 1];

        const initialPositions = selectedCyclists.map(cyclist => ({
            ...cyclist,
            position: trackStart
        }));

        setSelectedCyclists(initialPositions);

        const moveCyclists = () => {
            initialPositions.forEach((cyclist, index) => {
                const delay = Math.random() * 3600;
                setTimeout(() => {
                    setSelectedCyclists(prevState => {
                        const newState = [...prevState];
                        newState[index] = {
                            ...newState[index],
                            position: trackEnd
                        };
                        return newState;
                    });
                }, delay);
            });
        };

        moveCyclists();
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Simulación de Carrera de Ciclistas</h1>
            <TeamSelector 
                teams={teams} 
                tracks={tracks} 
                selectedCyclists={selectedCyclists} 
                setSelectedCyclists={setSelectedCyclists} 
                setSelectedTrack={setSelectedTrack} 
            />
            <MapView selectedTrack={selectedTrack} selectedCyclists={selectedCyclists} />
            <RaceController
                tracks={tracks}
                setSelectedTrack={setSelectedTrack}
                startRace={startRace}
            />
        </div>
    );
}

export default Simulacion;
