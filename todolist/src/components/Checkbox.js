import React, { Component } from 'react';
import './Checkbox.css';

export default class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
  }
  checked() {
    if (this.state.isChecked) {
      this.setState({
        isChecked: false,
      });
    } else
      this.setState({
        isChecked: true,
      });
  }

  render() {
    const classChecked = this.state.isChecked ? (
      <label className="label-checked" for={this.props.checkboxName}>
        {this.props.checkboxName}
      </label>
    ) : (
      <label for={this.props.checkboxName}>{this.props.checkboxName}</label>
    );
    return (
      <div>
        <input
          id={this.props.checkboxName}
          type="checkbox"
          onChange={this.checked.bind(this)}
          checked={this.state.isChecked}
        />
        {classChecked}
      </div>
    );
  }
}
