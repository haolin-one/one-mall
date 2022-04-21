let BASE_URL = '';
const TIME_OUT = 10000;

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://192.168.75.130:7776';
} else if (process.env.NODE_ENV === 'test') {
  BASE_URL = '';
}

export { BASE_URL, TIME_OUT };
