import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';
import sunshineLogo from '../../images/Sunshine-logo.png';
import headerBg from '../../images/header-bg.png';
import mainImage from '../../images/main-image.png';
import Menu from './Menu';
import Title from './Title';

const Header = ({ onPressMenuItem, teamRef, aboutRef, contactRef }) => (
  <div style={styles.header}>
    <div style={styles.headerLeftSideBox}>
      <img src={sunshineLogo} alt="sunshine logo" style={{ width: 300 }} />
      <div style={{ flex: 1.3, marginTop: `40%`, marginLeft: `4.78%` }}>
        <Title text="Our best machines are made of Sunshine" />
        <p style={{ color: constants.lightest }}>
          We are part of the team building Moonad: a Peer-to-Peer Formal Operating System
        </p>
      </div>
    </div>
    <div style={{ ...styles.headerRightSideBox, backgroundImage: `url(${headerBg})` }}>
      <Menu
        onPressMenuItem={onPressMenuItem}
        teamRef={teamRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div style={styles.headerBackgroundImageContainer}>
        <div style={{ ...styles.headerBackgroundImageBox, backgroundImage: `url(${mainImage})` }} />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  onPressMenuItem: PropTypes.func.isRequired,
  teamRef: PropTypes.shape({}).isRequired,
  aboutRef: PropTypes.shape({}).isRequired,
  contactRef: PropTypes.shape({}).isRequired,
};

export default Header;
