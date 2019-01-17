import React from 'react';

import './Header.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faPlusCircle);

const Header = ({ onClick }) => (
  <div className="header-container">
    <h1>To do list</h1>
    <button className="addList-button" onClick={onClick}>
      <FontAwesomeIcon icon="plus-circle" />
    </button>
  </div>
);

export default Header;
