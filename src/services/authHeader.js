export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('datta-account'));

    if (user && user.token) {
        return { 'x-access-token': user.token.replaceAll('"', '') };
    } else {
        return {};
    }
}
