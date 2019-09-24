/* eslint-disable jsx-a11y/img-redundant-alt */
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
    <div class='Header elements' style={{display: 'flex', flexDirection: 'row', justifyContent: `space-between`}}> 
        <img src={sunshineLogo} alt="sunshine logo" style={styles.headerLogo} />
        <Menu
          onPressMenuItem={onPressMenuItem}
          teamRef={teamRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
      </div>

    <div class='Header content' style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
      <div style={{flexDirection: 'column', alignContent: 'center', justifyContent: 'center', marginTop: `15.00%`, 
                    width: 500}}> 
          <Title text="Our best machines are made of Sunshine"/>
          <div style={{color: constants.lightest, fontSize: 18}}>
            We are part of the team building Moonad: a Peer-to-Peer Formal Operating System
          </div>
      </div>
      <div style={{width: 700}}>
        <img src={mainImage} alt="header main image" 
        style={{width: `auto`, height: `auto`, maxWidth: `100%`, maxHeight: `100%`}}/>
      </div>
    </div> 

    
    

    {/* <div style={styles.headerLeftSideBox}>
      <img src={sunshineLogo} alt="sunshine logo" style={styles.headerLogo} />
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
    </div> */}
  </div>
);

Header.propTypes = {
  onPressMenuItem: PropTypes.func.isRequired,
  teamRef: PropTypes.shape({}).isRequired,
  aboutRef: PropTypes.shape({}).isRequired,
  contactRef: PropTypes.shape({}).isRequired,
};

export default Header;
