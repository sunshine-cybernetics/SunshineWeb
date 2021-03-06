import React from 'react';
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
      <img src={githubImage} alt="Github" onClick={() => onClick(`http://github.com/moonad`)} style={{width: 40, height: 40}} />
    </div>
    <div style={{ flex: 1, cursor: `pointer`, height: 40 }}>
      <img src={telegramImage} alt="Telegram" onClick={() => onClick(`t.me/formality-lang`)} style={{width: 27, height: 27}} />
    </div>
  </DefaultBox>
);

export default SocialMedia;
