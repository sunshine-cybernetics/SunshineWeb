import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';

const Title = ({ text, onClick, clickable }) => (
  <div style={{ ...styles.h3, cursor: clickable ? `pointer` : `inherit` }} onClick={onClick}>
    {text}
  </div>
);

Title.defaultProps = {
  onClick: () => false,
  clickable: false,
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  clickable: PropTypes.bool,
};

export default Title;
