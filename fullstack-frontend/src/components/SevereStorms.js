import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { LocationMarker } from "./LocationMarker";
import { LocationInfoBox } from "./LocationInfoBox";
import { CHeader } from "./CHeader";

export const SevereStorms = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 10) {
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

SevereStorms.defaultProps = {
  center: {
    lat: -14.360837,
    lng: 132.75096,
  },
  zoom: 3,
};
