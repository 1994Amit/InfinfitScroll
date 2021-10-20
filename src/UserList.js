import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import InfinitScroll from "react-infinite-scroll-component";
import "./App.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class UserList extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");

    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }

    if (token == null) {
      loggedIn = false;
    }

    localStorage.removeItem("token");
    this.state = {
      users: [],
      count: 10,
      start: 1,
      msg: "",
      loggedIn
    };

    this.fetchNextUsers = this.fetchNextUsers.bind(this);
  }

  componentDidMount() {
    this.fetchNextUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users.length !== this.state.users.length) {
      this.setState({
        users: this.state.users
      });
    }
  }

  fetchNextUsers() {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + this.state.count });
    axios
      .get(`https://randomuser.me/api/?results=${count}&start=${start}`)
      .then((response) => {
        this.setState({
          users: this.state.users.concat(response.data.results)
        });
        //console.log(response.data.results);
      });
  }

  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div className="images">
        <Link to="/logout">logout</Link>
        <InfinitScroll
          dataLength={this.state.users.length}
          next={this.fetchNextUsers}
          hasMore={true}
          loader={<h4>Loading ... </h4>}
        >
          <ul>
            {this.state.users.map((user, index) => (
              <li key={index}>
                <Card
                  name={user.name.first + " " + user.name.last}
                  picture={user.picture.medium}
                />
              </li>
            ))}
          </ul>
        </InfinitScroll>
      </div>
    );
  }
}

export default UserList;
