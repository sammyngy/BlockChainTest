import React, { Component } from "react";

import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import HomePage from "./views/HomePage";
import SinglePage from "./views/single/single/SinglePage";
import Login from "./views/login/login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav
          className="justify-content-center"
          style={{ backgroundColor: "#dd082e" }}
          defaultActiveKey="/"
          as="ul"
        >
          <Nav.Item as="li">
            <Nav.Link
              style={{ color: "white", textAlign: "center" }}
              href="/products"
            >
              LOGO
            </Nav.Link>
            
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link
              style={{ color: "white", textAlign: "center" }}
              href="/"
            >
              LOGOUT
            </Nav.Link>
            
          </Nav.Item>
        </Nav>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact component={HomePage} path="/products" />

          <Route exact path="/:id" component={SinglePage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
