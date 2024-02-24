import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import config from "../env.json";

const libraries = ["places"];
const mapContainerStyle = {
  width: "90vw",
  height: "40vh",
};
const center = {
  lat: 52.950834,
  lng: -1.110705,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: config.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className="pb-10">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={17}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Map;
