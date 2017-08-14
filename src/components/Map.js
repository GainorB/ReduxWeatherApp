import React, { Component } from 'react';

// ref allows us to get a direct reference to a HTML element 
  // this.refs.map

class Map extends Component {

  // lifecycle method
  // gets called when this component gets rendered to the screen
  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    return (
      <div ref="map" />
    );
  }
}

export default Map;

// import { GoogleMapLoader, GoogleMap } from 'react-google-maps';
// export default (props) => {
//   return (
//     <GoogleMapLoader
//       containerElement={ <div style={{ height: '100%' }} /> }
//       googleMapElement={
//         <GoogleMap defaultZoom={12} defaultCenter={{ lat: props.lat, lng: props.lon }} />
//       }
//       />
//   );
// }