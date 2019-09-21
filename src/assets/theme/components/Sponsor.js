import React from 'react';
import PropTypes from 'prop-types';
import DefaultBox from './DefaultBox';
import RetangleBox from './RetangleBox';

const Sponsor = ({ image, alt }) => (
  <DefaultBox style={{ marginTop: 56, marginLeft: 15, marginRight: 15 }}>
    <RetangleBox>
      <img src={image} alt={alt} />
    </RetangleBox>
  </DefaultBox>
);

Sponsor.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Sponsor;
