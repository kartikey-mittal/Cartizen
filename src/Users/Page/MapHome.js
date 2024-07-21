import React, { useEffect } from 'react';

const MapHome = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.mappls.Map('map', {
        center: [28.09, 78.3],
        zoom: 5,
      });

      map.addListener('load', function () {
        const direction_option = {
          map: map,
          divWidth: '0px',
          start: {
            label: 'start',
            geoposition: '28.612964,77.229463',
          },
          isDraggable: false,
          end: { label: 'India Gate', geoposition: '28.612964,77.229463' },
          Profile: ['driving', 'biking', 'trucking', 'walking'],
          via: [
            { label: 'Rider1 ', geoposition: '28.5610,77.3450' },
            { label: 'Rider 2', geoposition: '28.5700,77.3200' },
            // { label: 'CITY', geoposition: '28.5700,77.3200' },
          ],
        };
        window.mappls.direction(direction_option, function (data) {
          console.log(data);
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

    loadScript('https://apis.mappls.com/advancedmaps/api/101591ad-cf84-415b-92aa-bfb871fd68c2/map_sdk?layer=vector&v=3.0&callback=initMap1', () => {
      loadScript('https://apis.mappls.com/advancedmaps/api/101591ad-cf84-415b-92aa-bfb871fd68c2/map_sdk_plugins?v=3.0', initMap);
    });
  }, []);

  return <div id="map" style={{ height: '100%' }}></div>;
};

export default MapHome;