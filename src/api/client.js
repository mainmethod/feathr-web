import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

export const getClient = () => {
    return axios.create({
        baseURL,
        headers: {
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    });
};
