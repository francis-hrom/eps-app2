import axios from 'axios';
import validUrl from 'valid-url';

const API_URL = process.env.REACT_APP_API;

export default function scanRankings(url, selector) {
    if (typeof url !== 'string') throw new TypeError(`${url} is not a string`);
    if (!validUrl.isUri(url)) throw new TypeError(`${url} is not a valid URL.`);
    if (typeof selector !== 'string') throw new TypeError(`${selector} is not a string`);

    return (async () => {
        try {
            const response = await axios.post(`${API_URL}/scrape/scan-rankings`, { url, selector });

            return response.data;
        } catch (error) {
            if (error.response) throw new Error(error.response.data);

            throw new Error('Server error. Please contact administrator.');
        }
    })();
}
