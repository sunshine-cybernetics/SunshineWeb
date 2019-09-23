import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';

const Title = ({ text }) => (
  <span style={{...styles.h3 }}>{text}</span>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
