import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../constants';
import Subtitle from './Subtitle';

const onClick = href => window.open(href, `_blank`);

const TeamMember = props => {
  const { name, position, github } = props;
  const { teamMemberBox, teamMemberNameText } = styles;

  return (
    <div style={teamMemberBox}>
        <img
            src={require(`../../images/team/${name.split(` `).join(`-`)}.jpg`)}
            alt={name}
            style={{ borderRadius: 16, filter: `grayscale(90%)`, width: 255, hight: 255, cursor: `pointer` }}
            onClick={() => onClick(github)}
          />

      <div style={{ marginTop: 7 }}>
        <span style={teamMemberNameText}>{name}</span>
      </div>
      <div>
        <Subtitle
          text={position}
          style={{ fontFamily: 'Poppins', textTransform: `captalize`, fontSize: 16, marginTop: 10}}
        />
      </div>
      
      
    </div>
  );
};

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  image: PropTypes.string,
  github: PropTypes.string.isRequired
};

export default TeamMember;
