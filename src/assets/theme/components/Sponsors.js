import React from 'react';
import Subtitle from './Subtitle';
import Title from './Title';
import ethereumFoundationImage from '../../images/ethereum-foundation.svg';
import Sponsor from './Sponsor';
import DefaultBox from './DefaultBox';

const Sponsors = () => (
  <div style={{ textAlign: `center` }}>
    <Subtitle text="WHO SUPPORT US" />
    <Title text="Sponsors" />

    <DefaultBox>
      <Sponsor image={ethereumFoundationImage} alt="Ethereum Foundation" href="https://www.ethereum.org"/>
    </DefaultBox>
  </div>
);

Sponsors.defaultProps = {
  style: {},
};

Sponsors.propTypes = {};

export default Sponsors;
