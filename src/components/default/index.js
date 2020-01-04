import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Button, ButtonGroup } from "@trendmicro/react-buttons";
import Dropdown, { MenuItem } from "@trendmicro/react-dropdown";
import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import SideNav, { NavItem, NavIcon, NavText } from "./SideNav";
import { Home } from "../../components/home";
import { RealWorldAppGlobaleState, RealWorldAppReduxStore } from "../../components/real-world-app";
import { ReduxTpics } from "../../components/redux-topics";
import { KanbanBoardApp } from "../../components/kanban-board-app";
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
                        location.pathname !== "/kanbanboard"
                          ? history.push("/kanbanboard")
                          : ""
                      }
                    >
                      Kanban Board
                    </Button>
                    <Dropdown>
                      <Dropdown.Toggle>Real World React App</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <MenuItem
                          onClick={() =>
                            location.pathname !== "/globalstore"
                              ? history.push("/globalstore")
                              : ""
                          }
                        >
                          App Global Store
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            location.pathname !== "/reduxstore"
                              ? history.push("/reduxstore")
                              : ""
                          }
                        >
                          App Redux Data Store
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
                    <NavItem eventKey="kanbanboard">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-list-alt"
                          style={{
                            fontSize: "1.75em",
                            verticalAlign: "middle",
                          }}
                        />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title="Kanban">
                        Kanban Board
                      </NavText>
                    </NavItem>
                    <NavItem eventKey=" CompleteReactApp">
                      <NavIcon>
                        <i
                          className="fa fa-fw fa-cogs"
                          style={{ fontSize: "1.5em", verticalAlign: "middle" }}
                        />
                      </NavIcon>
                      <NavText style={{ paddingRight: 32 }} title=" Complete React App">
                         Real World React App
                      </NavText>
                      <NavItem eventKey="globalstore">
                      <NavText title="GlobalStore"> App Global Store</NavText>
                      </NavItem>
                      <NavItem eventKey="reduxstore">
                        <NavText title="ReduxStore">App Redux Data Store</NavText>
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

                       <Route path="/kanbanboard">
                        <KanbanBoardApp />
                      </Route>

                      <Route path="/globalstore" >
                           <RealWorldAppGlobaleState />
                      </Route>
                      <Route path="/reduxstore">
                           <RealWorldAppReduxStore />
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
