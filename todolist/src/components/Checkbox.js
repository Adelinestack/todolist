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
      <span className="label-checked">{this.props.checkboxName}</span>
    ) : (
      <span>{this.props.checkboxName}</span>
    );
    return (
      <div>
        <input
          type="checkbox"
          onChange={this.checked.bind(this)}
          checked={this.state.isChecked}
        />
        {classChecked}
      </div>
    );
  }
}
