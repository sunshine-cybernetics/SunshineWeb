import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';
import MenuItem from './MenuItem';

const Menu = ({ onPressMenuItem, teamRef, aboutRef, contactRef }) => (
  <div style={styles.menu}>
    <MenuItem name="About" onPressMenuItem={() => onPressMenuItem(aboutRef)} />
    <MenuItem name="Team" onPressMenuItem={() => onPressMenuItem(teamRef)} />
    {/* <MenuItem name="Contact" onPressMenuItem={() => onPressMenuItem(contactRef)} /> */}
  </div>
);

Menu.propTypes = {
  onPressMenuItem: PropTypes.func.isRequired,
  teamRef: PropTypes.shape({}).isRequired,
  aboutRef: PropTypes.shape({}).isRequired,
  contactRef: PropTypes.shape({}).isRequired,
};

export default Menu;
