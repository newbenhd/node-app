import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        token={token => {
          this.props.fetchStripe(token);
        }}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="D3 Live Show"
        description="D3.js example source code"
      >
        <button className="btn">Add credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(
  null,
  actions
)(Payment);
