import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';

const Subtitle = ({ text, style }) => (
  <h5 style={{ ...styles.h5, color: constants.primary, ...style }}>{text}</h5>
);

Subtitle.defaultProps = {
  style: {},
};

Subtitle.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
};

export default Subtitle;
