import axios from 'axios';
import validUrl from 'valid-url';
import authHeader from '../services/authHeader';

const { REACT_APP_API } = process.env;

export default function editTarget(_id, selector) {
    if (!_id) throw new TypeError(`${_id} is missing.`);
    if (typeof selector !== 'string') throw new TypeError(`${selector} is not a string`);

    return (async () => {
        axios.patch(`${REACT_APP_API}/targets/${_id}`, { selector }, { headers: authHeader() });
    })();
}
