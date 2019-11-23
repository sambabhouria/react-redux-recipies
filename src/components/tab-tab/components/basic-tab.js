import React, { Component } from "react";
import { Tabs, TabList, Tab, PanelList, Panel } from "../elements";
 import {TodoApp} from "../../../components/todos"

export default class Basic extends Component {
  render() {
    return (
      <Tabs customStyle={this.props.customStyle}>
        <TabList>
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
          <Panel>counter example will go here </Panel>

          <Panel>
             <TodoApp />
          </Panel>
          <Panel>shopping cart go here</Panel>
          <Panel>
             Ashynchonisation go out here
           
          </Panel>
        </PanelList>
      </Tabs>
    );
  }
}
