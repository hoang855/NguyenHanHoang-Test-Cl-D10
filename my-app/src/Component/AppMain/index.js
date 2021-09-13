import React, { Component } from "react";
import UersSeach from "../UersSeach";
import axios from "axios";

class AppMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateApi: "",
    };
  }

  async componentDidMount() {
    const rpos = await axios.get(
      `https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`
    );

    this.setState({
      stateApi: rpos,
    });
  }

  render() {
    return (
      <div className="appmain-container">
        <div className="appmain">
          <h1>Link Shortener</h1>
          <UersSeach />
        </div>
      </div>
    );
  }
}

export default AppMain;
