import React from 'react';
import aaronStumpImg from '../../images/aaron-stump.svg';
import jacobArluckImg from '../../images/jacob-arluck.jpeg';
import DefaultBox from './DefaultBox';
import Advisor from './Advisor';
import { constants } from '../constants';

const Advisors = () => (
  <DefaultBox>
    <Advisor
      name="Aaron Stump"
      title="Professor of Computer Science"
      company="The University of Iowa"
      // resume="Type Theory, Agda, Cedille"
      resume={<span>Type Theory, Agda, <a target="_blank" rel="noopener noreferrer" style={{ color: constants.lightning }} href="https://github.com/cedille/cedille">Cedille</a> </span>}
      imageSource={aaronStumpImg}
      imageAlt="Aaron Stump"
    />
    <Advisor
      name="Jacob Arluck"
      title="Governance and Ecosystem R&D "
      company="TQ Tezos"
      resume="Smart contracts, platform governance, consensus"
      imageSource={jacobArluckImg}
      imageAlt="Jacob Arluck"
    />
  </DefaultBox>
);

export default Advisors;
