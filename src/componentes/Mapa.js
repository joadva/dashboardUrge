import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';

export class Mapa extends Component {

    render() {
        const style = {
            width: '68%',
            height: '30%'
        }
        return (
            <Map style={style} google={this.props.google} zoom={1}>

                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />

                <InfoWindow onClose={this.onInfoWindowClose}>

                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("YOUR_GOOGLE_API_KEY_GOES_HERE")
})(Mapa)