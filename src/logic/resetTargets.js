import axios from 'axios';
import authHeader from '../services/authHeader';

const { REACT_APP_API } = process.env;

export default async function resetTargets() {
    return axios.post(`${REACT_APP_API}/targets/reset-to-default-data`, {}, { headers: authHeader() });
}
