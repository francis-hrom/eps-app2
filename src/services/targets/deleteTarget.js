import axios from 'axios';

const { REACT_APP_API } = process.env;

export default function deleteTarget(id) {
    if (typeof id !== 'string') throw new TypeError(`${id} is not a string.`);

    return (async () => {
        try {
            const response = await axios.delete(`${REACT_APP_API}/targets/${id}`);

            return response.data;
        } catch (error) {
            if (error.response) throw new Error(error.response.data);

            throw new Error('Server error. Please contact administrator.');
        }
    })();
}
