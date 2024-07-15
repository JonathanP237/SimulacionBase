import React, { useState, useEffect } from 'react';

const TeamSelector = ({ teams, tracks, selectedCyclists, setSelectedCyclists, setSelectedTrack }) => {
    const [selectedTrackName, setSelectedTrackName] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');
    const [selectedCyclist, setSelectedCyclist] = useState('');

    useEffect(() => {
        setSelectedCyclists([]);
        setSelectedTeam('');
        setSelectedCyclist('');
        const track = tracks.find(t => t.name === selectedTrackName);
        setSelectedTrack(track || null);
    }, [selectedTrackName, tracks, setSelectedTrack]);

    const handleTrackChange = (event) => {
        setSelectedTrackName(event.target.value);
    };

    const handleTeamChange = (event) => {
        setSelectedTeam(event.target.value);
        setSelectedCyclist('');
    };

    const handleSelect = (event) => {
        setSelectedCyclist(event.target.value);
        const selectedCyclistObj = teams
            .find(team => team.name === selectedTeam)
            ?.cyclists.find(cyclist => cyclist.name === event.target.value);
        setSelectedCyclists(prevState => [...prevState, selectedCyclistObj]);
    };

    const filteredTeams = teams.map(team => ({
        ...team,
        cyclists: team.cyclists.filter(cyclist => {
            switch (selectedTrackName) {
                case "Pista Montana":
                    return cyclist.speciality === "Escaladores";
                case "Pista llano con curvas":
                    return cyclist.speciality === "Rodadores";
                case "Pista semi llano":
                    return cyclist.speciality === "Sprinters o embaladores";
                case "Pista de un solo dia":
                    return cyclist.speciality === "clasicómanos";
                case "Pista llano en recta":
                    return cyclist.speciality === "contrarrelojista";
                default:
                    return true;
            }
        })
    }));

    return (
        <div>
            <label className="text-white" htmlFor="track-select">Seleccione una pista: </label>
            <select className="text-black" id="track-select" value={selectedTrackName} onChange={handleTrackChange}>
                <option value="">Seleccionar pista</option>
                {tracks.map(track => (
                    <option key={track.name} value={track.name}>{track.name}</option>
                ))}
            </select>

            {selectedTrackName && (
                <div>
                    <label className="text-white" htmlFor="team-select">Seleccione un equipo: </label>
                    <select className="text-black" id="team-select" value={selectedTeam} onChange={handleTeamChange}>
                        <option value="">Seleccionar equipo</option>
                        {filteredTeams.map(team => (
                            <option key={team.name} value={team.name}>{team.name}</option>
                        ))}
                    </select>
                </div>
            )}

            {selectedTeam && (
                <div>
                    <label className="text-white" htmlFor="cyclist-select">Seleccione un ciclista: </label>
                    <select
                        className="text-black"
                        id="cyclist-select"
                        value={selectedCyclist}
                        onChange={handleSelect}
                    >
                        <option className="text-black" value="">Seleccionar ciclista</option>
                        {filteredTeams.find(team => team.name === selectedTeam)?.cyclists.map(cyclist => (
                            <option key={cyclist.name} value={cyclist.name}>{cyclist.name}</option>
                        ))}
                    </select>
                </div>
            )}
        </div>
    );
}

export default TeamSelector;
