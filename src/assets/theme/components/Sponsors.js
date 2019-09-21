import React from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import ethereumFoundationImage from '../../images/ethereum-foundation.svg';
import Sponsor from './Sponsor';
import googleImage from '../../images/google.svg';
import youtubeImage from '../../images/youtube.svg';
import paypalImage from '../../images/paypal.svg';
import DefaultBox from './DefaultBox';

const Sponsors = () => (
  <div style={{ textAlign: `center` }}>
    <Subtitle text="WHO SUPPORT US" />
    <Title text="Sponsors" />
    <DefaultBox>
      <Sponsor image={ethereumFoundationImage} alt="Ethereum Foundation" />
      <Sponsor image={googleImage} alt="Google" />
      <Sponsor image={youtubeImage} alt="Youtube" />
      <Sponsor image={paypalImage} alt="Paypal" />
    </DefaultBox>
  </div>
);

Sponsors.defaultProps = {
  style: {},
};

Sponsors.propTypes = {};

export default Sponsors;
