import api from './api';
import axios from 'axios';

// const setAuthToken = (token) => {
//   if (token) {
//     api.defaults.headers.common['x-auth-token'] = token;
//     localStorage.setItem('token', token);
//   } else {
//     delete api.defaults.headers.common['x-auth-token'];
//     localStorage.removeItem('token');
//   }
// };

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete api.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
