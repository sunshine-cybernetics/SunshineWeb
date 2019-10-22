import React from 'react';
import PropTypes from 'prop-types';
import DefaultBox from './DefaultBox';
import RetangleBox from './RetangleBox';

const onClick = href => window.open(href, `_blank`);

const Sponsor = ({ image, alt, href }) => (
  <DefaultBox style={{ marginTop: 56, marginLeft: 15, marginRight: 15,cursor: `pointer`}}>
    <RetangleBox>
      <img src={image} alt={alt} onClick = {() => {onClick(href)}} style={{height: "65%"}}/>
    </RetangleBox>
  </DefaultBox>
);

Sponsor.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Sponsor;
