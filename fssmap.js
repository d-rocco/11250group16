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
