import React from "react";
import Map from "../components/Map";
import { Layer, Feature } from "react-mapbox-gl";
import { Marker } from "react-mapbox-gl";
import apiHandler from "../api/apiHandler";

const markerUrl = "media/marker-purple.svg";

class Home extends React.Component {
  state = {
    markers: [],
  };

  componentDidMount() {
    apiHandler
      .getItems()
      .then((apiRes) => {
        console.log(apiRes);
        this.setState({
          markers: apiRes,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100vh",
            width: "100vw",
          }}
        >
          <Marker coordinates={[-0.2416815, 51.5285582]} anchor="bottom">
            <img src={markerUrl} />
          </Marker>

          <Layer type="symbol" layout={{ "icon-image": "harbor-15" }}>
            <Feature coordinates={[-0.13235092163085938, 51.518250335096376]} />
          </Layer>
        </Map>
        ;
      </div>
    );
  }
}

export default Home;
