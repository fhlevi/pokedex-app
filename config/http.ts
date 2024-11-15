import { IHTTPClientNonAuth } from '@/types/http';
import axios from 'axios';

export const HTTPClientNonAuth = ({
  url,
  method = 'GET',
  data,
  params,
  headers,
  ...rest
}: IHTTPClientNonAuth) => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_HOST,
    headers: {
      Accept: 'application/json',
      ...headers,
    },
    timeout: 120000,
  });

  return client({
    url,
    method,
    data,
    params,
    ...rest,
  });
};
