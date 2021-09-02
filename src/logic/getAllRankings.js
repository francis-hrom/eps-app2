import axios from 'axios';
import authHeader from '../services/authHeader';

const { REACT_APP_API } = process.env;

export default async function getAllRankings() {
    return axios.get(`${REACT_APP_API}/rankings`, { headers: authHeader() });
}
