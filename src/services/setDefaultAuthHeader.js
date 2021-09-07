import axios from 'axios';

export default function setDefaultAuthHeader() {
    const { token } = JSON.parse(localStorage.getItem('user-account')) || '';

    if (token) {
        // axios.defaults.headers.common['x-access-token'] = token.replaceAll('"', '');
        axios.defaults.headers.common['x-access-token'] = token.replace(/\"/g, '');

        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    } else {
        axios.defaults.headers.common['x-access-token'] = '';

        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }
}
