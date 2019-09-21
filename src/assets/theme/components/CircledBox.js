import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';

const CircledBox = props => {
  const { children, size } = props;
  const { contentBox, circledBox } = styles;

  return (
    <div
      style={{
        ...contentBox,
        ...circledBox,
        backgroundColor: constants.darkLighted,
        width: size,
        height: size,
      }}
      className="circled-box"
    >
      {children}
    </div>
  );
};

CircledBox.defaultProps = {
  size: 109,
};

CircledBox.propTypes = {
  size: PropTypes.number,
  children: PropTypes.shape({}).isRequired,
};
export default CircledBox;
