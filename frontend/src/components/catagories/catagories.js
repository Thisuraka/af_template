import React, { Component } from "react";
import axios from "axios";

class Catagories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catagories: [],
    };
    this.deleteCatagory = this.deleteCatagory.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3000/catagory/").then((response) => {
      this.setState({ catagories: response.data.data });
    });
  }

  navigateRoomPage(e, catagoryId) {
    window.location = `/${catagoryId}`;
  }

  deleteCatagory(e, catagoryId) {
    axios
      .get(`http://localhost:3000/catagory/delete/${catagoryId}`)
      .then((response) => {
        var array = [...this.state.catagories];
        var index = array.indexOf(e.target.value);
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({ courses: array });
        }
        window.location = ``;
      });
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ padding: "1rem" }}>Catagories</h1>
        <hr />
        <div className="row">
          {this.state.catagories.length > 0 &&
            this.state.catagories.map((item, index) => (
              <div className="col-md-3">
                <div
                  className="card border-dark  mb-3"
                  key={index}
                  style={{ maxWidth: "15rem", padding: "10px" }}
                >
                  <div onClick={(e) => this.navigateRoomPage(e, item._id)}>
                    <h5 className="card-header">{item.name}</h5>
                    <h6 className="card-text" style={{ fontSize: "13px" }}>
                      Description: {item.description}
                    </h6>
                  </div>
                  <div
                    onClick={(e) => this.deleteCatagory(e, item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    <p
                      className="text-danger"
                      style={{
                        fontSize: "10px",
                        fontWeight: "bold",
                        paddingTop: "1rem",
                        paddingLeft: "10rem",
                      }}
                    >
                      Delete
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Catagories;
