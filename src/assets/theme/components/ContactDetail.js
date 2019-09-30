import React from 'react';
import DefaultBox from './DefaultBox';
import { constants, styles } from '../constants';

const ContactDetail = () => (
  <DefaultBox class="Contact Detail" style={{ justifyContent: `flex-start`, width: 350 }}>
    <DefaultBox class="Contact detail title"style={{ transform: `rotate(-90deg)`, flex: 0.3 }}>
      <span style={styles.contactDetailTitle}>Contact</span>
    </DefaultBox>
    
    <div style={{ flex: 0.6, marginLeft: -10 }}>
      <span style={{ ...styles.contactDetailTitle, ...styles.contactDetailText }}>
        We work remotely!
        <span style={{ color: constants.lightning }}>currently on USA and Brazil</span>
      </span>
    </div>
  </DefaultBox>
);

export default ContactDetail;
