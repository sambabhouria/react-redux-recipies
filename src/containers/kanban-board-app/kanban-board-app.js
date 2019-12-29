import React, { Component } from 'react';
import KanbanBoard from '../../components/kanban-board-app/kanban-board';

import constants_1 from '../../components/kanban-board-app/constants';


// If you're running the server locally, the URL will be, by default, localhost:3000
//https://jsonplaceholder.typicode.com/
// Also, the local server doesn't need an authorization header.
// const API_URL = 'localhost:3000';
// const API_HEADERS = {
// 'Content-Type': 'application/json',
// Authorization: 'any-string-you-like'// The Authorization is not needed for local server
// };


class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: [],
    };
  }

   componentDidMount() {
      //  https://jsonplaceholder.typicode.com/
       fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    
          // fetch('../../components/kanban-board-app/data/')
          // .then(response => {
          //     if (!response.ok) {
          //         throw new Error("HTTP error " + response.status);
          //     }
          //     return response.json();
          // })
          // .then(json => {
          //     this.users = json;
          //     //console.log(this.users);
          // })
          // .catch(function () {
          //     this.dataError = true;
          // })
      
    }

  render() {
    
    return <KanbanBoard cards={this.props.cards} />;
  }
}
export default KanbanBoardContainer;
