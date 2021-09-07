import axios from 'axios';

const { REACT_APP_API } = process.env;

export default async function resetTargets() {
    try {
        const response = await axios.post(`${REACT_APP_API}/targets/reset-to-default-data`);

        return response.data;
    } catch (error) {
        if (error.response) throw new Error(error.response.data);

        throw new Error('Server error. Please contact administrator.');
    }
}
