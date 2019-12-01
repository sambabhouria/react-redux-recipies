import React, { Component } from "react";
import { Tabs, TabList, Tab, PanelList, Panel } from "../elements";

import { CounterApp } from "../../../components/counter";
import { TodoApp } from "../../../components/todos";
import { Introduction } from "../../../components/introduction";

import { OngletApp } from "../../../components/onglet";

import { ShoppingCartApp } from "../../../containers/shopping-cart";

export default class Basic extends Component {
  render() {
    return (
      <Tabs customStyle={this.props.customStyle}>
        <TabList>
          <Tab>
            <i className="fas fa-list-ol"></i> Introduction
          </Tab>
          <Tab>
            <i className="fas fa-list-ol"></i> Counter
          </Tab>
          <Tab>
            <i className="fas fa-th-list"></i> Todos List
          </Tab>
          <Tab>
            <i className="fas fa-shopping-cart"></i> Shopping Cart
          </Tab>
          <Tab>
            <i className="fas fa-sync"></i> Asynchronisation
          </Tab>
        </TabList>
        <PanelList>
          <Panel>
            {" "}
            <Introduction />
          </Panel>
          <Panel>
            {" "}
            <CounterApp />
          </Panel>
          <Panel>
            <TodoApp />
          </Panel>
          <Panel>
            <ShoppingCartApp />
          </Panel>
          <Panel>
            <OngletApp />
          </Panel>
        </PanelList>
      </Tabs>
    );
  }
}
