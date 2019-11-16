import React, { Component } from "react";

import "trendmicro-ui/dist/css/trendmicro-ui.css";
import "@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.css";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";
import { Button } from "@trendmicro/react-buttons";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Navbar from "./components/navbar/Navbar";
import DefaultSideNav from "./components/default";
import StyledSideNav from "./components/styled";
import "./components/navbar/Navbar.css";
import "./assets/fontawesome/css/all.min.css";

class App extends Component {
  state = {
    theme: "default",
  };

  render() {
    const name = "React-Redux Eco System";
    const url = "";

    return (
      <div>
        <Navbar name={name} url={url}>
          <Button
            btnStyle={this.state.theme === "default" ? "primary" : "flat"}
            className={"navbar-btn"}
            onClick={() => {
              this.setState({ theme: "default" });
            }}
          >
            Default Theme
          </Button>
          <Button
            btnStyle={this.state.theme === "styled" ? "primary" : "flat"}
            className={"navbar-btn"}
            onClick={() => {
              this.setState({ theme: "styled" });
            }}
          >
            Styled Component
          </Button>
        </Navbar>
        <div
          style={{
            position: "relative",
            height: "calc(100vh - 50px)",
          }}
        >
          {this.state.theme === "default" && <DefaultSideNav />}
          {this.state.theme === "styled" && <StyledSideNav />}
        </div>
      </div>
    );
  }
}

export default App;
