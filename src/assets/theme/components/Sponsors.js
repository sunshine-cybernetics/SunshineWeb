import React from 'react';
import Title from './Title';
import ethereumFoundationImage from '../../images/ethereum.png';
import Sponsor from './Sponsor';
import DefaultBox from './DefaultBox';

const Sponsors = () => (
  <div style={{ textAlign: `center` }}>
    <Title text="Supported by:" />

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
