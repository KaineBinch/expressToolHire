// components/common/GoogleMap.jsx
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import { useState, useCallback } from "react"

const LIBRARIES = ["places"]

const DEFAULT_MAP_CONTAINER_STYLE = {
  width: "100%",
  height: "40vh",
  borderRadius: "0.5rem",
}

const DEFAULT_CENTER = {
  lat: 52.950834,
  lng: -1.110705,
}

const DEFAULT_MAP_OPTIONS = {
  disableDefaultUI: false,
  zoomControl: true,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: true,
}

// Simple loading component to avoid import issues
const SimpleLoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-secondary"></div>
    <span className="ml-2 text-gray-600">Loading map...</span>
  </div>
)

const GoogleMapComponent = ({
  apiKey,
  center = DEFAULT_CENTER,
  zoom = 17,
  containerStyle = DEFAULT_MAP_CONTAINER_STYLE,
  mapOptions = DEFAULT_MAP_OPTIONS,
  markers = [DEFAULT_CENTER],
  onMapLoad,
  className = "",
}) => {
  const [map, setMap] = useState(null)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: LIBRARIES,
  })

  const onLoad = useCallback(
    (map) => {
      setMap(map)
      onMapLoad?.(map)
    },
    [onMapLoad]
  )

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  if (loadError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={containerStyle}>
        <div className="text-center p-8">
          <div className="text-red-500 text-2xl mb-2">⚠️</div>
          <p className="text-gray-600 font-medium">Error loading Google Maps</p>
          <p className="text-sm text-gray-500 mt-1">
            Please check your API key and try again
          </p>
        </div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={containerStyle}>
        <SimpleLoadingSpinner />
      </div>
    )
  }

  return (
    <div className={`rounded-lg overflow-hidden shadow-lg ${className}`}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}>
        {markers.map((position, index) => (
          <Marker
            key={index}
            position={position}
            title={
              index === 0 ? "Express Tool Hire Ltd" : `Location ${index + 1}`
            }
          />
        ))}
      </GoogleMap>
    </div>
  )
}

export default GoogleMapComponent
