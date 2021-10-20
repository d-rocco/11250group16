// Creates a marker on the map and returns a marker
const createMarker = ({ map, position }) => {
    return new google.maps.Marker({ map, position });
  };

// Checks if geolocation function with API is possible on browser.
  const getCurrentPosition = ({ onSuccess, onError = () => { } }) => {
    if ('geolocation' in navigator === false) {
        // Case where geolocation is not possible
      return onError(new Error('Geolocation is not supported by your browser.'));
    }
    // Case where geolocation is possible.
    return navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };
  
// Possible errors if geolocation is not found.
  const getPositionErrorMessage = code => {
    switch (code) {
      case 1: // User blocks current location
        return 'Permission denied.';
      case 2: // User position can't be found.
        return 'Position unavailable.';
      case 3: // Too much time spent trying to find location.
        return 'Timeout reached.';
      default: // Any other case
        return null;
    }
  }

function initMap() {
    const initialPosition = {lat: 28.0, lng: -83.5}; // To simplify future calls to this position

    map = new google.maps.Map(document.getElementById('map'), {
        center: initialPosition,
        zoom: 7
      });

      //Function call to return a constant marker. Marker only revealed on map if user allows location to be given.
      const marker = createMarker({ map}); 

      getCurrentPosition({
        onSuccess: ({ coords: { latitude: lat, longitude: lng } }) => { // If location successfully found.
          marker.setPosition({ lat, lng }); // Sets marker to be visible on map
          //map.panTo({ lat, lng });
          // Keep above line only if we want the map to panTo the current user location
        },
        onError: err => // If location not found.
          alert(`Error: ${getPositionErrorMessage(err.code) || err.message}`)
      });
}