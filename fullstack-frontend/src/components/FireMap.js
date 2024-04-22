import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { LocationMarker } from "./LocationMarker";
import { LocationInfoBox } from "./LocationInfoBox";
import { CHeader } from "./CHeader";

export const FireMap = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
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
          bootstrapURLKeys={{ key: "AIzaSyC0U-f-bkZf62hEneCk7pCTDa9Xdm_4tTw" }}
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

FireMap.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 4,
};
