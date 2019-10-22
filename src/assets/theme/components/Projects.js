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

const Projects=({ aboutRef }) => (
  <>
    <div style={styles.centeredContainer} ref={aboutRef}>
      <div style={{ flex: 0.3 }}>
        <Subtitle text="projects" />
        <Title text="Check it out our work" />
        <span style={{ color: constants.light }}>
          Follow us on
          {` `}
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/moonad" style={{ color: constants.primary }}>
            Github
            {` `}
          </a>
          <span style={{ color: constants.primary, display: `inline` }}>→</span>
        </span>
      </div>
    </div>
    <div style={styles.centeredContainer}>

      <ContentBox
        textItem="Moonad"
        textBox="We are part of the team developing Moonad, an open-source project of a Peer-to-Peer Formal Operating System."
        href="https://github.com/moonad"
      >
        <CircledBox>
          <img src={moonadImage} alt="Moonad" style={{ width: 80, height: `auto` }} />
        </CircledBox>
      </ContentBox>

      <ContentBox
        textItem="Formality"
        textBox="It started as a research project inside the Ethereum Foundation then Sunshine Cybernetics founded the team to finish the language. Today it is maintained by Sunshine Cybernetics team inside Moonad's project."
        href="https://github.com/moonad/Formality"
      >
        <CircledBox>
          <img src={formalityImage} alt="Formality" style={{ width: 45 }} />
        </CircledBox>
      </ContentBox>
      
    </div>
  </>
);

Projects.propTypes={
  aboutRef: PropTypes.shape({}).isRequired,
};

export default Projects;
