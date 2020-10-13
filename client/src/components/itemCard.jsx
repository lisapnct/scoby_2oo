import React, { Component } from "react";
import "../styles/CardItem.css";
import apiHandler from "../api/apiHandler"

class itemCard extends Component {

 state = {
    currentItemId: this.props.id
 }

 componentDidMount = () => {
     console.log(this.props)
    // apiHandler.getOneItem(this.props.id)
 }


  render() {
    return (
      <div className="CardItem">
        <div className="item">
          <div className="item-empty">
            <a href="/">Close</a>
            <img className="round-image" src="./media/plant.png" alt="img" />
            <h3>Zoompero</h3>
            <p>Quantity: 90 | Konmbucha</p>
            <p>Blabla</p>
            <p>address</p>
            <p className="description">Given away by...</p>
            {/* <button>Contact dzadza at ...</button> */}
          </div>
        </div>
      </div>
    );
  }
}

export default itemCard;
