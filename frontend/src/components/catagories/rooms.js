import React, { Component } from "react";
import axios from "axios";

class Rooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      totalAmount: "",
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3000/catagory/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({ rooms: response.data.rooms });
        console.log(this.state.rooms);
        let totamount = [];
        if (this.state.rooms.length > 0) {
          this.state.rooms.map((room) => {
            totamount.push(room.amount);
          });
        }
        axios
          .get(`http://localhost:3000/calculation?array=${totamount}`)
          .then((response) => {
            this.setState({ totalAmount: response.data });
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  render() {
    return (
      <div className="container">
        <h1 style={{ paddingBottom: "1rem" }}>Rooms</h1>
        <h5>Total Amount: {this.state.totalAmount}</h5>
        <hr />
        <div className="row">
          {this.state.rooms.length > 0 &&
            this.state.rooms.map((item, index) => (
              <div className="col-md-3">
                <div key={index}>
                  <div
                    className="card border-dark  mb-3"
                    key={index}
                    style={{ maxWidth: "15rem", padding: "1rem" }}
                  >
                    <h6 className="card-header">Room : {item.code}</h6>
                    <h6>Amount: {item.amount}</h6>
                    <h6>Wing: {item.wing}</h6>
                    <h6>Pax: {item.pax}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Rooms;
