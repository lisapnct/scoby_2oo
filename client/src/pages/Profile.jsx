import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import "../styles/Profile.css";
import "../styles/CardItem.css";
import CardEmpty from "../components/CardEmpty";
import ItemCardProfile from "../components/itemCardProfile";
import apiHandler from "../api/apiHandler";

class Profile extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    apiHandler
      .getItems()
      .then((items) => {
        console.log(items);
        this.setState({
          items: items,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { authContext } = this.props;
    const { user } = authContext;

    console.log(user);

    return (
      <div style={{ padding: "100px", fontSize: "1.25rem" }}>
        {/* <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
          This is profile, it's protected !
        </h2>
        <p>
          Checkout the<b>ProtectedRoute</b> component in
          <code>./components/ProtectRoute.jsx</code>
        </p>
        <a
          style={{ color: "dodgerblue", fontWeight: "bold" }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://reacttraining.com/react-router/web/example/auth-workflow"
        >
          React router dom Demo of a protected route
        </a> */}

        <section className="Profile">
          <div className="user-image round-image">
            <img src={user.profileImg} alt={user.firstName} />
          </div>
          <div className="user-presentation">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <Link className="link" to="/profile/settings">
              Edit profile
            </Link>
          </div>

          <div className="user-contact">
            <h4>Add a phone number</h4>

            <form className="form">
              <div className="form-group">
                <label className="label" htmlFor="phoneNumber">
                  Phone number
                </label>
                <input
                  className="input"
                  id="phoneNumber"
                  type="text"
                  name="phoneNumber"
                  placeholder="Add phone number"
                />
              </div>
              <button className="form__button">Add phone number</button>
            </form>
          </div>

          <h3>Your items</h3>
          {this.state.items.map((item) => {
            if (item.id_user === user._id) {
              return (
                <ItemCardProfile
                  key={item._id}
                  name={item.name}
                  quantity={item.quantity}
                  description={item.description}
                />
              );
            }
          })}
        </section>
      </div>
    );
  }
}

export default withUser(Profile);
