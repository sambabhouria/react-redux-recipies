import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './list';
class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <List
          id="todo"
          title="To Do"
          taskCallbacks={this.props.taskCallbacks}
          cards={this.props.cards.filter(card => card.status === 'todo')}
        />
        <List
          id="in-progress"
          taskCallbacks={this.props.taskCallbacks}
          title="In Progress"
          cards={this.props.cards.filter(card => card.status === 'in-progress')}
        />
        <List
          id="done"
          taskCallbacks={this.props.taskCallbacks}
          title="Done"
          cards={this.props.cards.filter(card => card.status === 'done')}
        />
      </div>
    );
  }
}

KanbanBoard.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
};
export default KanbanBoard;
