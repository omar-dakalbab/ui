import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react'

export class Maps extends React.Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                initialCenter={{ lat: 9.761927, lng: 79.95244 }}
            >
                <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "",
})(Maps);