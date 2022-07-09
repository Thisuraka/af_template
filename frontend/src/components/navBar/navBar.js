import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ paddingInline: "3rem", color: "#007ebd" }}
            >
              AF Finals
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item" style={{ paddingInline: "1.5rem" }}>
                  <a className="nav-link" aria-current="page" href="/">
                    Catagories
                  </a>
                </li>
                <li className="nav-item" style={{ paddingInline: "1.5rem" }}>
                  <a className="nav-link" href="/create-room">
                    Create Room
                  </a>
                </li>
                <li className="nav-item" style={{ paddingInline: "1.5rem" }}>
                  <a className="nav-link" href="/create-catagory">
                    Create Catagory
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <br />
        <br />
      </div>
    );
  }
}

export default Navbar;
