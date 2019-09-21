import React from 'react';
import PropTypes from 'prop-types';
import { constants, styles } from '../../assets/theme/constants';
import teambgImage from '../../assets/images/bg-team-sunshine.svg';
import contactsImage from '../../assets/images/contact-us-bg.png';
import Title from '../../assets/theme/components/Title';
import Advisors from '../../assets/theme/components/Advisors';
import DefaultBox from '../../assets/theme/components/DefaultBox';
import Team from '../../assets/theme/components/Team';
import { teamMembers } from '../../mocks';
import Sponsors from '../../assets/theme/components/Sponsors';
import Contact from '../../assets/theme/components/Contact';
import Projects from '../../assets/theme/components/Projects';
import Header from '../../assets/theme/components/Header';

const contactStyles = {
  marginTop: 80,
  paddingBottom: 200,
  position: `relative`,
  display: `flexbox`,
};

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
    <div className="App" style={{ backgroundColor: constants.appBackgroundColor }}>
      <Header
        onPressMenuItem={onPressMenuItem}
        teamRef={teamRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
    </div>
    <Projects aboutRef={aboutRef} />
    <div style={styles.centeredContainer}>
      <Title text="Our Advisors" />
    </div>
    <DefaultBox style={{ marginTop: 40 }}>
      <Advisors />
    </DefaultBox>
    <DefaultBox background={teambgImage} backgroundSize="sretch">
      <Team members={teamMembers} teamRef={teamRef} />
    </DefaultBox>
    <DefaultBox style={{ marginTop: 40 }}>
      <Sponsors />
    </DefaultBox>
    <div ref={contactRef}>
      <DefaultBox style={contactStyles} background={contactsImage} backgroundSize="contain">
        <Contact
          contactRef={contactRef}
          state={state}
          setState={setState}
          onPressSubmitButton={onPressSubmitButton}
        />
      </DefaultBox>
    </div>
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
