
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'; // https://github.com/istarkov/google-map-react
const key = "AIzaSyCXK7SXsIlUdqwfII1Bnu7T3WJU5cUUPJ4"; // I placed the API key in a script tag within the index.html page
const greatPlaceStyle = {
  position: 'absolute',
  width: 40,
  height: 40,
  left: -20,
  top: -20,
  border: '5px solid #f44336',
  borderRadius: 40,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};
// The google-map-react library allows components to be placed inside the GoogleMapReact component
const Pickup = ({ text }) => <div style={greatPlaceStyle}>{text}</div>;

export default class SimpleMap extends Component {
	constructor(props) {
		super(props);
		this.state = {
			center: {lat: 37.8272, lng: -122.2913},
			zoom: 10
		}
	}

	_onClick ({x, y, lat, lng, event}) {
		console.log(x, y, lat, lng, event)
	}


  render() {
    return (

				<div style={{width: 800, height: 640}}>
		      <GoogleMapReact

						onClick={this._onClick}
		        center={this.state.center}
		        zoom={this.state.zoom}
						size={{width:300, height:400}}
						resetBoundsOnResize = {true}
						layerTypes={['TrafficLayer']}
		      >
						<SearchBox/>
		        <Pickup
		          lat={37.7749}
		          lng={-122.4194}
		          text={'Downtown'}
		        />
						<Pickup
							lat={37.7836966}
							lng={-122.4089664}
							text={'Hack Reactor'}
						/>
						<Pickup
							lat={37.3382082}
							lng={-121.88632860000001}
							text={'San Jose'}
						/>
						<Pickup
							lat={37.8043637}
							lng={-122.2711137}
							text={'Oakland'}
						/>
		      </GoogleMapReact>
				</div>

    );
  }
}
