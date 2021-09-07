import axios from 'axios';

const { REACT_APP_API } = process.env;

export default async function getAllTargets() {
    try {
        const response = await axios.get(`${REACT_APP_API}/targets`);

        return response.data;
    } catch (error) {
        if (error.response) throw new Error(error.response.data);

        throw new Error('Server error. Please contact administrator.');
    }
}
