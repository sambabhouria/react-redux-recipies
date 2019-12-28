import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Button, ButtonGroup } from "@trendmicro/react-buttons";
import Dropdown, { MenuItem } from "@trendmicro/react-dropdown";
import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import SideNav, { NavItem, NavIcon, NavText } from "./SideNav";
import { Home } from "../../components/home";
import { ReduxTpics } from "../../components/redux-topics";

const Main = styled.main`
  position: relative;
  overflow: hidden;
  transition: all 0.15s;
  padding: 0 20px;
  margin-left: ${props => (props.expanded ? 240 : 64)}px;
`;

export default class extends PureComponent {
  state = {
    selected: "home",
    expanded: false,
  };

  onSelect = selected => {
    this.setState({ selected: selected });
  };
  onToggle = expanded => {
    this.setState({ expanded: expanded });
  };

  navigate = pathname => () => {
    console.log(pathname);
  };

  render() {
    const { expanded } = this.state;

    return (
      <div>
        <Router>
          <Route
            render={({ location, history }) => (
              <Fragment>
                <div
                  style={{
                    marginLeft: expanded ? 240 : 64,
                    padding: "15px 20px 0 20px",
                  }}
                >
                  <ButtonGroup>
                    <Button
                      btnStyle="flat"
                      onClick={() =>
                        location.pathname !== "/home"
                          ? history.push("/home")
                          : ""
                      }
                    >
                      Home
                    </Button>
                    <Button
                      btnStyle="flat"
                      onClick={() =>
                        location.pathname !== "/redux"
                          ? history.push("/redux")
                          : ""
                      }
                    >
                      React-Redux
                    </Button>
                    <Button
                      btnStyle="flat"
                      onClick={() =>
                        location.pathname !== "/rapports"
                          ? history.push("/rapports")
                          : ""
                      }
                    >
                      Rapports
                    </Button>
                    <Dropdown>
                      <Dropdown.Toggle>Settings</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <MenuItem
                          onClick={() => history.push("settings/policies")}
                        >
                          Policies
                        </MenuItem>
                        <MenuItem
                          onClick={() => history.push("settings/network")}
                        >
                          Network
                        </MenuItem>
                      </Dropdown.Menu>
                    </Dropdown>
                  </ButtonGroup>
                </div>

                <SideNav
                  onSelect={selected => {
                    const to = "/" + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
                  onToggle={this.onToggle}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-home"
                          style={{
                            fontSize: "1.75em",
                            verticalAlign: "middle",
                          }}
                        />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Home">
                        Home
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="redux">
                      <NavIcon>
                        <i
                          className="fas fa-registered"
                          style={{
                            fontSize: "1.75em",
                            verticalAlign: "middle",
                          }}
                        />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Redux">
                        Redux
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="reports">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-list-alt"
                          style={{
                            fontSize: "1.75em",
                            verticalAlign: "middle",
                          }}
                        />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Reports">
                        Reports
                      </NavText>
                    </NavItem>
                    <NavItem eventKey="settings">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-cogs"
                          style={{ fontSize: "1.5em", verticalAlign: "middle" }}
                        />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Settings">
                        Settings
                      </NavText>
                      <NavItem eventKey="settings/policies">
                        <NavText title="Policies">Policies</NavText>
                      </NavItem>
                      <NavItem eventKey="settings/network">
                        <NavText title="Network">Network</NavText>
                      </NavItem>
                    </NavItem>
                  </SideNav.Nav>
                </SideNav>

                <Main expanded={expanded}>
                  <main>
                    <Switch>
                      <Route exact path="/(/|home|)/" component={Home} />
                      <Route path="/redux">
                        <ReduxTpics />
                      </Route>
                    </Switch>
                  </main>
                </Main>
              </Fragment>
            )}
          />
        </Router>
      </div>
    );
  }
}
