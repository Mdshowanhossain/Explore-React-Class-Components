import React, { Component } from "react";
import Users from "../Users/Users";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      users: [],
      cart: [],
    };
    this.handleContactUser = this.handleContactUser.bind(this);
  }

  handleContactUser(users) {
    console.log(users);
    const newCart = [...this.state.cart, users];
    this.setState({ cart: newCart });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <h1>Users:{this.state.users.length}</h1>

        <h2>AvailAble Users: {this.state.cart.length}</h2>
        {this.state.users.map((users) => (
          <Users
            users={users}
            handleContactUser={this.handleContactUser}
          ></Users>
        ))}
      </div>
    );
  }
}

export default Home;
