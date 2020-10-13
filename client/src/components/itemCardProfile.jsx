import React, { Component } from "react";

class itemCardProfile extends Component {
  render() {
    return (
      <div className="CardItem">
        <div className="item">
          <div className="round-image">
            <img
              src="https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100"
              alt="item"
            />
          </div>
          <div className="description">
            <h2>{this.props.name}</h2>
            <h4>Quantity: {this.props.quantity}</h4>
            <p>{this.props.description}</p>
            <div className="buttons">
              <span>
                <button className="btn-secondary">Delete</button>
              </span>
              <span>
                <button className="btn-primary">Edit</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default itemCardProfile;
