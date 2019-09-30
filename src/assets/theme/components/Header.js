/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';
import sunshineLogo from '../../images/Sunshine-logo.png';
import mainImage from '../../images/main-image.png';
import Menu from './Menu';
import Title from './Title';

const link = `https://warwick.ac.uk/fac/arts/english/currentstudents/undergraduate/modules/fictionnownarrativemediaandtheoryinthe21stcentury/manifestly_haraway_----_a_cyborg_manifesto_science_technology_and_socialist-feminism_in_the_....pdf`;

const Header = ({ onPressMenuItem, teamRef, aboutRef, contactRef }) => (
  <div style={styles.header}>
   {/* Left Side */}
   <div class="HeaderLeft" style={styles.headerLeftSideBox}>
      <img src={sunshineLogo} alt="sunshine logo" style={styles.headerLogo} />

      <div style={{ marginTop: `30%` }}>
        <Title text="Our best machines are made of Sunshine" />
        <p style={{ color: constants.lightest }}>
          We are part of the team building Moonad: a Peer-to-Peer Formal Operating System
        </p>
      </div>
    </div>
  {/* Right side */}
    <div class="HeaderRight" style={{ ...styles.headerRightSideBox, backgroundImage: `url(${headerBg})` }}>
      <Menu
        onPressMenuItem={onPressMenuItem}
        teamRef={teamRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <div style={styles.headerBackgroundImageContainer}>
        {/* <div style={{ ...styles.headerBackgroundImageBox, backgroundImage: `url(${mainImage})` }} /> */}
        <img src={mainImage} alt="header main image" 
        style={{width: `auto`, height: `auto`, maxWidth: `70%`, maxHeight: `70%`, marginTop: 40, marginLeft: 130}}/>
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
