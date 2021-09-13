import React, { Component } from "react";

class UersSeach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  

  render() {
    const { search } = this.state;
    return (
      <div className="container-ippuy">

        <div className="input-group flex-nowrap">
          <label>Enter a Link</label>

          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            value={search}
          />
        </div>

        <div className="div-shot">
          <div className="d-grid gap-2 d-md-block">
            <button className="btn btn-primary" type="button">
              hrto.de
            </button>
            <button className="btn btn-primary" type="button">
              9qr.de
            </button>

            <button className="btn btn-primary" type="button">
              shiny.link
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UersSeach;
