import React, { Component } from 'react';
import Header from './Header';
import ToDoItem from './ToDoItem';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoLists: [],
    };
  }

  onAddClick() {
    this.setState({
      toDoLists: [...this.state.toDoLists, Date.now()],
    });
  }
  deleteItem(toDoListId) {
    const toDoLists = this.state.toDoLists.filter(
      toDoList => toDoList !== toDoListId
    );
    this.setState({
      toDoLists,
    });
  }

  render() {
    const content = this.state.toDoLists.map(toDoList => (
      <ToDoItem
        key={toDoList}
        toDoId={toDoList}
        onDeleteItem={this.deleteItem.bind(this, toDoList)}
      />
    ));

    return (
      <div className="App">
        <Header onClick={this.onAddClick.bind(this)} />
        <div className="item-container">{content}</div>
      </div>
    );
  }
}
