import React, { Component } from "react";
import apiHandler from "../api/apiHandler";
import { Link } from "react-router-dom";

class itemCardProfile extends Component {
  handleDelete = () => {
    console.log(this.props.id);
    apiHandler.deleteItem("/api/items/", this.props.id);
  };

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
                <button onClick={this.handleDelete} className="btn-secondary">
                  Delete
                </button>
              </span>
              <span>
                <button className="btn-primary">
                  <Link to={`/item/edit/${this.props.id}`}>Edit</Link>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default itemCardProfile;
