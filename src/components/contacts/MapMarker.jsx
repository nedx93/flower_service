import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MapMarker = (props) => {
	return (
		<Map
			google={props.google}
			style={{ width: "500px", height: "500px" }}
			initialCenter={{
				lat: 50.559474227549366,
				lng: 36.57694184218422,
			}}
			zoom={14}
		>
			<Marker
				name={"Место на карте"}
				position={{
					lat: 50.559474227549366,
					lng: 36.57694184218422,
				}}
			/>
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyCMfmn_Rk4YpoFV20EteEJWts3v8t-DZrI",
})(MapMarker);
