import axios from 'axios';
import authHeader from '../services/authHeader';

const { REACT_APP_API } = process.env;

export default function deleteTarget(_id) {
    if (!_id) throw new TypeError(`${_id} is missing.`);

    return (async () => {
        axios.delete(`${REACT_APP_API}/targets/${_id}`, {
            headers: authHeader()
        });
    })();
}
