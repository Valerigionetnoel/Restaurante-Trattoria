import React, { Component } from 'react';
import LocationPage from '../pages/Location'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    margin: 'auto',
    width: '70%',
    height: '50%',
    position: 'relative',
    marginTop: '50px', 

};

export class MapContainer extends Component {

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };
 
    render() {
      return (
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 45.3065318317676, 
              lng: -66.08558591878472
            } 
            
          }
        >

            <Marker
                onClick={this.onMarkerClick}
                name={'Our Location'}
            />
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>
        </Map>
        
      );
    }
};


  
export default GoogleApiWrapper(
    (props) => ({
        apiKey: 'AIzaSyC2i40CPJXEwGo0uFtlUatTQ2iwv9Z9Mkg'
    })
)(MapContainer);
