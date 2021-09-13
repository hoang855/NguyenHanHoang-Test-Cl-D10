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
        {/* <form>
          <label>Enter a Link</label>
          <input
              type="text"
              name="search"
              className="iput-clss"
              value={search}
              onChange={this.onSearchChange}
            />
          <button className="clss-btn">
            <i class="fas fa-arrow-right"></i>
          </button>
        </form> */}

        <div className="input-group flex-nowrap">
          <label>Enter a Link</label>

          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>

        <div className="div-shot">
          <button>shrto.de</button>
          <button>9qr.de</button>
          <button>shiny.link</button>
        </div>
      </div>
    );
  }
}

export default UersSeach;
