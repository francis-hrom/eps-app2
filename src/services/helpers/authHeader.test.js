import authHeader from './authHeader';

// const fakeLocalStorage = (() => {
//     const value = JSON.stringify({
//         token: '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjEyN2MxZGViM2ZjODEzZDZjNTVjZTIwIiwiZW1haWwiOiJhZGFAbG92ZWxhY2UudGVzdCIsImlhdCI6MTYzMDkzMTE1MCwiZXhwIjoxNjMxNTM1OTUwfQ.jG8SAheifrL7zWS5PKtyPxYsCnYx7c_fA4TSwln6qrM"',
//         isLoggedIn: 'true',
//         isInitialized: 'true',
//         user: '{"email":"ada@lovelace.test","password":"$2a$10$j95TM0xWVcey.EbLEm4KC.7FtfAqGUcr1SgsZLRlDkevV894UQ77G","id":"6127c1deb3fc813d6c55ce20"}',
//         _persist: '{"version":-1,"rehydrated":true}'
//     });
//     let store = { 'user-account': value };

//     return {
//         getItem: function (key) {
//             return store[key] || null;
//         },
//         setItem: function (key, value) {
//             store[key] = value.toString();
//         },
//         removeItem: function (key) {
//             delete store[key];
//         },
//         clear: function () {
//             store = {};
//         }
//     };
// })();
// const fakeLocalStorage = (function () {
//     let store = {};

//     return {
//         getItem: function (key) {
//             return store[key] || null;
//         },
//         setItem: function (key, value) {
//             store[key] = value.toString();
//         },
//         removeItem: function (key) {
//             delete store[key];
//         },
//         clear: function () {
//             store = {};
//         }
//     };
// })();

describe('authHeader', () => {
    // beforeAll(() => {
    //     Object.defineProperty(window, 'localStorage', {
    //         value: fakeLocalStorage
    //     });
    // });

    // afterAll(() => {
    //     global.Storage.prototype.mockReset();
    // });

    // it('saves the key to the storage', () => {
    //     const value = {
    //         token: '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjEyN2MxZGViM2ZjODEzZDZjNTVjZTIwIiwiZW1haWwiOiJhZGFAbG92ZWxhY2UudGVzdCIsImlhdCI6MTYzMDkzMTMyNSwiZXhwIjoxNjMxNTM2MTI1fQ.lXJVS_WoYHvWYA9u2UldVH9muX11CPgVVN72aF6-r6E"',
    //         isLoggedIn: 'true',
    //         isInitialized: 'true',
    //         user: '{"email":"ada@lovelace.test","password":"$2a$10$j95TM0xWVcey.EbLEm4KC.7FtfAqGUcr1SgsZLRlDkevV894UQ77G","id":"6127c1deb3fc813d6c55ce20"}',
    //         _persist: '{"version":-1,"rehydrated":true}'
    //     };
    //     const header = {
    //         'x-access-token':
    //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjEyN2MxZGViM2ZjODEzZDZjNTVjZTIwIiwiZW1haWwiOiJhZGFAbG92ZWxhY2UudGVzdCIsImlhdCI6MTYzMDkyOTA1MSwiZXhwIjoxNjMxNTMzODUxfQ.ssYGfMMktbZGoQDrlIe8DbIOOFquPoTYIF24MAwCOOo'
    //     };

    //     window.localStorage.setItem('user-storage', value);

    //     expect(window.localStorage.getItem('user-storage')).toEqual('fake-value');
    //     const expectedHeader = authHeader();
    //     expect(expectedHeader).toEqual(header);
    // });

    it('should exist', () => {
        expect(typeof authHeader).toEqual('function');
    });

    // it('should return header', () => {

    //     console.log('store');
    //     console.log(store['user-account']);
    //     console.log('authHeader');
    //     console.log(authHeader());

    //     expect(authHeader()).toEqual(header);
    // });
});
