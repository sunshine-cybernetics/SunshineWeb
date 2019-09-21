import { create } from 'apisauce';
import { constants } from '../assets/theme/constants';

const api = create({
  baseURL: `${constants.TELEGRAM_BOT_API_URL}/${constants.TELEGRAM_BOT_API_KEY}/`,
});

// api.addAsyncRequestTransform(request => async () => {
//   const token = await AsyncStorage.getItem(`@omnix:token`);

//   if (token) {
//     request.headers.Authorization = `Bearer ${token}`;
//   }
// });

api.addResponseTransform(response => {
  if (!response.ok) throw response;
});

export default api;
