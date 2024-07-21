import React, { useEffect } from 'react';

const RideMap = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.mappls.Map('map', {
        center: [28.5355, 77.3910], // Center of Noida
        zoom: 12,
      });

      map.addListener('load', function () {
        const direction_option = {
          map: map,
          divWidth: '0px',
          start: {
            label: 'Start Location',
            geoposition: '28.5700, 77.3200', // Noida location
          },
          isDraggable: false,
          end: {
            label: 'End Location',
            geoposition: '28.5355, 77.3910'  // Another Noida location
          },
          Profile: ['driving', 'biking', 'trucking', 'walking'],
          via: [
            { label: 'Rider 1', geoposition: '28.5610, 77.3450' }, // Noida location
            // { label: 'Rider 2', geoposition: '28.5480, 77.3690' }, // Noida location
            { label: 'Rider 3', geoposition: '28.5550, 77.3620' }, // Additional Noida location
          ],
        };

        window.mappls.direction(direction_option, function (data) {
          if (data && data.status === 'success') {
            // Draw the route on the map
            const route = data.routes[0];
            const path = route.geometry.coordinates.map(coord => ({
              lat: coord[1],
              lng: coord[0],
            }));

            const routePath = new window.mappls.Polyline({
              path: path,
              geodesic: true,
              strokeColor: '#FF0000',
              strokeOpacity: 1.0,
              strokeWeight: 4,
            });

            routePath.setMap(map);
          }
        });
      });
    };

    // Load the Mappls script
    const loadScript = (url, callback) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      script.onload = callback;
      document.head.appendChild(script);
    };

    // Define the callback function to ensure it's globally accessible
    window.initMap1 = initMap;

    // Load the Mappls scripts
    loadScript('https://apis.mappls.com/advancedmaps/api/101591ad-cf84-415b-92aa-bfb871fd68c2/map_sdk?layer=vector&v=3.0&callback=initMap1', () => {
      loadScript('https://apis.mappls.com/advancedmaps/api/101591ad-cf84-415b-92aa-bfb871fd68c2/map_sdk_plugins?v=3.0', initMap);
    });
  }, []);

  return <div id="map" style={{ height: '100vh' }}></div>;
};

export default RideMap;
