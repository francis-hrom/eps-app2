import axios from 'axios';
import validUrl from 'valid-url';

const { REACT_APP_API } = process.env;

export default function findSelector(url, textArr) {
    if (typeof url !== 'string') throw new TypeError(`${url} is not a string`);
    if (!validUrl.isUri(url)) throw new TypeError(`${url} is not a valid URL.`);
    if (!Array.isArray(textArr)) throw new TypeError(`${textArr} is not a array`);

    return (async () => {
        try {
            const response = await axios.post(`${REACT_APP_API}/scrape/find-selector`, {
                url,
                textArr
            });

            return response.data;
        } catch (error) {
            if (error.response) throw new Error(error.response.data);

            throw new Error('Server error. Please contact administrator.');
        }
    })();
}
