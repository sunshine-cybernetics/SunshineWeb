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
  <div style={{ marginBottom: 200, marginTop: -100 }}>

    <div class= "Contact message" style={{ textAlign: `left`}}>
      <Title text="Hi!" />
      <Title text="We’d love to hear from you" />
    </div>

    <DefaultBox class="Contact form" style={{ marginTop: 40, marginLeft: -27, alignItems: `flex-start`, justifyContent: `space-between` }}>
      <div style={{ flex: 0.3}}>
        <ContactDetail contactRef={contactRef} />
      </div>

      <div style={{ flex: 0.5 }}>
        <ContactForm state={state} setState={setState} onPressSubmitButton={onPressSubmitButton} />
        <div style={{ textAlign: `right`, marginTop: 40 }}>
          <img
            src={sunshineLogoImage}
            alt="sunshine logo"
            style={{ width: 100, filter: `grayscale(100%)` }}
          />
          <span style={{ ...styles.contentBoxText, color: constants.lightest, marginTop: 10}}>
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
