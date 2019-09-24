import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';

const Title = ({ text, onPress }) => (
  <div style={{...styles.h3 }}>
    {text}
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
