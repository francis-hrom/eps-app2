import axios from 'axios';
import authHeader from '../services/authHeader';

const { REACT_APP_API } = process.env;

export default function deleteTarget(_id) {
    if (typeof _id !== 'string') throw new TypeError(`${_id} is missing.`);

    return axios.delete(`${REACT_APP_API}/targets/${_id}`, {
        headers: authHeader()
    });
}
