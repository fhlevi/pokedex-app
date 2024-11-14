import axios from "axios";

export const HTTPClientNonAuth = ({
    url, method = 'GET', data, params, headers, ...rest
}) => {
    const client = axios.create({
        baseURL: `${Service.API}/api`,
        headers: {
            Accept: 'application/json',
            ...headers
        },
        timeout: 120000,
    });

    return client({
        url,
        method,
        data,
        params,
        ...rest
    });
};