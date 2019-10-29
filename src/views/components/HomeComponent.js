import React from 'react';
import PropTypes from 'prop-types';
import { constants, styles } from '../../assets/theme/constants';
import teambgImage from '../../assets/images/bg-team-sunshine.svg';
import Title from '../../assets/theme/components/Title';
import Advisors from '../../assets/theme/components/Advisors';
import DefaultBox from '../../assets/theme/components/DefaultBox';
import Team from '../../assets/theme/components/Team';
import { teamMembers } from '../../mocks';
import Sponsors from '../../assets/theme/components/Sponsors';
import Projects from '../../assets/theme/components/Projects';
import Header from '../../assets/theme/components/Header';
import Footer from '../../assets/theme/components/Footer';

const HomeComponent = ({
  teamRef,
  aboutRef,
  contactRef,
  onPressMenuItem,
  state,
  setState,
  onPressSubmitButton,
}) => (
  <>
    {/* Header  */}
    <div className="Header" style={{...styles.headerContainer, backgroundColor: constants.appBackgroundColor}}>
      <Header
        onPressMenuItem={onPressMenuItem}
        teamRef={teamRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
    </div>
    {/* Projects  */}
    <Projects aboutRef={aboutRef} />
    {/* Advisors  */}
    <div style={styles.centeredContainer}>
      <Title text="Our Advisors" />
    </div>
    <DefaultBox style={{ marginTop: 40, minWidth: constants.minWidth}}>
      <Advisors />
    </DefaultBox>
    {/* Team  */}
    <DefaultBox className="Team" background={teambgImage} backgroundSize="cover" style={{minWidth: constants.minWidth, width: '100%'}}>
      <Team members={teamMembers} teamRef={teamRef} />
    </DefaultBox>
    {/* Sponsors  */}
    <DefaultBox style={{ marginTop: 40, minWidth: constants.minWidth }}>
      <Sponsors />
    </DefaultBox>
    {/* Footer  */}
    <Footer/>
  </>
);

HomeComponent.propTypes = {
  onPressMenuItem: PropTypes.func.isRequired,
  aboutRef: PropTypes.shape({}).isRequired,
  teamRef: PropTypes.shape({}).isRequired,
  contactRef: PropTypes.shape({}).isRequired,
  state: PropTypes.shape({}).isRequired,
  setState: PropTypes.func.isRequired,
  onPressSubmitButton: PropTypes.func.isRequired,
};
export default HomeComponent;
