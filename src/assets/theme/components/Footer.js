import React from 'react';
import Title from './Title';
import { styles, constants } from '../constants';
import footerImage from '../../images/footer-bg.png';
import DefaultBox from './DefaultBox';
import ContactDetail from './ContactDetail';

const Footer = () => (
  <DefaultBox className="Footer container" style={{...styles.centeredContainer, height: 400, marginTop: 100, paddingBottom: 30}}>
    <div style={{height: 400, marginRight: -200}}> 
      <img src={footerImage} alt='footer background' style={{height: 400}} />
      <div style={{marginTop: -360, marginLeft: 80}}>
        <ContactDetail/>
      </div>
    </div>

    <div className="Footer message" style={{ textAlign: `left`, marginLeft: -200, marginTop: -40}}>
      <Title text="Hi!" />
      <Title text="We’d love to hear from you" />

      <p style={{...styles.contentBoxText, color: constants.lightest, fontSize: 18, marginTop: 20}}> contact@sunshinecybernetics.com</p>

      <span style={{ ...styles.contentBoxText, color: constants.lightest, marginTop: 110}}>
        © 2019 Sunshine Cybernetics
      </span>
    </div>

  </DefaultBox>
);


export default Footer;