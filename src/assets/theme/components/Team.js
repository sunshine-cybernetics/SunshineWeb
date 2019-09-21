import React from 'react';
import PropTypes from 'prop-types';
import Subtitle from './Subtitle';
import Title from './Title';
import TeamMember from './TeamMember';
import DefaultBox from './DefaultBox';

const renderTeamMembers = members => (
  <DefaultBox>
    {members.map(member => {
      const { name, position, image, resume } = member;

      return (
        <div key={Math.random()}>
          <TeamMember name={name} position={position} image={image} resume={resume} />
        </div>
      );
    })}
  </DefaultBox>
);

const Team = ({ members, teamRef }) => (
  <div style={{ marginTop: 40, marginBottom: 140, textAlign: `center` }} ref={teamRef}>
    <div style={{ paddingBottom: 70, marginTop: 80 }}>
      <Subtitle text="the superheros" />
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
      image: PropTypes.string.isRequired,
      resume: PropTypes.string.isRequired,
    }),
  ).isRequired,
  teamRef: PropTypes.shape({}).isRequired,
};

export default Team;
