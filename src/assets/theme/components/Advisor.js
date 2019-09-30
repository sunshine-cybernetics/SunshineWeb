import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';
import DefaultBox from './DefaultBox';

const Advisor = props => {
  const { imageSource, imageAlt, name, title, company, resume } = props;
  const { defaultBox, advisorsTitleAndCompany } = styles;
  return (
    <DefaultBox style={{width: 380, display: `flex`, justifyContent: `space-between`}}>
      <div style={{ ...defaultBox, flex: 0.5 }}>
        <img src={imageSource} alt={imageAlt} />
      </div>
      <div style={{ flex: 1 }}>
        <span
          style={{ color: constants.lightning, fontSize: 24, fontFamily: 'Poppins-Medium', marginBottom: 10 }}
        >
          {name}
        </span>
        <span style={advisorsTitleAndCompany}>{title}</span>
        <span style={advisorsTitleAndCompany}>{company}</span>
        <span style={{ color: constants.lightning, fontSize: 12, width: 230}}>{resume}</span>
      </div>
    </DefaultBox>
  );
};

Advisor.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Advisor;
