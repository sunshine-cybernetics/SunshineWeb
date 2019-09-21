import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';

const ContentBox = props => {
  const { textItem, textBox, children } = props;
  const { contentBox, contentBoxTextItem, contentBoxText } = styles;
  const { lighter, lightest } = constants;

  return (
    <div style={{ ...contentBox, height: `auto` }}>
      <div
        style={{
          ...contentBox,
          display: `grid`,
          position: `relative`,
          backgroundColor: lighter,
        }}
        className="content-box"
      >
        {children}
        <span
          style={{
            ...contentBoxTextItem,
            color: lightest,
          }}
        >
          {textItem}
        </span>
      </div>
      <div style={{ paddingLeft: 30, paddingRight: 30 }}>
        <span style={contentBoxText}>{textBox}</span>
      </div>
      <div />
    </div>
  );
};

ContentBox.propTypes = {
  children: PropTypes.shape({}).isRequired,
  textItem: PropTypes.string.isRequired,
  textBox: PropTypes.string.isRequired,
};
export default ContentBox;
