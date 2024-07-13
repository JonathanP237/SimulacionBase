import React, { useState } from 'react';

const TeamSelector = ({ teams, setSelectedCyclists }) => {
    const [selectedCyclistsByTeam, setSelectedCyclistsByTeam] = useState({});

    const handleSelect = (event, teamName) => {
        const cyclistName = event.target.value;
        setSelectedCyclistsByTeam(prevState => {
            const newState = { ...prevState, [teamName]: cyclistName };
            const selectedCyclists = Object.entries(newState).map(([team, cyclistName]) => {
                const teamData = teams.find(t => t.name === team);
                return teamData?.cyclists.find(c => c.name === cyclistName);
            }).filter(cyclist => cyclist);
            setSelectedCyclists(selectedCyclists);
            return newState;
        });
    };

    return (
        <div>
            {teams.map(team => (
                <div key={team.name}>
                    <label htmlFor={`${team.name}-select`}>Seleccione un ciclista de {team.name}:</label>
                    <select
                        id={`${team.name}-select`}
                        value={selectedCyclistsByTeam[team.name] || ''}
                        onChange={(e) => handleSelect(e, team.name)}
                    >
                        <option value="">Seleccionar ciclista</option>
                        {team.cyclists.map(cyclist => (
                            <option key={cyclist.name} value={cyclist.name}>{cyclist.name}</option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    );
}

export default TeamSelector;
