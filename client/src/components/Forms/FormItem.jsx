import React, { Component } from "react";
import LocationAutoComplete from "../LocationAutoComplete";
import { withUser } from "../Auth/withUser";
import "../../styles/form.css";

import apiHandler from "../../api/apiHandler";

class ItemForm extends Component {
  state = {
    name: "",
    category: "",
    quantity: "",
    description: "",
    image: "",
    location: {
      coordinates: {},
    },
    id_user: this.props.authContext.user._id,
  };

  handleChange = (event) => {
    const value =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    const key = event.target.id;
    this.setState({
      [key]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // function buildFormData(formData, data, parentKey) {
    //   if (
    //     data &&
    //     typeof data === "object" &&
    //     !(data instanceof Date) &&
    //     !(data instanceof File)
    //   ) {
    //     Object.keys(data).forEach((key) => {
    //       buildFormData(
    //         formData,
    //         data[key],
    //         parentKey ? `${parentKey}[${key}]` : key
    //       );
    //     });
    //   } else {
    //     const value = data == null ? "" : data;
    //     console.log(value);
    //     formData.append(parentKey, value);
    //   }
    // }

    // function jsonToFormData(data) {
    //   const formData = new FormData();

    //   buildFormData(formData, data);

    //   return formData;
    // }

    // const item = jsonToFormData(itemObject);
    // console.log(item);

    apiHandler
      .createItem(this.state)
      .then((apiRes) => {
        console.log(apiRes)
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));

    // In order to send back the data to the client, since there is an input type file you have to send the
    // data as formdata.
    // The object that you'll be sending will maybe be a nested object, in order to handle nested objects in our form data
    // Check out the stackoverflow solution below : )

    // Nested object into formData by user Vladimir "Vladi vlad" Novopashin @stackoverflow : ) => https://stackoverflow.com/a/42483509
  };

  handlePlace = (place) => {
    // This handle is passed as a callback to the autocomplete component.
    // Take a look at the data and see what you can get from it.
    // Look at the item model to know what you should retrieve and set as state.
    console.log(place);
    this.setState({
      location: {
        type: place.geometry.type,
        coordinates: place.geometry.coordinates,
        formattedAddress: place.place_name,
      },
    });
  };

  render() {
    return (
      <div className="ItemForm-container">
        <form className="form" onSubmit={this.handleSubmit}>
          <h2 className="title">Add Item</h2>

          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <input
              onChange={this.handleChange}
              value={this.state.name || ""}
              id="name"
              className="input"
              type="text"
              placeholder="What are you giving away ?"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="category">
              Category
            </label>

            <select
              onChange={this.handleChange}
              id="category"
              defaultValue="-1"
            >
              <option value="-1" disabled>
                Select a category
              </option>
              <option value="Plant">Plant</option>
              <option value="Kombucha">Kombucha</option>
              <option value="Vinegar">Vinegar</option>
              <option value="Kefir">Kefir</option>
            </select>
          </div>

          <div className="form-group">
            <label className="label" htmlFor="quantity">
              Quantity
            </label>
            <input
              value={this.state.quantity || ""}
              onChange={this.handleChange}
              className="input"
              id="quantity"
              type="number"
            />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="location">
              Address
            </label>
            <LocationAutoComplete onSelect={this.handlePlace} />
          </div>

          <div className="form-group">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              onChange={this.handleChange}
              value={this.state.description || ""}
              id="description"
              className="text-area"
              placeholder="Tell us something about this item"
            ></textarea>
          </div>

          <div className="form-group">
            <label className="custom-upload label" htmlFor="image">
              Upload image
            </label>
            <input
              value={this.state.image || ""}
              onChange={this.handleChange}
              className="input"
              id="image"
              type="text"
            />
          </div>

          <h2>Contact information</h2>

          <div className="form-group">
            <label className="label" htmlFor="contact">
              How do you want to be reached?
            </label>
            <div>
              <input type="radio" />
              user email
            </div>
            <input type="radio" />
            contact phone number
          </div>

          <p className="message">
            <img src="/media/info.svg" alt="info" />
            Want to be contacted by phone? Add your phone number in your
            personal page.
          </p>

          <button className="btn-submit">Add Item</button>
        </form>
      </div>
    );
  }
}

export default withUser(ItemForm);
