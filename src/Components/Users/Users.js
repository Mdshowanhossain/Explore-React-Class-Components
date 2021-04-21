import React, { Component } from "react";

class Users extends Component {
  render() {
    return (
      <div
        style={{
          border: "2px solid red",
          margin: "10px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h4>Name:{this.props.users.name}</h4>
        <h5>UserName=||| {this.props.users.username}</h5>
        <button onClick={() => this.props.handleContactUser(this.props.users)}>
          Contact Me
        </button>
      </div>
    );
  }
}

export default Users;
