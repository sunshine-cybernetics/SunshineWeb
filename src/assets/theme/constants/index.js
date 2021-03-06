/* eslint-disable no-undef */
export const constants = {
  TELEGRAM_BOT_API_URL: `https://api.telegram.org`,
  TELEGRAM_BOT_API_KEY: `bot983779485:AAEQscM_Lbr8XLTxD15BqhvG5aJPxjm7iFQ`,
  TELEGRAM_BOT_DEFAULT_CHAT_ID: `-250860124`,
  appBackgroundColor: `#F2F2F2`,
  primary: `#D96150`,
  primaryLight: `#F28272`,
  cyan: `#00AA9B`,
  secondary: `#393C40`,
  darkLighted: `#D6D6D6`,
  lightning: `#A0A1A3`,
  lightest: `#7F8386`,
  lighter: `#E4E4E4`,
  light: `#515357`,
  white: `#fff`,
  minWidth: 1280,
};

export const styles = {
  h3: {
    fontFamily: 'Poppins-Bold',
    color: constants.secondary,
    opacity: 0.87,
    fontSize: 36,
  },
  h5: {
    lineHeight: 0.2,
    textAlign: `center`,
    textTransform: `uppercase`,
    fontFamily: 'Poppins-Medium'
  },
  header: {
    display: `flex`,
    justifyContent: `flex-start`,
    flexDirection: `row`,
    height: 650,
    marginRight: 164, 
    marginLeft: 164
  },
  headerLeftSideBox: {
    flex: 0.5,
    alignContent: `flex-end`,
    justifyContent: `flex-end`,
  },
  headerRightSideBox: {
    flex: 1,
    backgroundSize: `contain`,
    backgroundRepeat: `no-repeat`,
    marginRight: -164,
    marginTop: -20,
    marginLeft: -130,
    justifyContent: `flex-start`,
  },
  headerBackgroundImageContainer: {
    width: `100%`,
    alignItems: `flex-end`,
    display: `flex`,
  },
  headerBackgroundImageBox: {
    // backgroundSize: `90%`,
    backgroundRepeat: `no-repeat`,
    // flex: 1,
    // marginTop: 40,
    // marginLeft: 100,
    // minHeight: 700,
  },
  menu: {
    display: `flex`,
    alignItems: `flex-start`,
    justifyContent: `flex-start`,
    marginTop: 100,
    marginLeft: 400
  },
  menuButton: {
    fontStyle: `normal`,
    fontWeight: 500,
    fontSize: 20,
    display: `flex`,
    alignItems: `center`,
    letterSpacing: `0.7px`,
    textTransform: `lowercase`,
    textDecoration: `none`,
    marginLeft: 25,
    cursor: `pointer`,
    color: constants.secondary,
  },
  centeredContainer: {
    display: `flex`,
    justifyContent: `center`,
    textAlign: `center`,
    marginTop: 50,
    minWidth: constants.minWidth,
  },
  contentBox: {
    width: 320,
    height: 220,
    borderRadius: 32,
    justifyContent: `center`,
    alignItems: `center`,
    alignContent: `center`,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 26,
  },
  contentBoxTextItem: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
  },
  contentBoxText: {
    fontSize: 16,
    fontStyle: `normal`,
    fontWeight: `normal`,
    color: constants.light,
  },
  circledBox: {
    width: 109,
    height: 109,
    borderRadius: `100%`
  },
  defaultBox: {
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    textAlign: `cover`,
    backgroundRepeat: `no-repeat`,
  },
  defaultButton: {
    borderWidth: 0,
    borderRadius: 4,
    marginTop: 40,
    backgroundColor: constants.cyan,
    textAlign: `center`,
    width: 126,
    letterSpacing: 0.285714,
    fontSize: 16,
    fontWeight: `normal`,
    color: constants.white,
    height: 50,
    opacity: 0.87,
    cursor: `pointer`,
  },
  retangleBox: {
    backgroundColor: constants.lighter,
    borderRadius: 26,
    width: 255,
    height: 102,
  },
  advisorsTitleAndCompany: {
    color: constants.light,
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
  teamMemberBox: {
    textAlign: `center`,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 40
  },
  teamMemberNameText: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: constants.light,
    marginTop: 22
  },
  teamMemberResume: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    fontSize: 15,
  },
  textInput: {
    backgroundColor: `inherit`,
    display: `block`,
    marginTop: 20,
    paddingBottom: 10,
  },
  textInputLabel: {
    display: `block`,
    float: `left`,
    fontWeight: `normal`,
    color: constants.secondary,
    opacity: 0.87,
  },
  contactDetailTitle: {
    borderBottom: `1px solid ${constants.lightning}`,
    paddingBottom: 7,
    color: constants.lightning,
    letterSpacing: `2.4px`,
    textTransform: `uppercase`,
    fontSize: 12,
    fontFamily: 'Poppins-Medium'
  },
  contactDetailText: {
    borderBottom: `none`,
    color: constants.cyan,
    textTransform: `none`,
    fontFamily: 'Poppins-Medium',
    textAlign: 'left'
  },
  headerLogo: {
    maxWidth: `30%`,
    maxHeight: `30%`,
    marginTop: 100
  },
  headerContainer: {
    width: '100%',
    height: 650,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `flext-start`,
    minWidth: constants.minWidth,
  }, 
  footer: {
    display: `flex`,
    justifyContent: `center`,
    textAlign: `center`,
    flexDirection: `column`,
    marginTop: 100,
    marginBottom: 50,
    minWidth: constants.minWidth,
    height: 400
  }
};
