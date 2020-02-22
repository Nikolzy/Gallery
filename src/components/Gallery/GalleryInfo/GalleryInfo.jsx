import React, { Component } from "react";

class GalleryInfo extends Component {
  state = {
    date: new Date()
      .toUTCString()
      .split(" ")
      .splice(1, 4)
      .join(" ")
  };

  componentDidMount() {
    this.timer();
  }

  timer() {
    setInterval(() => {
      this.setState({
        date: new Date()
          .toUTCString()
          .split(" ")
          .splice(1, 4)
          .join(" ")
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h3 id="image_count">Count: {this.props.images.length}</h3>
        <p>{this.state.date}</p>
      </div>
    );
  }
}

export default GalleryInfo;
