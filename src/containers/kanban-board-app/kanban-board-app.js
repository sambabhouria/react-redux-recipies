import React, { Component } from 'react';
import KanbanBoard from '../../components/kanban-board-app/kanban-board';

const API_HEADERS = {
'Content-Type': 'application/json',
 'Accept': 'application/json'
};


class KanbanBoardContainer extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      cards: [],
    };
  }
   componentDidMount() {

     fetch(`card.json`, {headers: API_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
           this.setState({cards: responseData});
        })
        .catch((error) => {
          console.log('Error fetching and parsing data', error);
      });
    
    }
  render() {
        return <KanbanBoard cards={this.state.cards} />
  }
}
export default KanbanBoardContainer;
