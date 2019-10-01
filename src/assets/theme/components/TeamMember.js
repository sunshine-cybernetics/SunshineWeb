import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';
import Subtitle from './Subtitle';

const TeamMember = props => {
  const { name, position, image, resume } = props;
  const { teamMemberBox, teamMemberNameText, teamMemberResume } = styles;

  return (
    <div style={teamMemberBox}>
        <img
            src={require(`../../images/team/${name.split(` `).join(`-`)}.jpg`)}
            alt={name}
            style={{ borderRadius: 16, filter: `grayscale(90%)`, width: 255, hight: 255 }}
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
  image: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
};

export default TeamMember;
