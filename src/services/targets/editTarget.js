import axios from 'axios';

const { REACT_APP_API } = process.env;

export default function editTarget(id, selector) {
    if (typeof id !== 'string') throw new Error(`${id} is not a string.`);
    if (typeof selector !== 'string') throw new TypeError(`${selector} is not a string`);

    return (async () => {
        try {
            const response = await axios.patch(`${REACT_APP_API}/targets/${id}`, { selector });

            return response.data;
        } catch (error) {
            if (error.response) throw new Error(error.response.data);

            throw new Error('Server error. Please contact administrator.');
        }
    })();
}
