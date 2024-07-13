import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../../styles/estilos.css';

const cyclistIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41]
});

const MapView = ({ selectedTrack, selectedCyclists }) => {
    const hasValidCoordinates = selectedTrack && selectedTrack.coordinates && selectedTrack.coordinates.length > 0;

    return (
        <div id="map">
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {hasValidCoordinates && (
                    <Polyline positions={selectedTrack.coordinates.map(coord => [coord.lat, coord.lng])} />
                )}
                {selectedCyclists.map(cyclist => (
                    <Marker
                        key={cyclist.name}
                        position={cyclist.position}
                        icon={cyclistIcon}
                    >
                        <Tooltip>{cyclist.name}</Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default MapView;
