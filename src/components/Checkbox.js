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
    this.setState({
      isChecked: !this.state.isChecked,
    });
  }

  render() {
    const { checkboxName } = this.props;
    return (
      <div>
        <input
          id={checkboxName}
          type="checkbox"
          onChange={this.checked.bind(this)}
          checked={this.state.isChecked}
        />
        <label
          className={this.state.isChecked ? 'label-checked' : ''}
          for={checkboxName}
        >
          {checkboxName}
        </label>
      </div>
    );
  }
}
