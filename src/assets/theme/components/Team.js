import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import TeamMember from './TeamMember';
import DefaultBox from './DefaultBox';

const renderTeamMembers = members => (
  <DefaultBox style={{marginRight: 165, marginLeft: 165}}>
    {members.map(member => {
      const { name, position, image, github } = member;

      return (
        <div key={Math.random()}>
          <TeamMember name={name} position={position} image={image} github={github} />
        </div>
      );
    })}
  </DefaultBox>
);

const Team = ({ members, teamRef }) => (
  <div style={{ width:"100%", marginTop: 40, marginBottom: 140, textAlign: `center` }} ref={teamRef}>
    <div style={{ paddingBottom: 70, marginTop: 80 }}>
      <Title text="Meet our team" />
    </div>
    {renderTeamMembers(members.slice(0, 4))}
    {members && members.length > 3 && renderTeamMembers(members.slice(4, members.size))}
  </div>
);

Team.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      image: PropTypes.string
    }),
  ).isRequired,
  teamRef: PropTypes.shape({}).isRequired,
};

export default Team;
