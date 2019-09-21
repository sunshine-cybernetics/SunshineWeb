import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from './ContentBox';
import moonadImage from '../../images/Moonad.png';
import formalityImage from '../../images/Formality.png';
import kaelinImage from '../../images/Kaelin.png';
import CircledBox from './CircledBox';
import { constants, styles } from '../constants';
import Subtitle from './Subtitle';
import Title from './Title';

const Projects = ({ aboutRef }) => (
  <>
    <div style={styles.centeredContainer} ref={aboutRef}>
      <div style={{ flex: 0.3 }}>
        <Subtitle text="projects" />
        <Title text="Check it out our work" />
        <p style={{ color: constants.light }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <span style={{ color: constants.light }}>
          Follow us on
          {` `}
          <a href="./teste" style={{ color: constants.primary }}>
            GitLab
            {` `}
          </a>
          <span style={{ color: constants.primary, display: `inline` }}>→</span>
        </span>
      </div>
    </div>
    <div style={styles.centeredContainer}>
      <ContentBox
        textItem="Moonad"
        textBox="We are part of the team developing Moonad, an open-source 
project of a Peer-to-Peer Formal Operating System."
      >
        <CircledBox>
          <img src={moonadImage} alt="Moonad" style={{ width: `100%`, height: `auto` }} />
        </CircledBox>
      </ContentBox>
      <ContentBox
        textItem="Formality"
        textBox="It started as a research project inside the Ethereum Foundation then Sunshine Cybernetics founded the team to finish the language. Today it is maintained by Sunshine Cybernetics team inside Moonad's project."
      >
        <CircledBox>
          <img src={formalityImage} alt="Formality" style={{ width: 51, height: `auto` }} />
        </CircledBox>
      </ContentBox>
      <ContentBox
        textItem="Kaelin"
        textBox="A simple, blockhain-enabled MOBA game implemented in Formality."
        isActive
      >
        <CircledBox>
          <img src={kaelinImage} alt="Kaelin" style={{ width: 51, height: `auto` }} />
        </CircledBox>
      </ContentBox>
    </div>
  </>
);

Projects.propTypes = {
  aboutRef: PropTypes.shape({}).isRequired,
};

export default Projects;
