import React, { Component } from "react";
import axios from "axios";

const initialState = {
  roomCode: "",
  amount: 0,
  wing: "",
  pax: 0,
};
class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    let room = {
      code: this.state.roomCode,
      amount: this.state.amount,
      wing: this.state.wing,
      pax: this.state.pax,
    };
    console.log("Sending...", room);
    axios
      .post("http://localhost:3000/room/create", room)
      .then((response) => {
        alert("Data successfully inserted");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  }

  render() {
    return (
      <div className="container">
        <h2 style={{ padding: "1rem" }}>Create Room</h2>
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="roomCode" className="form-label">
              Room Code
            </label>
            <input
              type="text"
              className="form-control"
              id="roomCode"
              name="roomCode"
              value={this.state.roomCode}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="wing" className="form-label">
              Wing
            </label>
            <input
              className="form-control"
              id="wing"
              rows="3"
              name="wing"
              value={this.state.wing}
              onChange={this.onChange}
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="pax" className="form-label">
              Pax
            </label>
            <input
              className="form-control"
              id="pax"
              rows="3"
              name="pax"
              value={this.state.pax}
              onChange={this.onChange}
            ></input>
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "1rem", width: "40rem", marginInline: "20%" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateRoom;
