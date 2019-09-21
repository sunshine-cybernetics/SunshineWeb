import React from 'react';
import gitlabImage from '../../images/gitlab.svg';
import facebookImage from '../../images/facebook.svg';
import twitterImage from '../../images/twitter.svg';
import instagramImage from '../../images/instagram.svg';
import linkedinImage from '../../images/linkedin.svg';
import { styles } from '../constants';
import DefaultBox from './DefaultBox';

const SocialMedia = () => (
  <DefaultBox
    style={{
      ...styles.defaultBox,
      flexDirection: `column`,
      height: 200,
    }}
  >
    <div style={{ flex: 1 }}>
      <img src={gitlabImage} alt="GitLab" />
    </div>
    <div style={{ flex: 1 }}>
      <img src={facebookImage} alt="Facebook" />
    </div>
    <div style={{ flex: 1 }}>
      <img src={twitterImage} alt="Twitter" />
    </div>
    <div style={{ flex: 1 }}>
      <img src={instagramImage} alt="Instagram" />
    </div>
    <div style={{ flex: 1 }}>
      <img src={linkedinImage} alt="LinkedIn" />
    </div>
  </DefaultBox>
);

export default SocialMedia;
