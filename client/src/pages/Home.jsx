import React from "react";
import Map from "../components/Map";
import { Layer, Feature } from "react-mapbox-gl";
import apiHandler from "../api/apiHandler";
import ItemCard from "../components/itemCard";

// const markerUrl = "media/marker-purple.svg";

class Home extends React.Component {
  state = {
    markers: [],
    markerClickedId: "",
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

  handleMarkerClick = (markerId) => {
    this.setState({
      markerClickedId: markerId,
    });
  };

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
          {/* <ItemCard id={this.state.markerClickedId} /> */}
          <Layer type="symbol" layout={{ "icon-image": "rocket-15" }}>
            {this.state.markers.map((marker) => (
              <Feature
                onClick={() => this.handleMarkerClick(marker._id)}
                key={marker._id}
                coordinates={[
                  marker.location.coordinates[0],
                  marker.location.coordinates[1],
                ]}
              />
            ))}
          </Layer>
        </Map>
      </div>
    );
  }
}

export default Home;
