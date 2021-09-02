import axios from 'axios';
import validUrl from 'valid-url';
import authHeader from '../services/authHeader';

const { REACT_APP_API } = process.env;

export default function addTarget(url, selector) {
    if (typeof url !== 'string') throw new TypeError(`${url} is not a string`);
    if (!validUrl.isUri(url)) throw new TypeError(`${url} is not a valid URL.`);
    if (typeof selector !== 'string') throw new TypeError(`${selector} is not a string`);

    return (async () => {
        axios.post(`${REACT_APP_API}/targets`, { url, selector }, { headers: authHeader() });
    })();
}
