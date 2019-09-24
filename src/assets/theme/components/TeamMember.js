import React from 'react';
import PropTypes from 'prop-types';
import { styles, constants } from '../constants';
import Subtitle from './Subtitle';

const TeamMember = props => {
  const { name, position, image, resume } = props;
  const { teamMemberBox, teamMemberNameText, teamMemberResume } = styles;

  return (
    <div style={teamMemberBox}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div style={{ width: 255, height: 255 }}>
            <div className="flip-card-front">
              <img src={image} alt={name} style={{ borderRadius: 16, filter: `grayscale(90%)` }} />
            </div>
            <div
              className="flip-card-back"
              style={{
                ...styles.defaultBox,
                backgroundColor: constants.primary,
                textAlign: `left`,
              }}
            >
              <span style={teamMemberResume}>{resume}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: 16 }}>
        <span style={teamMemberNameText}>{name}</span>
      </div>
      <div>
        <Subtitle
          text={position}
          style={{ fontWeight: `bold`, textTransform: `captalize`, fontSize: 16 }}
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
