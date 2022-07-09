import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";

const initialState = {
  name: "",
  description: "",
  rooms: [],
  options: [],
  selectedRooms: [],
};

class CreateCatagory extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onRoomSelect = this.onRoomSelect.bind(this);
    this.state = initialState;
  }

  componentDidMount() {
    axios.get("http://localhost:3000/room/").then((response) => {
      console.log(response.data);
      this.setState({ rooms: response.data.data }, () => {
        let data = [];
        this.state.rooms.map((item, index) => {
          let room = {
            value: item._id,
            label: item.code,
          };
          data.push(room);
        });
        this.setState({ options: data });
      });
    });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onRoomSelect(e) {
    this.setState({ selectedRooms: e ? e.map((item) => item.value) : [] });
  }

  onSubmit(e) {
    e.preventDefault();
    let catagory = {
      name: this.state.name,
      description: this.state.description,
      rooms: this.state.selectedRooms,
    };
    console.log("Sending...", catagory);
    axios
      .post("http://localhost:3000/catagory/create", catagory)
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
      <div className="container" style={{ paddingBottom: "20rem" }}>
        <h2 style={{ padding: "1rem" }}>Create Catagory</h2>
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Catagory Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={this.state.description}
              onChange={this.onChange}
            />
          </div>
          <label htmlFor="rooms" className="form-label">
            Select Rooms
          </label>
          <Select
            options={this.state.options}
            onChange={this.onRoomSelect}
            className="basic-multi-select"
            isMulti
          />

          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "3rem", width: "40rem", marginInline: "20%" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateCatagory;
