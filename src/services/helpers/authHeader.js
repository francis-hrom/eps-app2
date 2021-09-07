// TO BE DELETED

export default function authHeader() {
    const { user, token } = JSON.parse(localStorage.getItem('user-account')) || '';

    if (user && token) {
        return { 'x-access-token': token.replaceAll('"', '') };
    } else {
        return {};
    }
}
