import React, { useEffect } from 'react';

const Test = () => {
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
            geoposition: '28.63124010064198,77.46734619140625',
          },
          isDraggable: false,
          end: { label: 'India Gate', geoposition: '28.612964,77.229463' },
          Profile: ['driving', 'biking', 'trucking', 'walking'],
          via: [
            { label: 'mathura', geoposition: '28.544,77.4541' },
            { label: 'Koshi', geoposition: '28.144,77.4541' },
            { label: 'CITY', geoposition: '28.148,77.4541' },
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

  return <div id="map" style={{ height: '100vh' }}></div>;
};

export default Test;