import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 0,
  lng: 0
};

const locations = [
  { lat: 37.7749, lng: -122.4194 }, // San Francisco
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  { lat: 36.1699, lng: -115.1398 }  // Las Vegas
];

class MapWithRoutes extends React.Component {
  state = {
    directionsResponse: null
  };

  componentDidMount() {
    this.calculateRoute();
  }

  calculateRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const origin = locations[0];
    const destination = locations[2];
    const waypoints = [{ location: locations[1], stopover: true }];

    directionsService.route(
      {
        origin,
        destination,
        waypoints,
        travelMode: window.google.maps.TravelMode.DRIVING
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          this.setState({
            directionsResponse: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  render() {
    return (
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
        >
          {this.state.directionsResponse && (
            <DirectionsRenderer directions={this.state.directionsResponse} />
          )}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MapWithRoutes;
