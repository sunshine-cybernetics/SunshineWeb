import React, { useRef, useState } from 'react';
import HomeComponent from '../components/HomeComponent';
import { menu } from '../../mocks';
import api from '../../services/telegrambot';
import { constants } from '../../assets/theme/constants';

const onPressMenuItem = ref => window.scrollTo(0, ref.current.offsetTop);

const onPressSubmitButton = ({ state, setState, INITIAL_STATE }) => {
  const { name, surname, email, message } = state;
  const useMethod = `sendMessage?chat_id=${constants.TELEGRAM_BOT_DEFAULT_CHAT_ID}&text=`;
  const useData = `<b>Name:</b> ${name} \n<b>Surname:</b> ${surname} \n<b>Email:</b> ${email} \n<b>Message:</b> ${message}`;

  api
    .get(encodeURI(`${useMethod}${useData}&parse_mode=html`))
    .then(() => setState({ ...INITIAL_STATE }));
};

const HomeContainer = () => {
  const teamRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const INITIAL_STATE = { surname: ``, name: ``, email: ``, message: ``, textAreaHeight: 30 };
  const [state, setState] = useState(INITIAL_STATE);

  return (
    <HomeComponent
      menuData={menu}
      teamRef={teamRef}
      aboutRef={aboutRef}
      contactRef={contactRef}
      state={state}
      setState={setState}
      onPressSubmitButton={() => onPressSubmitButton({ state, setState, INITIAL_STATE })}
      onPressMenuItem={ref => onPressMenuItem(ref)}
    />
  );
};

export default HomeContainer;
