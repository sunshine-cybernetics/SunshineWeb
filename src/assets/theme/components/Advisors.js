import React from 'react';
import aaronStumpImg from '../../images/aaron-stump.svg';
import jacobArluckImg from '../../images/jacob-arluck.jpeg';
import DefaultBox from './DefaultBox';
import Advisor from './Advisor';

const Advisors = () => (
  <DefaultBox>
    <Advisor
      name="Aaron Stump"
      title="Computer Science Professor"
      company="The University of Iowa"
      resume="Advisor in Type Theory and Agda related context"
      imageSource={aaronStumpImg}
      imageAlt="Aaron Stump"
    />
    <Advisor
      name="Jacob Arluck"
      title="Governance and Ecosystem R&D "
      company="TQ Tezos"
      resume="Advisor in smart contract related context"
      imageSource={jacobArluckImg}
      imageAlt="Jacob Arluck"
    />
  </DefaultBox>
);

export default Advisors;
