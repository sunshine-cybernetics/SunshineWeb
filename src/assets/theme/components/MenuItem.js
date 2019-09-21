import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';

const MenuItem = ({ name, onPressMenuItem }) => (
  <div onClick={onPressMenuItem} tabIndex={-2} onKeyPress={onPressMenuItem} role="button">
    <span className="menu-item" style={styles.menuButton}>
      {name}
    </span>
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  onPressMenuItem: PropTypes.func.isRequired,
};

export default MenuItem;
