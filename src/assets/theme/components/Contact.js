import React from 'react';
import PropTypes from 'prop-types';
import DefaultBox from './DefaultBox';
import Title from './Title';
import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
import SocialMedia from './SocialMedia';
import sunshineLogoImage from '../../images/Sunshine-logo.png';
import { styles, constants } from '../constants';

const Contact = ({ contactRef, state, setState, onPressSubmitButton }) => (
  <div style={{ marginBottom: 200 }}>
    <div style={{ textAlign: `left`, marginLeft: 180 }}>
      <Title text="Hi!" />
      <Title text="We’d love to hear from you" />
    </div>
    <DefaultBox style={{ marginTop: 45, alignItems: `flex-start` }}>
      <div style={{ flex: 0.3, paddingLeft: 100 }}>
        <ContactDetail contactRef={contactRef} />
      </div>
      <div style={{ flex: 0.5 }}>
        <ContactForm state={state} setState={setState} onPressSubmitButton={onPressSubmitButton} />
        <div style={{ textAlign: `right` }}>
          <img
            src={sunshineLogoImage}
            alt="sunshine logo"
            style={{ width: 130, filter: `grayscale(100%)` }}
          />
          <span style={{ ...styles.contentBoxText, color: constants.lightest }}>
            © 2019 Sunshine Cybernetics
          </span>
        </div>
      </div>
      <div style={{ flex: 0.1 }}>
        <SocialMedia />
      </div>
    </DefaultBox>
  </div>
);

Contact.propTypes = {
  contactRef: PropTypes.shape({}).isRequired,
  state: PropTypes.shape({}).isRequired,
  setState: PropTypes.func.isRequired,
  onPressSubmitButton: PropTypes.func.isRequired,
};

export default Contact;
