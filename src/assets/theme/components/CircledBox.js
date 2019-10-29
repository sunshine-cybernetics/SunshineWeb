import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';

const CircledBox = props => {
  const { children, size } = props;
  const { circledBox } = styles;

  return (
    <div
      style={{
        ...circledBox,
        backgroundColor: constants.darkLighted,
        width: size,
        height: size,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
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
