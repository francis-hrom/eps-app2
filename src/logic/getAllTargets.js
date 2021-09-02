import axios from 'axios';
import authHeader from '../services/authHeader';

const { REACT_APP_API } = process.env;

export default async function getAllTargets() {
    return axios.get(`${REACT_APP_API}/targets`, { headers: authHeader() });
}
