import React, { Component } from "react";

class CardEmpty extends Component {
  render() {
    return (
      <div className="CardItem">
        <div className="item-empty">
          <div className="round-image">
            <img src="/media/personal-page-empty-state.svg" alt="" />
          </div>
          <p>You don't have any items :(</p>
        </div>
      </div>
    );
  }
}

export default CardEmpty;
