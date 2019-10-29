import React from 'react';
import PropTypes from 'prop-types';
import DefaultBox from './DefaultBox';
import Title from './Title';
// import ContactForm from './ContactForm';
import ContactDetail from './ContactDetail';
// import SocialMedia from './SocialMedia';
// import sunshineLogoImage from '../../images/Sunshine-logo.png';
import { styles, constants } from '../constants';

const Contact = ({ contactRef, state, setState, onPressSubmitButton }) => (
  <div style={{  marginTop: -100 }}>

    <div className="Contact message" style={{ textAlign: `left`}}>
      <Title text="Hi!" />
      <Title text="We’d love to hear from you" />
    </div>

    <DefaultBox className="Contact form container" style={{ marginTop: 60, marginLeft: -27, alignItems: `flex-start`, justifyContent: `space-between` }}>
      <div style={{ flex: 0.3}}>
        <ContactDetail contactRef={contactRef} />
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
