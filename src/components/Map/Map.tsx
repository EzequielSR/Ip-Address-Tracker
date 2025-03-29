import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: '/images/icon-location.svg',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});
interface MapProps {
    position?: [number, number];
  }
  
  function ChangeView({ position }: { position: [number, number] }) {
    const map = useMap();
    useEffect(() => {
      map.setView(position, position === DEFAULT_POSITION ? 2 : 13);
    }, [map, position]);
    return null;
  }

  const DEFAULT_POSITION: [number, number] = [20, 0];
export default function Map({position = DEFAULT_POSITION}: MapProps){
    return(
        <MapContainer
        center={position}
        zoom={position === DEFAULT_POSITION ? 2 : 13}
        className="h-full w-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position !== DEFAULT_POSITION && <Marker position={position} />} 
        <ChangeView position={position} />
      </MapContainer>
    )
}