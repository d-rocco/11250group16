
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


      //current solar panel location markers
      new google.maps.Marker({
        position:{lat:30.2808, lng:-82.7818},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.259140, lng:-82.837050},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.259140, lng:-82.837050},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.288440, lng:-82.191560},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.288440, lng:-82.191560},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.233200, lng:-82.257750},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.233200, lng:-82.257750},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.004050, lng:-82.289500},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:30.004050, lng:-81.676990},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      //missing coral farms energy center addrerss
      new google.maps.Marker({
        position:{lat:29.888830, lng:-81.676990},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:29.618379, lng:-81.845289},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:29.761904, lng:-81.425689},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:29.0166941, lng:-81.1021556},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.611285, lng:-82.3484599},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.476435, lng:-82.278709},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.595426, lng:-82.272628},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:28.51514434814453, lng:-80.68545532226562},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.322106, lng:-81.810023},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.3220871, lng:-81.8095089},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.420316, lng:-80.945361},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.488056, lng:-80.559198},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.628402, lng:-80.578013},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.633105, lng:-80.569755},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.629709, lng:-80.50909},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.215949, lng:-80.36627},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.217952728271484, lng:-80.76224517822266},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.240274, lng:-80.54289},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:27.05709, lng:-80.4821286},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:26.490091, lng:-80.091634},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:26.774182, lng:-80.360039},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:26.70458, lng:-81.129041},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:26.771959, lng:-81.36811},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
      new google.maps.Marker({
        position:{lat:25.6376471, lng:-80.4889484},
        map:map,
        icon:"https://img.icons8.com/fluency/50/000000/sun.png"
      })
}

module.exports = initMap