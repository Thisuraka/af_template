import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./src/components/navBar/navBar";
import CreateRoom from "./src/components/createRoom/createRoom";
import CreateCatagory from "./src/components/createCatagory/createCatagory";
import Catagories from "./src/components/catagories/catagories";
import Rooms from "./src/components/catagories/rooms";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <section>
            <Switch>
              <Route path="/create-room" component={CreateRoom} />
              <Route path="/create-catagory" component={CreateCatagory} />
              <Route path="/:id" component={Rooms} />
              <Route path="/" component={Catagories} exact />
            </Switch>
          </section>
        </Router>
      </>
    );
  }
}
