import React from 'react';
import gitlabImage from '../../images/gitlab.svg';
import facebookImage from '../../images/facebook.svg';
import twitterImage from '../../images/twitter.svg';
import instagramImage from '../../images/instagram.svg';
import linkedinImage from '../../images/linkedin.svg';
import telegramImage from '../../images/telegram.png';
import githubImage from '../../images/github.png';
import { styles } from '../constants';
import DefaultBox from './DefaultBox';

const onClick = href => window.open(href, `_blank`);

const SocialMedia = () => (
  <DefaultBox
    style={{
      ...styles.defaultBox,
      flexDirection: `column`,
      height: 100,
    }}
  >
    <div style={{ flex: 1, cursor: `pointer`, height: 40}}>
      <img src={githubImage} alt="Github" onClick={() => onClick(`http://github.com/moonad`)} style={{width: 40, height: 40}}/>
    </div>
    <div style={{ flex: 1, cursor: `pointer`, height: 40 }}>
      <img src={telegramImage} alt="Telegram" onClick={() => onClick(`t.me/formality-lang`)} style={{width: 27, height: 27}}/>
    </div>
    {/* <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={twitterImage} alt="Twitter" onClick={() => onClick(`https://twitter.com`)} />
    </div>
    <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={instagramImage} alt="Instagram" onClick={() => onClick(`https://instagram.com`)} />
    </div>
    <div style={{ flex: 1, cursor: `pointer` }}>
      <img src={linkedinImage} alt="LinkedIn" onClick={() => onClick(`https://linkedin.com`)} />
    </div> */}
  </DefaultBox>
);

export default SocialMedia;
