import React, { Component } from 'react';
import Checkbox from './Checkbox';
import './ToDoItem.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus } from '@fortawesome/free-solid-svg-icons';

library.add(faCalendarMinus);

export default class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoId: this.props.toDoId,
      toDoName: '',
      itemInputName: '',
      items: [],
    };
  }

  onInputChange(
    inputName,
    {
      target: { value },
    }
  ) {
    this.setState({
      [inputName]: value,
    });
  }

  addItem() {
    this.setState({
      items: [...this.state.items, this.state.itemInputName],
      itemInputName: '',
    });
  }

  render() {
    const itemList = this.state.items.map(item => (
      <Checkbox key={item} checkboxName={item} />
    ));
    return (
      <div className="toDoItem-block">
        <button onClick={this.props.onDeleteItem}>x</button>
        <input
          className="toDoName"
          type="text"
          onChange={this.onInputChange.bind(this, 'toDoName')}
        />
        <input
          className="itemName"
          type="text"
          value={this.state.itemInputName}
          onChange={this.onInputChange.bind(this, 'itemInputName')}
        />
        <button onClick={this.addItem.bind(this)}>
          <FontAwesomeIcon icon="calendar-minus" />
        </button>
        {itemList}
      </div>
    );
  }
}
