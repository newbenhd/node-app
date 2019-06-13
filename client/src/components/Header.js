import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payment from "./Payment";

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Sign-In with Google</a>
          </li>
        );
      default:
        return [
          <li key="payment">
            <Payment />
          </li>,
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/survey" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProp = ({ auth }) => ({
  auth
});

export default connect(mapStateToProp)(Header);
