import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';
import DefaultBox from './DefaultBox';

const RetangleBox = ({ children }) => (
  <DefaultBox style={styles.retangleBox}>{children}</DefaultBox>
);

RetangleBox.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default RetangleBox;
