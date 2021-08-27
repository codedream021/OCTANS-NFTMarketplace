import axios, { AxiosError, AxiosTransformer } from 'axios';
import qs from 'query-string';
import { decamelizeKeys, camelizeKeys } from 'humps';
import { store } from 'App';

const baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('token');
console.log({token})
const defaultTransformers = (
  transformRequest?: AxiosTransformer | AxiosTransformer[]
): AxiosTransformer[] => {
  if (!transformRequest) {
    return [];
  }
  if (transformRequest instanceof Array) {
    return transformRequest;
  }

  return [transformRequest];
};

const api = axios.create({
  baseURL,
  headers: {
    ...(true && { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoxLCJleHAiOjE2NjE1MDA3NDUsInN1YiI6ImIyZGYyZmY5LWMwZWItNGIyNy00M2U4LTNlYTRkMzViNWIxMSJ9.nFvZoYgtEN9e6dFN6rd5anSS23fSaV-8mNDq3cavirU` }),
  },
  transformRequest: [
    (data: any): unknown => {
      if (data instanceof FormData) {
        return data;
      }
      return decamelizeKeys(data, { split: /(?=[A-Z0-9])/ });
    },
    ...defaultTransformers(axios.defaults.transformRequest),
  ],
  transformResponse: [
    ...defaultTransformers(axios.defaults.transformResponse),
    (data: any): unknown => {
      return camelizeKeys(data);
    },
  ],
  paramsSerializer: (params) =>
    qs.stringify(decamelizeKeys(params), {
      skipEmptyString: true,
      skipNull: true,
    }),
});

api.interceptors.response.use(
  async function (config) {
    return config;
  },
  function (error: AxiosError) {
    if (!error.response) {
      return Promise.reject(error);
    }
    const {
      response: { status },
    } = error;

    if (status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('account');
      store.metamaskStore.reset();
    }
    return Promise.reject(error);
  }
);

export function setTokenHeader(token: string) {
  const storedToken = localStorage.getItem('token');

  if (!token && !storedToken) {
    return;
  }

  api.defaults.headers.common.Authorization = `Bearer ${token || storedToken}`;
  api.defaults.headers.Authorization = `Bearer ${token || storedToken}`;
}

export default api;
