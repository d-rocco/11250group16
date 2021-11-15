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

    // Define the LatLng coordinates for the polygon's path.
  const purpleRange = [
    { lat: 25, lng: -87 },
    { lat: 25.25, lng: -87 },
    { lat: 25.25, lng: -87.5 },
    { lat: 25, lng: -87.5 },
  ];
  // Construct the polygon.
  const purpleRangeRectangle = new google.maps.Polygon({
    paths: purpleRange,
    strokeColor: "#6a0dad",
    strokeOpacity: 0.25,
    strokeWeight: 2,
    fillColor: "#6a0dad",
    fillOpacity: 0.25,
  });

  purpleRangeRectangle.setMap(map);

  // Define the LatLng coordinates for the polygon's path.
  const blueRange = [
    { lat: 25, lng: -86.5 },
    { lat: 25.25, lng: -86.5 },
    { lat: 25.25, lng: -87 },
    { lat: 25, lng: -87 },
  ];
  // Construct the polygon.
  const blueRangeRectangle = new google.maps.Polygon({
    paths: blueRange,
    strokeColor: "#0000FF",
    strokeOpacity: 0.25,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.25,
  });

  blueRangeRectangle.setMap(map);
  
  // Define the LatLng coordinates for the polygon's path.
  const yellowRange = [
    { lat: 25, lng: -86 },
    { lat: 25.25, lng: -86 },
    { lat: 25.25, lng: -86.5 },
    { lat: 25, lng: -86.5 },
  ];
  // Construct the polygon.
  const yellowRangeRectangle = new google.maps.Polygon({
    paths: yellowRange,
    strokeColor: "#FFFF00",
    strokeOpacity: 0.25,
    strokeWeight: 2,
    fillColor: "#FFFF00",
    fillOpacity: 0.25,
  });

  yellowRangeRectangle.setMap(map);
  
  // Define the LatLng coordinates for the polygon's path.
  const orangeRange = [
    { lat: 25, lng: -85.5 },
    { lat: 25.25, lng: -85.5 },
    { lat: 25.25, lng: -86 },
    { lat: 25, lng: -86 },
  ];
  // Construct the polygon.
  const orangeRangeRectangle = new google.maps.Polygon({
    paths: orangeRange,
    strokeColor: "#FFA500",
    strokeOpacity: 0.25,
    strokeWeight: 2,
    fillColor: "#FFA500",
    fillOpacity: 0.25,
  });

  orangeRangeRectangle.setMap(map);

  // Define the LatLng coordinates for the polygon's path.
  const redRange = [
    { lat: 25, lng: -85 },
    { lat: 25.25, lng: -85 },
    { lat: 25.25, lng: -85.5 },
    { lat: 25, lng: -85.5 },
  ];
  // Construct the polygon.
  const redRangeRectangle = new google.maps.Polygon({
    paths: redRange,
    strokeColor: "#FF0000",
    strokeOpacity: 0.25,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.25,
  });

  redRangeRectangle.setMap(map);

  // Define the LatLng coordinates for the polygon's path.
  const purpleRangeBigFill = [
    { lat: 26, lng: -87 },
    { lat: 26.25, lng: -87 },
    { lat: 26.25, lng: -87.5 },
    { lat: 26, lng: -87.5 },
  ];
  // Construct the polygon.
  const purpleRangeRectangle2 = new google.maps.Polygon({
    paths: purpleRangeBigFill,
    strokeColor: "#6a0dad",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#6a0dad",
    fillOpacity: 0.6,
  });

  purpleRangeRectangle2.setMap(map);

  // Define the LatLng coordinates for the polygon's path.
  const blueRangeBigFill = [
    { lat: 26, lng: -86.5 },
    { lat: 26.25, lng: -86.5 },
    { lat: 26.25, lng: -87 },
    { lat: 26, lng: -87 },
  ];
  // Construct the polygon.
  const blueRangeRectangle2 = new google.maps.Polygon({
    paths: blueRangeBigFill,
    strokeColor: "#0000FF",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.6,
  });

  blueRangeRectangle2.setMap(map);
  
  // Define the LatLng coordinates for the polygon's path.
  const yellowRangeBigFill = [
    { lat: 26, lng: -86 },
    { lat: 26.25, lng: -86 },
    { lat: 26.25, lng: -86.5 },
    { lat: 26, lng: -86.5 },
  ];
  // Construct the polygon.
  const yellowRangeRectangle2 = new google.maps.Polygon({
    paths: yellowRangeBigFill,
    strokeColor: "#FFFF00",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#FFFF00",
    fillOpacity: 0.6,
  });

  yellowRangeRectangle2.setMap(map);
  
  // Define the LatLng coordinates for the polygon's path.
  const orangeRangeBigFill = [
    { lat: 26, lng: -85.5 },
    { lat: 26.25, lng: -85.5 },
    { lat: 26.25, lng: -86 },
    { lat: 26, lng: -86 },
  ];
  // Construct the polygon.
  const orangeRangeRectangle2 = new google.maps.Polygon({
    paths: orangeRangeBigFill,
    strokeColor: "#FFA500",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#FFA500",
    fillOpacity: 0.6,
  });

  orangeRangeRectangle2.setMap(map);

  // Define the LatLng coordinates for the polygon's path.
  const redRangeBigFill = [
    { lat: 26, lng: -85 },
    { lat: 26.25, lng: -85 },
    { lat: 26.25, lng: -85.5 },
    { lat: 26, lng: -85.5 },
  ];
  // Construct the polygon.
  const redRangeRectangle2 = new google.maps.Polygon({
    paths: redRangeBigFill,
    strokeColor: "#FF0000",
    strokeOpacity: 0.6,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.6,
  });

  redRangeRectangle2.setMap(map);

  const legend = [
    { lat: 25, lng: -87.5 },
    { lat: 25, lng: -85 },
    { lat: 26.25, lng: -85 },
    { lat: 26.25, lng: -87.5 },
  ];
  // Construct the polygon.
  const legendRectangle = new google.maps.Polygon({
    paths: legend,
    strokeColor: "#00FF00",
    strokeOpacity: 0.1,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.1,
  });

  legendRectangle.setMap(map);
  legendRectangle.addListener("click", showArrays);
  infoWindow = new google.maps.InfoWindow();

  // Legend letter markers

  const contentString =
    "<b>Highlight Legend</b><br>" +
    "<br>" +
    "<b>Hot and Cold Zones</b><br>" +
    "<br>" +
    "<b>Hot:</b> An area where solar power is considered preferred in Florida! <br>" +
    "<b>Cold:</b> An area where solar power is considered not preferred in Florida! <br>" +
    "<br>" +
    "The color coding is a representation of whether a given area is considered hot or cold for solar power. <br>" +
    "<b>Purple:</b> An area where solar power is considered strongly not preferred! <br>" +
    "<b>Blue:</b> An area where solar power is considered moderately not preferred! <br>" +
    "<b>Yellow:</b> An area where solar power is considered neither preferred nor unpreferred! <br>" +
    "<b>Orange:</b> An area where solar power is considered moderately preferred! <br>" +
    "<b>Red:</b> An area where solar power is considered strongly preferred! <br>" +
    "<br>" +
    "<b>Suitable and Unsuitable Zones</b><br>" +
    "<br>" +
    "<b>Suitable:</b> An area where solar power is considered suitable in Florida! <br>" +
    "<b>Unsuitable:</b> An area where solar power is considered not suitable in Florida! <br>" +
    "<br>" +
    "The opacity is a representation of whether a given area is considered suitable or unsuitable for solar power. <br>" +
    "<b>Suitable:</b> If an area represents one of the rectangles at the top of this legend, then the area is considered suitable for solar power! <br>" +
    "<b>Unsuitable:</b> If an area represents one of the rectangles at the bottom of this legend, then the area is considered unsuitable for solar power! <br>" +
    "<br>" +
    "<b>Markers</b><br>" +
    "<br>" +
    "<b>Sun Markers:</b> These markers represent the locations of power plants in Florida that provide solar power to Florida areas. <br>" +
    "<b>Google Maps Marker:</b> This marker appears only if you allow location tracking. Presents your current location on the map.<br>" +
    "<br>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

  var icon_Legend = {
    url: "https://iconape.com/wp-content/files/gg/75919/png/legend.png", // url
    scaledSize: new google.maps.Size(150, 72.5), // scaled size
  };

    legendMarker = new google.maps.Marker({
    position:{lat:25.25, lng:-86.25},
    map:map,
    icon:icon_Legend 
  })

  google.maps.event.addListener(map, 'zoom_changed', function() {
    var zooms = map.getZoom();
    
        if (zooms != 7) {
            legendMarker.setMap(null);
        } else {                           
            legendMarker.setMap(map);
        }
    });

  legendMarker.addListener("click", () => {
    infowindow.open({
      anchor: legendMarker,
      map,
      shouldFocus: false,
    });
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
    // Neeva's markers starts here
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
    
    const northEastCoords = [
      { lng: -80.98815484, lat: 28.61309178 },
      { lng: -80.96561374, lat: 28.61288272 },
      { lng: -80.96695641, lat: 28.79272256 },
      { lng: -80.66344200, lat: 28.79083717 },
      { lng: -80.94853295, lat: 29.24281375 },
      { lng: -81.09317920, lat: 29.50480019 },
      { lng: -81.21229964, lat: 29.87192010 },
      { lng: -81.34276488, lat: 30.35034383 },
      { lng: -81.32291148, lat: 30.39683537 },
      { lng: -81.36545449, lat: 30.51418912 },
      { lng: -81.38814410, lat: 30.61675759 },
      { lng: -81.34792257, lat: 30.71267162 },
      { lng: -81.46932383, lat: 30.71103095 },
      { lng: -81.48586228, lat: 30.72463078 },
      { lng: -81.59444084, lat: 30.72586703 },
      { lng: -81.70445752, lat: 30.74873485 },
      { lng: -81.73897256, lat: 30.76480088 },
      { lng: -81.80296919, lat: 30.78889489 },
      { lng: -81.87847084, lat: 30.79877787 },
      { lng: -81.90148086, lat: 30.82965563 },
      { lng: -81.94678185, lat: 30.82718577 },
      { lng: -81.98057782, lat: 30.78271751 },
      { lng: -82.01868818, lat: 30.79074803 },
      { lng: -82.04601258, lat: 30.75615027 },
      { lng: -82.05176509, lat: 30.66094234 },
      { lng: -82.02300256, lat: 30.60278226 },
      { lng: -82.00646410, lat: 30.56935534 },
      { lng: -82.01796912, lat: 30.53467822 },
      { lng: -82.01653099, lat: 30.48263932 },
      { lng: -82.03954101, lat: 30.43739243 },
      { lng: -82.04601258, lat: 30.41011019 },
      { lng: -82.03666476, lat: 30.37909838 },
      { lng: -82.05026599, lat: 30.36228002 },
      { lng: -82.04866497, lat: 30.18702778 },
      { lng: -81.73896646, lat: 30.18930135 },
      { lng: -81.73353562, lat: 30.19332491 },
      { lng: -81.72526006, lat: 30.19092197 },
      { lng: -81.70896756, lat: 30.19131315 },
      { lng: -81.69222248, lat: 30.19030726 },
      { lng: -81.69823519, lat: 30.18058309 },
      { lng: -81.69519651, lat: 30.16789551 },
      { lng: -81.69557035, lat: 30.15316408 },
      { lng: -81.68270416, lat: 30.12114245 },
      { lng: -81.68206562, lat: 30.01117144 },
      { lng: -81.59905611, lat: 29.95696999 },
      { lng: -81.60735706, lat: 29.90993458 },
      { lng: -81.59522490, lat: 29.87118286 },
      { lng: -81.57351472, lat: 29.81081090 },
      { lng: -81.52626315, lat: 29.75650039 },
      { lng: -81.51987780, lat: 29.49451138 },
      { lng: -81.48731253, lat: 29.44670281 },
      { lng: -81.47262623, lat: 29.39330850 },
      { lng: -81.43335732, lat: 29.39835979 },
      { lng: -81.44442448, lat: 29.38100267 },
      { lng: -81.68047707, lat: 29.32335991 },
      { lng: -81.65201612, lat: 29.29526517 },
      { lng: -81.64193209, lat: 29.27798904 },
      { lng: -81.63292850, lat: 29.24562771 },
      { lng: -81.61348074, lat: 29.22425733 },
      { lng: -81.61361636, lat: 29.20605782 },
      { lng: -81.59327828, lat: 29.20059536 },
      { lng: -81.56042445, lat: 29.19740879 },
      { lng: -81.52548467, lat: 29.16735914 },
      { lng: -81.50827553, lat: 29.12864588 },
      { lng: -81.49680276, lat: 29.09584206 },
      { lng: -81.46082000, lat: 29.09265224 },
      { lng: -81.44517532, lat: 29.05482258 },
      { lng: -81.40084874, lat: 29.03065903 },
      { lng: -81.36017257, lat: 28.97547199 },
      { lng: -81.35495768, lat: 28.92664569 },
      { lng: -81.33857504, lat: 28.88076758 },
      { lng: -81.33668162, lat: 28.87222252 },
      { lng: -81.32306357, lat: 28.85640594 },
      { lng: -81.32456408, lat: 28.83777566 },
      { lng: -81.31742120, lat: 28.83463375 },
      { lng: -81.22661557, lat: 28.83216214 },
      { lng: -81.21847369, lat: 28.81823559 },
      { lng: -81.19899154, lat: 28.79336013 },
      { lng: -81.17074241, lat: 28.78421325 },
      { lng: -81.14234571, lat: 28.79595216 },
      { lng: -81.12996905, lat: 28.80445727 },
      { lng: -81.12471025, lat: 28.82329145 },
      { lng: -81.10164850, lat: 28.82477708 },
      { lng: -81.07044730, lat: 28.81467441 },
      { lng: -81.05789899, lat: 28.79268285 },
      { lng: -81.04399410, lat: 28.73292561 },
      { lng: -81.02398464, lat: 28.70020817 },
      { lng: -81.00940147, lat: 28.66123132 },
      { lng: -80.98815484, lat: 28.61309178 },
    ];
    const northEast = new google.maps.Polygon ({
      paths: northEastCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
    northEast.setMap(map);

    const northCentralCoords = [
      { lng: -82.05026599, lat: 30.36228002 },
      { lng: -82.04866497, lat: 30.18702778 },
      { lng: -81.73896646, lat: 30.18930135 },
      { lng: -81.73353562, lat: 30.19332491 },
      { lng: -81.72526006, lat: 30.19092197 },
      { lng: -81.70896756, lat: 30.19131315 },
      { lng: -81.69222248, lat: 30.19030726 },
      { lng: -81.69823519, lat: 30.18058309 },
      { lng: -81.69519651, lat: 30.16789551 },
      { lng: -81.69557035, lat: 30.15316408 },
      { lng: -81.68270416, lat: 30.12114245 },
      { lng: -81.68270416, lat: 30.08799823 },
      { lng: -81.68206562, lat: 30.01117144 },
      { lng: -81.59905611, lat: 29.95696999 },
      { lng: -81.60735706, lat: 29.90993458 },
      { lng: -81.59522490, lat: 29.87118286 },
      { lng: -81.57351472, lat: 29.81081090 },
      { lng: -81.52626315, lat: 29.75650039 },
      { lng: -81.52307047, lat: 29.62004027 },
      { lng: -81.51987780, lat: 29.49451138 },
      { lng: -81.48731253, lat: 29.44670281 },
      { lng: -81.47262623, lat: 29.39330850 },
      { lng: -81.43335732, lat: 29.39835979 },
      { lng: -81.44442448, lat: 29.38100267 },
      { lng: -81.68047707, lat: 29.32335991 },
      { lng: -81.65210410, lat: 29.29523299 },
      { lng: -81.64201876, lat: 29.27761128 },
      { lng: -81.64089899, lat: 29.21557039 },
      { lng: -81.63900076, lat: 29.04807639 },
      { lng: -81.65963583, lat: 29.04763640 },
      { lng: -81.65963583, lat: 28.96092233 },
      { lng: -82.30989229, lat: 28.96048197 },
      { lng: -82.31794500, lat: 28.97413221 },
      { lng: -82.40501494, lat: 29.01727275 },
      { lng: -82.47648276, lat: 29.04939634 },
      { lng: -82.61473648, lat: 29.01047297 },
      { lng: -82.75941196, lat: 28.99242589 },
      { lng: -82.76766707, lat: 29.04848776 },
      { lng: -82.83093805, lat: 29.07663381 },
      { lng: -82.82980821, lat: 29.10378500 },
      { lng: -82.80551667, lat: 29.11217573 },
      { lng: -82.81681506, lat: 29.15313244 },
      { lng: -83.08515183, lat: 29.16546560 },
      { lng: -83.09249578, lat: 29.25422059 },
      { lng: -83.17666878, lat: 29.28132483 },
      { lng: -83.22977122, lat: 29.40886446 },
      { lng: -83.43144748, lat: 29.49003227 },
      { lng: -83.42333129, lat: 29.66681710 },
      { lng: -83.39790847, lat: 29.67227457 },
      { lng: -83.36605516, lat: 29.66642727 },
      { lng: -83.35367231, lat: 29.68918813 },
      { lng: -83.34756613, lat: 29.73569456 },
      { lng: -83.32079287, lat: 29.77932572 },
      { lng: -83.31938375, lat: 29.82253037 },
      { lng: -82.91820437, lat: 29.82396470 },
      { lng: -82.91135206, lat: 29.82070173 },
      { lng: -82.89340865, lat: 29.82713833 },
      { lng: -82.87583490, lat: 29.86578972 },
      { lng: -82.87528528, lat: 29.88112276 },
      { lng: -82.88358565, lat: 29.89047833 },
      { lng: -82.89396112, lat: 29.89947324 },
      { lng: -82.91554209, lat: 29.90558932 },
      { lng: -82.93000205, lat: 29.95510446 },
      { lng: -82.95302493, lat: 29.95979786 },
      { lng: -82.96385922, lat: 29.99147250 },
      { lng: -83.11012220, lat: 30.09932499 },
      { lng: -83.15481367, lat: 30.10049665 },
      { lng: -83.22354539, lat: 30.11315983 },
      { lng: -83.22422304, lat: 30.13953500 },
      { lng: -83.23709842, lat: 30.15301292 },
      { lng: -83.23328661, lat: 30.16694516 },
      { lng: -83.25122323, lat: 30.19051354 },
      { lng: -83.24117872, lat: 30.22709539 },
      { lng: -83.25337563, lat: 30.23329436 },
      { lng: -83.25194070, lat: 30.25808631 },
      { lng: -83.24046126, lat: 30.26180456 },
      { lng: -83.23400408, lat: 30.29030649 },
      { lng: -83.21248013, lat: 30.31012904 },
      { lng: -83.20817534, lat: 30.34790466 },
      { lng: -83.19239111, lat: 30.35223864 },
      { lng: -83.19167365, lat: 30.37514360 },
      { lng: -83.17247574, lat: 30.38645828 },
      { lng: -83.18199795, lat: 30.41109770 },
      { lng: -83.21835548, lat: 30.42080243 },
      { lng: -83.22095245, lat: 30.46707325 },
      { lng: -83.24345949, lat: 30.47229600 },
      { lng: -83.23999687, lat: 30.52152525 },
      { lng: -83.25990695, lat: 30.55656724 },
      { lng: -83.25644433, lat: 30.58712547 },
      { lng: -83.27375744, lat: 30.62661329 },
      { lng: -83.31266819, lat: 30.63792773 },
      { lng: -82.21610515, lat: 30.56855457 },
      { lng: -82.24046343, lat: 30.54383325 },
      { lng: -82.22480454, lat: 30.50898797 },
      { lng: -82.20262110, lat: 30.48650051 },
      { lng: -82.20610086, lat: 30.45875882 },
      { lng: -82.20871067, lat: 30.42313291 },
      { lng: -82.19000699, lat: 30.37661214 },
      { lng: -82.16608368, lat: 30.35784750 },
      { lng: -82.12606650, lat: 30.36460319 },
      { lng: -82.11475730, lat: 30.36572909 },
      { lng: -82.07082539, lat: 30.35859816 },
      { lng: -82.05026599, lat: 30.36228002 }
    ];
    const northCentral = new google.maps.Polygon ({
      paths: northCentralCoords,
      strokeColor: "#FFA500",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFA500",
      fillOpacity: 0.35,
    });
    northCentral.setMap(map);

    const eastCentralCoords = [
      { lng: -80.66344200, lat: 28.79083717 },
      { lng: -80.52781705, lat: 28.62760363 },
      { lng: -80.47099108, lat: 28.46786923 },
      { lng: -80.48690235, lat: 28.40990574 },
      { lng: -80.53690920, lat: 28.33190481 },
      { lng: -80.50735970, lat: 28.07549971 },
      { lng: -80.30733228, lat: 27.71590514 },
      { lng: -80.27983815, lat: 27.61634022 },
      { lng: -80.26122266, lat: 27.55694338 },
      { lng: -80.13711940, lat: 27.26058106 },
      { lng: -80.01798026, lat: 26.96785118 },
      { lng: -80.14217884, lat: 26.97089083 },
      { lng: -80.14197741, lat: 26.95643805 },
      { lng: -80.60991658, lat: 26.95634271 },
      { lng: -80.63370302, lat: 27.02966660 },
      { lng: -80.67613289, lat: 27.10237038 },
      { lng: -80.70441946, lat: 27.15043199 },
      { lng: -80.77288020, lat: 27.20318974 },
      { lng: -80.83556632, lat: 27.18474906 },
      { lng: -80.87080341, lat: 27.14926261 },
      { lng: -80.91978317, lat: 27.20876474 },
      { lng: -80.98038415, lat: 27.23843570 },
      { lng: -81.04128688, lat: 27.35960179 },
      { lng: -81.11393195, lat: 27.38643386 },
      { lng: -81.14414716, lat: 27.41554215 },
      { lng: -81.14479003, lat: 27.44179011 },
      { lng: -81.17757675, lat: 27.46632060 },
      { lng: -81.18207689, lat: 27.48286133 },
      { lng: -81.20072031, lat: 27.49027534 },
      { lng: -81.21120316, lat: 27.50552603 },
      { lng: -81.20887165, lat: 27.55101188 },
      { lng: -81.15058403, lat: 27.58201417 },
      { lng: -81.14216767, lat: 27.64324414 },
      { lng: -81.14024841, lat: 27.64654337 },
      { lng: -81.13742657, lat: 27.64714991 },
      { lng: -81.13723983, lat: 27.64537625 },
      { lng: -81.13779200, lat: 27.64444192 },
      { lng: -81.13652433, lat: 27.64436171 },
      { lng: -81.13217801, lat: 27.64789096 },
      { lng: -81.13163473, lat: 27.66112465 },
      { lng: -81.14358708, lat: 27.67796521 },
      { lng: -81.19932862, lat: 27.80312790 },
      { lng: -81.20953880, lat: 27.81881397 },
      { lng: -81.20775927, lat: 27.82146466 },
      { lng: -81.21543936, lat: 27.82660020 },
      { lng: -81.21974770, lat: 27.83339198 },
      { lng: -81.22911367, lat: 27.84192253 },
      { lng: -81.24634704, lat: 27.84863054 },
      { lng: -81.29411346, lat: 27.86138291 },
      { lng: -81.30741313, lat: 27.89209835 },
      { lng: -81.31368833, lat: 27.90103814 },
      { lng: -81.30544628, lat: 27.92057066 },
      { lng: -81.31696641, lat: 27.93141134 },
      { lng: -81.33607298, lat: 27.93439026 },
      { lng: -81.33485541, lat: 27.95085563 },
      { lng: -81.34778044, lat: 27.95375129 },
      { lng: -81.34796776, lat: 27.96127965 },
      { lng: -81.37171061, lat: 27.98264877 },
      { lng: -81.38757164, lat: 28.00522865 },
      { lng: -81.41897000, lat: 28.00294230 },
      { lng: -81.43612581, lat: 28.03466114 },
      { lng: -81.44810250, lat: 28.03551828 },
      { lng: -81.45748964, lat: 28.04208943 },
      { lng: -81.45781333, lat: 28.05323090 },
      { lng: -81.44001014, lat: 28.05694447 },
      { lng: -81.43418364, lat: 28.04123234 },
      { lng: -81.41443828, lat: 28.03380400 },
      { lng: -81.40019572, lat: 28.02551793 },
      { lng: -81.38336361, lat: 28.00922966 },
      { lng: -81.37494756, lat: 28.01237320 },
      { lng: -81.37591864, lat: 28.02523219 },
      { lng: -81.36264717, lat: 28.04094665 },
      { lng: -81.36426564, lat: 28.06837002 },
      { lng: -81.35487850, lat: 28.06608501 },
      { lng: -81.34581506, lat: 28.07208306 },
      { lng: -81.34678614, lat: 28.08522050 },
      { lng: -81.45522176, lat: 28.08578366 },
      { lng: -81.45631163, lat: 28.14249893 },
      { lng: -81.52461007, lat: 28.14378028 },
      { lng: -81.52501731, lat: 28.20238958 },
      { lng: -81.55757248, lat: 28.25986954 },
      { lng: -81.65719128, lat: 28.25941074 },
      { lng: -81.65711013, lat: 28.34687230 },
      { lng: -80.86353023, lat: 28.34800516 },
      { lng: -80.89744929, lat: 28.42427076 },
      { lng: -80.89477499, lat: 28.45797608 },
      { lng: -80.88586064, lat: 28.46933940 },
      { lng: -80.87182055, lat: 28.47090666 },
      { lng: -80.87627772, lat: 28.48912435 },
      { lng: -80.88452349, lat: 28.49421690 },
      { lng: -80.90768625, lat: 28.51733723 },
      { lng: -80.94109958, lat: 28.54040279 },
      { lng: -80.98815484, lat: 28.61309178 },
      { lng: -80.96561374, lat: 28.61288272 },
      { lng: -80.96695641, lat: 28.79272256 },
      { lng: -80.66344200, lat: 28.79083717 },
    ];
    const eastCentral = new google.maps.Polygon ({
      paths: eastCentralCoords,
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
    });
    eastCentral.setMap(map);

    const eastPanhandleCoords = [
      { lng: -85.44265154, lat: 30.99625828 },
      { lng: -85.00200544, lat: 31.00097862 },
      { lng: -85.00586678, lat: 30.97644308 },
      { lng: -84.98155229, lat: 30.96444831 },
      { lng: -84.98290443, lat: 30.93273870 },
      { lng: -84.94180501, lat: 30.88535454 },
      { lng: -84.92767708, lat: 30.84346064 },
      { lng: -84.93153015, lat: 30.80485796 },
      { lng: -84.91226480, lat: 30.75630688 },
      { lng: -84.91224616, lat: 30.74880311 },
      { lng: -84.89790902, lat: 30.74880311 },
      { lng: -84.86365919, lat: 30.71217368 },
      { lng: -83.31266819, lat: 30.63792773 },
      { lng: -83.27375744, lat: 30.62661329 },
      { lng: -83.25644433, lat: 30.58712547 },
      { lng: -83.25990695, lat: 30.55656724 },
      { lng: -83.23999687, lat: 30.52152525 },
      { lng: -83.24345949, lat: 30.47229600 },
      { lng: -83.22095245, lat: 30.46707325 },
      { lng: -83.21835548, lat: 30.42080243 },
      { lng: -83.18199795, lat: 30.41109770 },
      { lng: -83.17247574, lat: 30.38645828 },
      { lng: -83.19167365, lat: 30.37514360 },
      { lng: -83.19239111, lat: 30.35223864 },
      { lng: -83.20817534, lat: 30.34790466 },
      { lng: -83.21248013, lat: 30.31012904 },
      { lng: -83.23400408, lat: 30.29030649 },
      { lng: -83.24046126, lat: 30.26180456 },
      { lng: -83.25194070, lat: 30.25808631 },
      { lng: -83.25337563, lat: 30.23329436 },
      { lng: -83.24117872, lat: 30.22709539 },
      { lng: -83.25122323, lat: 30.19051354 },
      { lng: -83.23328661, lat: 30.16694516 },
      { lng: -83.23709842, lat: 30.15301292 },
      { lng: -83.22422304, lat: 30.13953500 },
      { lng: -83.22354539, lat: 30.11315983 },
      { lng: -83.15481367, lat: 30.10049665 },
      { lng: -83.11012220, lat: 30.09932499 },
      { lng: -82.99771639, lat: 30.01492868 },
      { lng: -82.96385922, lat: 29.99147250 },
      { lng: -82.95302493, lat: 29.95979786 },
      { lng: -82.93000205, lat: 29.95510446 },
      { lng: -82.91554209, lat: 29.90558932 },
      { lng: -82.89396112, lat: 29.89947324 },
      { lng: -82.88358565, lat: 29.89047833 },
      { lng: -82.87528528, lat: 29.88112276 },
      { lng: -82.87583490, lat: 29.86578972 },
      { lng: -82.89340865, lat: 29.82713833 },
      { lng: -82.91135206, lat: 29.82070173 },
      { lng: -82.91820437, lat: 29.82396470 },
      { lng: -82.92737512, lat: 29.82427758 },
      { lng: -83.31938375, lat: 29.82253037 },
      { lng: -83.32079287, lat: 29.77932572 },
      { lng: -83.34756613, lat: 29.73569456 },
      { lng: -83.35367231, lat: 29.68918813 },
      { lng: -83.36605516, lat: 29.66642727 },
      { lng: -83.39790847, lat: 29.67227457 },
      { lng: -83.42333129, lat: 29.66681710 },
      { lng: -83.43140678, lat: 29.67539299 },
      { lng: -83.45593233, lat: 29.67435353 },
      { lng: -83.48285061, lat: 29.68526736 },
      { lng: -83.49900159, lat: 29.70761102 },
      { lng: -83.55597863, lat: 29.72709271 },
      { lng: -83.58962648, lat: 29.76059238 },
      { lng: -83.64331292, lat: 29.88891051 },
      { lng: -83.74218572, lat: 29.94757201 },
      { lng: -83.89520314, lat: 30.01639138 },
      { lng: -83.97230038, lat: 30.06682859 },
      { lng: -84.03880410, lat: 30.10298492 },
      { lng: -84.10840891, lat: 30.09104429 },
      { lng: -84.23908963, lat: 30.07824321 },
      { lng: -84.34264793, lat: 30.03342640 },
      { lng: -84.33771658, lat: 29.89671687 },
      { lng: -84.44620623, lat: 29.91809013 },
      { lng: -84.53743616, lat: 29.89244167 },
      { lng: -84.77414085, lat: 29.75981953 },
      { lng: -85.14651219, lat: 29.70283827 },
      { lng: -85.31457579, lat: 29.67377619 },
      { lng: -85.31218626, lat: 29.81623820 },
      { lng: -85.37698152, lat: 29.91235556 },
      { lng: -85.44265154, lat: 30.99625828 },
    ];
    const eastPanhandle = new google.maps.Polygon ({
      paths: eastPanhandleCoords,
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0000FF",
      fillOpacity: 0.35,
    });
    eastPanhandle.setMap(map);

    const westCentralCoords = [
      { lng: -82.30989229, lat: 28.96048197 },
      { lng: -82.16954458, lat: 28.79361484 },
      { lng: -82.26346730, lat: 28.66755395 },
      { lng: -82.27478071, lat: 28.65728491 },
      { lng: -82.26687364, lat: 28.64770277 },
      { lng: -82.24578814, lat: 28.62192575 },
      { lng: -82.20964156, lat: 28.57167542 },
      { lng: -82.19345090, lat: 28.57465144 },
      { lng: -82.16634097, lat: 28.56373896 },
      { lng: -82.15655127, lat: 28.57299810 },
      { lng: -82.13662439, lat: 28.56294757 },
      { lng: -82.13094744, lat: 28.54654125 },
      { lng: -82.11776900, lat: 28.53992600 },
      { lng: -82.10873235, lat: 28.54389520 },
      { lng: -82.09818960, lat: 28.52636343 },
      { lng: -82.06731439, lat: 28.53165635 },
      { lng: -82.05423205, lat: 28.52138110 },
      { lng: -82.05524727, lat: 28.47736584 },
      { lng: -82.05559625, lat: 28.25874090 },
      { lng: -82.10630660, lat: 28.25922016 },
      { lng: -82.10521151, lat: 28.17131850 },
      { lng: -82.05652022, lat: 28.17102848 },
      { lng: -82.05542048, lat: 27.64582939 },
      { lng: -82.55328976, lat: 27.64567842 },
      { lng: -82.49628312, lat: 27.71779024 },
      { lng: -82.48319148, lat: 27.74728646 },
      { lng: -82.44153624, lat: 27.77256258 },
      { lng: -82.40345145, lat: 27.82414976 },
      { lng: -82.41059235, lat: 27.88938821 },
      { lng: -82.46652938, lat: 27.90306226 },
      { lng: -82.47605058, lat: 27.88623242 },
      { lng: -82.48081118, lat: 27.86203493 },
      { lng: -82.46295893, lat: 27.84204163 },
      { lng: -82.47128998, lat: 27.81467640 },
      { lng: -82.54745955, lat: 27.82730736 },
      { lng: -82.56293150, lat: 27.85046031 },
      { lng: -82.53555806, lat: 27.93145669 },
      { lng: -82.64505182, lat: 27.99873220 },
      { lng: -82.67599571, lat: 27.98507026 },
      { lng: -82.70574945, lat: 27.94197125 },
      { lng: -82.63553062, lat: 27.90621757 },
      { lng: -82.59625569, lat: 27.87150416 },
      { lng: -82.58316404, lat: 27.82520230 },
      { lng: -82.61746431, lat: 27.78065697 },
      { lng: -82.61843125, lat: 27.73530638 },
      { lng: -82.63873709, lat: 27.69978284 },
      { lng: -82.67693141, lat: 27.70277925 },
      { lng: -82.70400587, lat: 27.70149508 },
      { lng: -82.71270837, lat: 27.69250550 },
      { lng: -82.71609268, lat: 27.66895786 },
      { lng: -82.69288600, lat: 27.65011609 },
      { lng: -82.69578684, lat: 27.62313246 },
      { lng: -82.73639852, lat: 27.60042678 },
      { lng: -82.75767130, lat: 27.63426937 },
      { lng: -82.74268366, lat: 27.68437144 },
      { lng: -82.74510102, lat: 27.71947202 },
      { lng: -82.76008867, lat: 27.73744599 },
      { lng: -82.77459284, lat: 27.76055102 },
      { lng: -82.79199785, lat: 27.78578981 },
      { lng: -82.80988632, lat: 27.80118687 },
      { lng: -82.84684621, lat: 27.83279232 },
      { lng: -82.85907878, lat: 27.87785558 },
      { lng: -82.85194311, lat: 27.92380080 },
      { lng: -82.83869116, lat: 27.96522485 },
      { lng: -82.83767178, lat: 28.00033279 },
      { lng: -82.82849736, lat: 28.04712558 },
      { lng: -82.84276869, lat: 28.08040806 },
      { lng: -82.80810974, lat: 28.20535006 },
      { lng: -82.75612133, lat: 28.27090865 },
      { lng: -82.73267557, lat: 28.35526717 },
      { lng: -82.69291972, lat: 28.46465387 },
      { lng: -82.66743520, lat: 28.56676545 },
      { lng: -82.67559025, lat: 28.65267738 },
      { lng: -82.70107477, lat: 28.80017412 },
      { lng: -82.73573371, lat: 28.85197198 },
      { lng: -82.69699725, lat: 28.88678707 },
      { lng: -82.75941196, lat: 28.99242589 },
      { lng: -82.61473648, lat: 29.01047297 },
      { lng: -82.47648276, lat: 29.04939634 },
      { lng: -82.40501494, lat: 29.01727275 },
      { lng: -82.31794500, lat: 28.97413221 },
      { lng: -82.30989229, lat: 28.96048197 },
    ];
    const westCentral = new google.maps.Polygon({
      paths: westCentralCoords,
      strokeColor: "#6A0DAD",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#6A0DAD",
      fillOpacity: 0.35,
    });
    westCentral.setMap(map);

    const southEastCoords = [
      { lng: -80.01798026, lat: 26.96785118 },
      { lng: -79.97117198, lat: 26.79073695 },
      { lng: -80.00089017, lat: 26.45691621 },
      { lng: -80.04998978, lat: 25.97469710 },
      { lng: -80.06937120, lat: 25.90846857 },
      { lng: -80.05774235, lat: 25.79451503 },
      { lng: -80.09908939, lat: 25.63968850 },
      { lng: -80.13785224, lat: 25.43566317 },
      { lng: -80.24251193, lat: 25.25116008 },
      { lng: -80.34587953, lat: 25.07456888 },
      { lng: -80.74642898, lat: 24.77460048 },
      { lng: -81.51264130, lat: 24.52093673 },
      { lng: -82.00492949, lat: 24.42215087 },
      { lng: -82.24009078, lat: 24.48213724 },
      { lng: -82.27756154, lat: 24.63373978 },
      { lng: -82.08245519, lat: 24.67718881 },
      { lng: -81.75813935, lat: 24.69362504 },
      { lng: -81.45595624, lat: 24.83290876 },
      { lng: -81.25088115, lat: 24.78866086 },
      { lng: -81.27273341, lat: 24.70011772 },
      { lng: -80.99369682, lat: 24.78560870 },
      { lng: -80.65414627, lat: 24.97012909 },
      { lng: -80.76004570, lat: 25.09958571 },
      { lng: -80.96175890, lat: 25.09501898 },
      { lng: -81.20045285, lat: 25.10567442 },
      { lng: -81.27273341, lat: 25.26235410 },
      { lng: -81.36014247, lat: 25.44008504 },
      { lng: -81.49293699, lat: 25.59026827 },
      { lng: -81.54168435, lat: 25.66907702 },
      { lng: -81.62909340, lat: 25.67968191 },
      { lng: -81.70286886, lat: 25.77596473 },
      { lng: -81.65117275, lat: 25.76688099 },
      { lng: -81.59065047, lat: 25.79185962 },
      { lng: -81.58812871, lat: 25.80775237 },
      { lng: -81.57153329, lat: 25.80279663 },
      { lng: -80.87412433, lat: 25.80492096 },
      { lng: -80.88577540, lat: 26.74521181 },
      { lng: -80.84621462, lat: 26.72555199 },
      { lng: -80.81867641, lat: 26.69612044 },
      { lng: -80.77638560, lat: 26.69787776 },
      { lng: -80.73212778, lat: 26.68030333 },
      { lng: -80.70852360, lat: 26.70754254 },
      { lng: -80.70655659, lat: 26.72862649 },
      { lng: -80.68442767, lat: 26.75014565 },
      { lng: -80.69672151, lat: 26.79273280 },
      { lng: -80.69426275, lat: 26.80985096 },
      { lng: -80.65197194, lat: 26.83486517 },
      { lng: -80.63033478, lat: 26.87040218 },
      { lng: -80.61213989, lat: 26.90373538 },
      { lng: -80.61705743, lat: 26.92171369 },
      { lng: -80.60991658, lat: 26.95634271 },
      { lng: -80.14197741, lat: 26.95643805 },
      { lng: -80.14217884, lat: 26.97089083 },
      { lng: -80.01798026, lat: 26.96785118 },
    ];
    const southEast = new google.maps.Polygon ({
      paths: southEastCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
    southEast.setMap(map);

    const southWestCoords = [
      { lng: -82.55328976, lat: 27.64567842 },
      { lng: -82.74419281, lat: 27.57032768 },
      { lng: -82.82256332, lat: 27.57096503 },
      { lng: -82.81465437, lat: 27.53590545 },
      { lng: -82.76360569, lat: 27.48042473 },
      { lng: -82.73484587, lat: 27.41661925 },
      { lng: -82.70824304, lat: 27.39044835 },
      { lng: -82.63274851, lat: 27.29656517 },
      { lng: -82.61980659, lat: 27.25055257 },
      { lng: -82.57954285, lat: 27.22306374 },
      { lng: -82.55797298, lat: 27.19556813 },
      { lng: -82.52202321, lat: 27.09767993 },
      { lng: -82.43574375, lat: 26.94459831 },
      { lng: -82.33290686, lat: 26.78513659 },
      { lng: -82.32421112, lat: 26.70193420 },
      { lng: -82.30930413, lat: 26.64199082 },
      { lng: -82.22358894, lat: 26.45863564 },
      { lng: -82.17443831, lat: 26.43944671 },
      { lng: -82.13030748, lat: 26.38750103 },
      { lng: -82.07104608, lat: 26.37055717 },
      { lng: -81.97774089, lat: 26.39653674 },
      { lng: -81.94747975, lat: 26.38072379 },
      { lng: -81.90587068, lat: 26.33327192 },
      { lng: -81.86552250, lat: 26.20890108 },
      { lng: -81.85417457, lat: 26.07307209 },
      { lng: -81.80121757, lat: 25.97676441 },
      { lng: -81.81004374, lat: 25.94502223 },
      { lng: -81.78608700, lat: 25.91213738 },
      { lng: -81.76717379, lat: 25.87130205 },
      { lng: -81.72052120, lat: 25.79640062 },
      { lng: -81.70286886, lat: 25.77596473 },
      { lng: -81.65117275, lat: 25.76688099 },
      { lng: -81.59065047, lat: 25.79185962 },
      { lng: -81.58812871, lat: 25.80775237 },
      { lng: -81.57153329, lat: 25.80279663 },
      { lng: -80.87412433, lat: 25.80492096 },
      { lng: -80.88577540, lat: 26.74521181 },
      { lng: -80.92867789, lat: 26.76877330 },
      { lng: -80.93960140, lat: 26.81362756 },
      { lng: -80.96066978, lat: 26.90352995 },
      { lng: -81.00114072, lat: 26.96687149 },
      { lng: -81.01283232, lat: 26.97128002 },
      { lng: -81.01418135, lat: 26.94001581 },
      { lng: -80.99574459, lat: 26.88788954 },
      { lng: -81.01103361, lat: 26.88227450 },
      { lng: -81.02407425, lat: 26.87665919 },
      { lng: -81.03756456, lat: 26.89430638 },
      { lng: -81.04071230, lat: 26.91555956 },
      { lng: -81.05914906, lat: 26.91916819 },
      { lng: -81.06319616, lat: 26.95484735 },
      { lng: -81.08298195, lat: 26.95123986 },
      { lng: -81.08388130, lat: 26.96807383 },
      { lng: -81.07623679, lat: 26.98811100 },
      { lng: -81.05705330, lat: 26.98628894 },
      { lng: -80.96690320, lat: 26.99548713 },
      { lng: -80.95038715, lat: 27.02369021 },
      { lng: -80.92148407, lat: 27.03778909 },
      { lng: -80.88294662, lat: 27.06414313 },
      { lng: -80.86023706, lat: 27.08191329 },
      { lng: -80.85886072, lat: 27.10458147 },
      { lng: -80.87080341, lat: 27.14926261 },
      { lng: -80.91978317, lat: 27.20876474 },
      { lng: -80.98038415, lat: 27.23843570 },
      { lng: -81.04128688, lat: 27.35960179 },
      { lng: -81.11393195, lat: 27.38643386 },
      { lng: -81.14414716, lat: 27.41554215 },
      { lng: -81.14479003, lat: 27.44179011 },
      { lng: -81.17757675, lat: 27.46632060 },
      { lng: -81.18207689, lat: 27.48286133 },
      { lng: -81.20072031, lat: 27.49027534 },
      { lng: -81.21120316, lat: 27.50552603 },
      { lng: -81.20887165, lat: 27.55101188 },
      { lng: -81.15058403, lat: 27.58201417 },
      { lng: -81.14216767, lat: 27.64324414 },
      { lng: -82.55328976, lat: 27.64567842 },
    ];
    const southWest = new google.maps.Polygon ({
      paths: southWestCoords,
      strokeColor: "#FFA500",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFA500",
      fillOpacity: 0.35,
    });
    southWest.setMap(map);

    const westPanhandleCoords = [
      { lng: -87.59851414, lat: 30.99726022 },
      { lng: -85.44265154, lat: 30.99625828 },
      { lng: -85.37698152, lat: 29.91235556 },
      { lng: -85.41136953, lat: 29.94139025 },
      { lng: -85.46555497, lat: 29.95815800 },
      { lng: -85.48435400, lat: 29.95672088 },
      { lng: -85.59106615, lat: 30.04147569 },
      { lng: -85.73150598, lat: 30.11563651 },
      { lng: -85.76578656, lat: 30.14863214 },
      { lng: -85.88466279, lat: 30.21697926 },
      { lng: -85.97699922, lat: 30.26044818 },
      { lng: -86.05993612, lat: 30.29100822 },
      { lng: -86.17273031, lat: 30.32824038 },
      { lng: -86.28607741, lat: 30.35877929 },
      { lng: -86.39610704, lat: 30.37738426 },
      { lng: -86.50447793, lat: 30.37976925 },
      { lng: -86.57303910, lat: 30.38930866 },
      { lng: -86.70020902, lat: 30.39360109 },
      { lng: -86.89317556, lat: 30.37213706 },
      { lng: -87.51862259, lat: 30.26852354 },
      { lng: -87.51862259, lat: 30.28335175 },
      { lng: -87.45239514, lat: 30.30029553 },
      { lng: -87.45092342, lat: 30.31003688 },
      { lng: -87.50292423, lat: 30.30495456 },
      { lng: -87.50488005, lat: 30.31969399 },
      { lng: -87.49949022, lat: 30.32994010 },
      { lng: -87.46515006, lat: 30.33248065 },
      { lng: -87.45092342, lat: 30.34433566 },
      { lng: -87.45190457, lat: 30.36465519 },
      { lng: -87.43914965, lat: 30.37946885 },
      { lng: -87.42743204, lat: 30.40825102 },
      { lng: -87.40399633, lat: 30.40909318 },
      { lng: -87.37437619, lat: 30.42733818 },
      { lng: -87.37291146, lat: 30.44642161 },
      { lng: -87.40481007, lat: 30.45259486 },
      { lng: -87.42824578, lat: 30.46830683 },
      { lng: -87.43573219, lat: 30.48022940 },
      { lng: -87.43296548, lat: 30.48766273 },
      { lng: -87.43182624, lat: 30.49733924 },
      { lng: -87.44636950, lat: 30.51770659 },
      { lng: -87.43248653, lat: 30.55078125 },
      { lng: -87.40737903, lat: 30.58587894 },
      { lng: -87.39206483, lat: 30.62920117 },
      { lng: -87.40747428, lat: 30.67053096 },
      { lng: -87.47092494, lat: 30.70560841 },
      { lng: -87.53346916, lat: 30.74378937 },
      { lng: -87.54525285, lat: 30.77884018 },
      { lng: -87.57244599, lat: 30.80453600 },
      { lng: -87.60054556, lat: 30.81932745 },
      { lng: -87.60507775, lat: 30.83178164 },
      { lng: -87.62864514, lat: 30.84579067 },
      { lng: -87.63227089, lat: 30.86524426 },
      { lng: -87.62048720, lat: 30.89713961 },
      { lng: -87.59329406, lat: 30.94846103 },
      { lng: -87.59851414, lat: 30.99726022 },
    ];
    const westPanhandle = new google.maps.Polygon ({
      paths: westPanhandleCoords,
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
    });
    westPanhandle.setMap(map);

    const centralCoords = [
      { lng: -82.05542048, lat: 27.64582939 },
      { lng: -81.14216767, lat: 27.64324414 },
      { lng: -81.14024841, lat: 27.64654337 },
      { lng: -81.13742657, lat: 27.64714991 },
      { lng: -81.13723983, lat: 27.64537625 },
      { lng: -81.13779200, lat: 27.64444192 },
      { lng: -81.13652433, lat: 27.64436171 },
      { lng: -81.13217801, lat: 27.64789096 },
      { lng: -81.13163473, lat: 27.66112465 },
      { lng: -81.14358708, lat: 27.67796521 },
      { lng: -81.19932862, lat: 27.80312790 },
      { lng: -81.20953880, lat: 27.81881397 },
      { lng: -81.20775927, lat: 27.82146466 },
      { lng: -81.21543936, lat: 27.82660020 },
      { lng: -81.21974770, lat: 27.83339198 },
      { lng: -81.22911367, lat: 27.84192253 },
      { lng: -81.24634704, lat: 27.84863054 },
      { lng: -81.29411346, lat: 27.86138291 },
      { lng: -81.30741313, lat: 27.89209835 },
      { lng: -81.31368833, lat: 27.90103814 },
      { lng: -81.30544628, lat: 27.92057066 },
      { lng: -81.31696641, lat: 27.93141134 },
      { lng: -81.33607298, lat: 27.93439026 },
      { lng: -81.33485541, lat: 27.95085563 },
      { lng: -81.34778044, lat: 27.95375129 },
      { lng: -81.34796776, lat: 27.96127965 },
      { lng: -81.37171061, lat: 27.98264877 },
      { lng: -81.38757164, lat: 28.00522865 },
      { lng: -81.41897000, lat: 28.00294230 },
      { lng: -81.43094670, lat: 28.02494645 },
      { lng: -81.43612581, lat: 28.03466114 },
      { lng: -81.44810250, lat: 28.03551828 },
      { lng: -81.45748964, lat: 28.04208943 },
      { lng: -81.45781333, lat: 28.05323090 },
      { lng: -81.44001014, lat: 28.05694447 },
      { lng: -81.43418364, lat: 28.04123234 },
      { lng: -81.41443828, lat: 28.03380400 },
      { lng: -81.40019572, lat: 28.02551793 },
      { lng: -81.38336361, lat: 28.00922966 },
      { lng: -81.37494756, lat: 28.01237320 },
      { lng: -81.37591864, lat: 28.02523219 },
      { lng: -81.36264717, lat: 28.04094665 },
      { lng: -81.36426564, lat: 28.06837002 },
      { lng: -81.35487850, lat: 28.06608501 },
      { lng: -81.34581506, lat: 28.07208306 },
      { lng: -81.34678614, lat: 28.08522050 },
      { lng: -81.45522176, lat: 28.08578366 },
      { lng: -81.45631163, lat: 28.14249893 },
      { lng: -81.52461007, lat: 28.14378028 },
      { lng: -81.52501731, lat: 28.20238958 },
      { lng: -81.55757248, lat: 28.25986954 },
      { lng: -81.65719128, lat: 28.25941074 },
      { lng: -81.65711013, lat: 28.34687230 },
      { lng: -80.86353023, lat: 28.34800516 },
      { lng: -80.89744929, lat: 28.42427076 },
      { lng: -80.89477499, lat: 28.45797608 },
      { lng: -80.88586064, lat: 28.46933940 },
      { lng: -80.87182055, lat: 28.47090666 },
      { lng: -80.87627772, lat: 28.48912435 },
      { lng: -80.88452349, lat: 28.49421690 },
      { lng: -80.90768625, lat: 28.51733723 },
      { lng: -80.94109958, lat: 28.54040279 },
      { lng: -80.98815484, lat: 28.61309178 },
      { lng: -81.00940147, lat: 28.66123132 },
      { lng: -81.02398464, lat: 28.70020817 },
      { lng: -81.04399410, lat: 28.73292561 },
      { lng: -81.05789899, lat: 28.79268285 },
      { lng: -81.07044730, lat: 28.81467441 },
      { lng: -81.10164850, lat: 28.82477708 },
      { lng: -81.12471025, lat: 28.82329145 },
      { lng: -81.12996905, lat: 28.80445727 },
      { lng: -81.14234571, lat: 28.79595216 },
      { lng: -81.17074241, lat: 28.78421325 },
      { lng: -81.19899154, lat: 28.79336013 },
      { lng: -81.21847369, lat: 28.81823559 },
      { lng: -81.22661557, lat: 28.83216214 },
      { lng: -81.31742120, lat: 28.83463375 },
      { lng: -81.32456408, lat: 28.83777566 },
      { lng: -81.32306357, lat: 28.85640594 },
      { lng: -81.33668162, lat: 28.87222252 },
      { lng: -81.33857504, lat: 28.88076758 },
      { lng: -81.35495768, lat: 28.92664569 },
      { lng: -81.36017257, lat: 28.97547199 },
      { lng: -81.40084874, lat: 29.03065903 },
      { lng: -81.44517532, lat: 29.05482258 },
      { lng: -81.46082000, lat: 29.09265224 },
      { lng: -81.49680276, lat: 29.09584206 },
      { lng: -81.50827553, lat: 29.12864588 },
      { lng: -81.52548467, lat: 29.16735914 },
      { lng: -81.56042445, lat: 29.19740879 },
      { lng: -81.59327828, lat: 29.20059536 },
      { lng: -81.61361636, lat: 29.20605782 },
      { lng: -81.61348074, lat: 29.22425733 },
      { lng: -81.63292850, lat: 29.24562771 },
      { lng: -81.64201876, lat: 29.27761128 },
      { lng: -81.64089899, lat: 29.21557039 },
      { lng: -81.63900076, lat: 29.04807639 },
      { lng: -81.65963583, lat: 29.04763640 },
      { lng: -81.65963583, lat: 28.96092233 },
      { lng: -82.30989229, lat: 28.96048197 },
      { lng: -82.16954458, lat: 28.79361484 },
      { lng: -82.26346730, lat: 28.66755395 },
      { lng: -82.27478071, lat: 28.65728491 },
      { lng: -82.26687364, lat: 28.64770277 },
      { lng: -82.24578814, lat: 28.62192575 },
      { lng: -82.20964156, lat: 28.57167542 },
      { lng: -82.19345090, lat: 28.57465144 },
      { lng: -82.16634097, lat: 28.56373896 },
      { lng: -82.15655127, lat: 28.57299810 },
      { lng: -82.13662439, lat: 28.56294757 },
      { lng: -82.13094744, lat: 28.54654125 },
      { lng: -82.11776900, lat: 28.53992600 },
      { lng: -82.10873235, lat: 28.54389520 },
      { lng: -82.09818960, lat: 28.52636343 },
      { lng: -82.06731439, lat: 28.53165635 },
      { lng: -82.05423205, lat: 28.52138110 },
      { lng: -82.05559625, lat: 28.25874090 },
      { lng: -82.10630660, lat: 28.25922016 },
      { lng: -82.10521151, lat: 28.17131850 },
      { lng: -82.05652022, lat: 28.17102848 },
      { lng: -82.05542048, lat: 27.64582939 },
    ];
    const central = new google.maps.Polygon ({
      paths: centralCoords,
      strokeColor: "#0000FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#0000FF",
      fillOpacity: 0.35,
    });
    central.setMap(map);
}

function showArrays(event) {
  // Polygon does not have only one path. Need to return MVCArray of LatLngs. Do not know how to do that.
  // Cannot show infoBox unless I click on one of the two ranges. If I click on the green box, the infobox doesn't show up, but it should.
  const polygon = this;
  const vertices = polygon.getPath();
  let contentString =
    "<b>Highlight Legend</b><br>" +
    "<br>" +
    "<b>Hot and Cold Zones</b><br>" +
    "<br>" +
    "<b>Hot:</b> An area where solar power is considered preferred in Florida! <br>" +
    "<b>Cold:</b> An area where solar power is considered not preferred in Florida! <br>" +
    "<br>" +
    "The color coding is a representation of whether a given area is considered hot or cold for solar power. <br>" +
    "<b>Purple:</b> An area where solar power is considered strongly not preferred! <br>" +
    "<b>Blue:</b> An area where solar power is considered moderately not preferred! <br>" +
    "<b>Yellow:</b> An area where solar power is considered neither preferred nor unpreferred! <br>" +
    "<b>Orange:</b> An area where solar power is considered moderately preferred! <br>" +
    "<b>Red:</b> An area where solar power is considered strongly preferred! <br>" +
    "<br>" +
    "<b>Suitable and Unsuitable Zones</b><br>" +
    "<br>" +
    "<b>Suitable:</b> An area where solar power is considered suitable in Florida! <br>" +
    "<b>Unsuitable:</b> An area where solar power is considered not suitable in Florida! <br>" +
    "<br>" +
    "The opacity is a representation of whether a given area is considered suitable or unsuitable for solar power. <br>" +
    "<b>Suitable:</b> If an area represents one of the rectangles at the top of this legend, then the area is considered suitable for solar power! <br>" +
    "<b>Unsuitable:</b> If an area represents one of the rectangles at the bottom of this legend, then the area is considered unsuitable for solar power! <br>" +
    "<br>" +
    "<b>Markers</b><br>" +
    "<br>" +
    "<b>Sun Markers:</b> These markers represent the locations of power plants in Florida that provide solar power to Florida areas. <br>" +
    "<b>Google Maps Marker:</b> This marker appears only if you allow location tracking. Presents your current location on the map.<br>" +
    "<br>";

  // Iterate over the vertices.
  for (let i = 0; i < vertices.getLength(); i++) {
    const xy = vertices.getAt(i);
  }

  // Replace the info window's content and position.
  infoWindow.setContent(contentString);
  infoWindow.setPosition(event.latLng);
  infoWindow.open(map);
}

module.exports = initMap
