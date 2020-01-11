import React, { Component } from 'react';
import update from 'react-addons-update';
// Polyfills
import 'babel-polyfill';
import 'whatwg-fetch';
import KanbanBoard from '../../components/kanban-board-app/kanban-board';

import Api from '../../api'

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

   // finding the index of the card you want by its ID.
   findCardIndex(cardId) {
        return this.state.cards.findIndex((card) => card.id === cardId);
   }

    componentDidMount() {
       this.loadCards()
    }

    loadCards =()=> {
     Api.loadCards().then(resp => {
       this.setState({ cards: resp.data });
       window.state = this.state;
     })
     .catch((error) => {
      console.log('Error fetching and parsing data', error);
     });
    }

    addTask(cardId, taskName){
        // Keep a reference to the original state prior to the mutations
        // in case you need to revert the optimistic changes in the UI
        let prevState = this.state;
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card)=>card.id === cardId);
        // Create a new task with the given name and a temporary ID
        let newTask = {id:Date.now(), name:taskName, done:false};
        // Create a new object and push the new task to the array of tasks
        let nextState = update(this.state.cards, {
        [cardIndex]: {
        tasks: {$push: [newTask] }
        }
        });
        // set the component state to the mutated object
        this.setState({cards:nextState});
        // Call the API to add the task on the server
        fetch(`card.json/${cardId}/tasks`, {
        method: 'post',
        headers: API_HEADERS,
          body: JSON.stringify(newTask)
        })
        .then((response) => {
        if(response.ok){
        return response.json()
        } else {
        // Throw an error if server response wasn't 'ok'
        // so you can revert back the optimistic changes
        // made to the UI.
        throw new Error("Server response wasn't OK")
        }
        })
        .then((responseData) => {
        // When the server returns the definitive ID
        // used for the new Task on the server, update it on React
        newTask.id=responseData.id
        this.setState({cards:nextState});
        })
        .catch((error) => {
        this.setState(prevState);
        });
    }


    deleteTask(cardId, taskId, taskIndex){
      // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card)=>card.id === cardId);
        // Keep a reference to the original state prior to the mutations
        // in case you need to revert the optimistic changes in the UI
        let prevState = this.state;
        // Create a new object without the task
        let nextState = update(this.state.cards, {
        [cardIndex]: {
        tasks: {$splice: [[taskIndex,1]] }
        }
        });
        // set the component state to the mutated object
        this.setState({cards:nextState});
        // Call the API to remove the task on the server
        fetch(`card.json/${cardId}/tasks/${taskId}`, {
        method: 'delete',
        headers: API_HEADERS
        })
        .then((response) => {
        if(!response.ok){
        // Throw an error if server response wasn't 'ok'
        // so you can revert back the optimistic changes
        // made to the UI.
        throw new Error("Server response wasn't OK")
        }
        })
        .catch((error) => {
        console.error("Fetch error:",error)
        this.setState(prevState);
        });
    }

    toggleTask(cardId, taskId, taskIndex){
      // Keep a reference to the original state prior to the mutations
          // in case you need to revert the optimistic changes in the UI
          let prevState = this.state;
          // Find the index of the card
          let cardIndex = this.state.cards.findIndex((card)=>card.id === cardId);
          // Save a reference to the task's 'done' value
          let newDoneValue;
          // Using the $apply command, you will change the done value to its opposite,
          let nextState = update(
          this.state.cards, {
          [cardIndex]: {
          tasks: {
          [taskIndex]: {
          done: { $apply: (done) => {
          newDoneValue = !done
          return newDoneValue;
          }
          }
          }
          }
          }
          });
          // set the component state to the mutated object
          this.setState({cards:nextState});
          // Call the API to toggle the task on the server
          fetch(`card.json/${cardId}/tasks/${taskId}`, {
          method: 'put',
          headers: API_HEADERS,
          body: JSON.stringify({done:newDoneValue})
          })
          .then((response) => {
          if(!response.ok){
          // Throw an error if server response wasn't 'ok'
          // so you can revert back the optimistic changes
          // made to the UI.
          throw new Error("Server response wasn't OK")
          }
          })
          .catch((error) => {
          console.error("Fetch error:",error)
          this.setState(prevState);
          });

    }
     render() {

        return <KanbanBoard
                   cards={this.state.cards}
                   taskCallbacks={{
                   toggle: this.toggleTask.bind(this),
                   delete: this.deleteTask.bind(this),
                   add: this.addTask.bind(this) }}

        />
  }
}
export default KanbanBoardContainer;
