import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';

const DefaultBox = props => {
  const { children, style, background, backgroundSize } = props;

  return (
    <div
      style={{
        ...styles.defaultBox,
        ...style,
        backgroundImage: `url(${background})`,
        backgroundSize,
      }}
    >
      {children}
    </div>
  );
};

DefaultBox.defaultProps = {
  style: {},
  background: ``,
  backgroundSize: `cover`,
};

DefaultBox.propTypes = {
  children: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
  background: PropTypes.string,
  backgroundSize: PropTypes.string,
};

export default DefaultBox;
