import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import CheckList from './check-list';

/**
 * Custom PropType Validators
As mentioned, React offers a great suite of built-in propType validators that cover pretty much every basic
use case, but there may still be some scenarios where one might need a more specific validator.
Validators are basically just functions that receive a list of properties, the name of the property to check,
and the name of the component. The function must then return either nothing (if the tested prop was valid)
or an instance of an Error suitable for the invalid prop.
 */
let titlePropType = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value !== 'string' || value.length > 80) {
      return new Error(
        `${propName} in ${componentName} is longer than 80 characters`,
      );
    }
  }
};

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false,
    };
  }
  toggleDetails() {
    this.setState({ showDetails: !this.state.showDetails });
  }
  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          <span
            dangerouslySetInnerHTML={{ __html: marked(this.props.description) }}
          />
          <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks} />
        </div>
      );
    }

    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color,
    };

    return (
      <div className="card">
        <div style={sideColor} />
        <div
          className={
            this.state.showDetails
              ? 'card__title card__title--is-open'
              : 'card__title'
          }
          onClick={this.toggleDetails.bind(this)}>
          {this.props.title}
        </div>
        {cardDetails}
      </div>
    );
  }
}
Card.propTypes = {
  id: PropTypes.number,
  // title: PropTypes.string,
  title: titlePropType,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskCallbacks: PropTypes.object,
};
export default Card;
