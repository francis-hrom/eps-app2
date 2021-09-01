import axios from 'axios';
import authHeader from '../services/authHeader';

const API_URL = process.env.REACT_APP_API;

export default async function getSelector(url, textArr) {
    return axios.post(
        API_URL + '/scrape/find-selector',
        {
            url,
            textArr
        },
        { headers: authHeader() }
    );
}
