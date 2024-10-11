import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { LocationMarker } from "./LocationMarker";
import { LocationInfoBox } from "./LocationInfoBox";
import { CHeader } from "./CHeader";

export const Volcanoes = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 12) {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  return (
    <>
      <CHeader />
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "your-google-api-key" }} //Replace with your Google API key
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
        </GoogleMapReact>
        {locationInfo && <LocationInfoBox info={locationInfo} />}
      </div>
    </>
  );
};

Volcanoes.defaultProps = {
  center: {
    lat: 5.725512,
    lng: 116.136666,
  },
  zoom: 1,
};
