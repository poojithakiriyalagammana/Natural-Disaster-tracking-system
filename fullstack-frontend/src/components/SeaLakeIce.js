import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { LocationMarker } from "./LocationMarker";
import { LocationInfoBox } from "./LocationInfoBox";
import { CHeader } from "./CHeader";

export const SeaLakeIce = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 15) {
      return ev.geometries.map((geometry, idx) => (
        <LocationMarker
          key={index + "-" + idx}
          lat={geometry.coordinates[1]}
          lng={geometry.coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      ));
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

SeaLakeIce.defaultProps = {
  center: {
    lat: -74.302265,
    lng: 68.355004,
  },
  zoom: 1,
};
