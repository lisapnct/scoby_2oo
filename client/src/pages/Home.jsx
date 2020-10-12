import React from "react";
import Map from "../components/Map";
import { Layer, Feature } from "react-mapbox-gl";

const Home = (props) => {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[48.864716, 2.349014]} />
        </Layer>
      </Map>
      ;
    </div>
  );
};

export default Home;
