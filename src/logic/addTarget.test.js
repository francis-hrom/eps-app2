import axios from 'axios';
import addTarget from './addTarget';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('addTarget', () => {
    describe('test with valid inputs', () => {
        const url = 'https://test.com';
        const selector = 'div>h1';

        it('should call endpoint with given data', async () => {
            await addTarget(url, selector);
            axios.post.mockImplementationOnce(() => Promise.resolve({ url, selector }));
            expect(axios.post).toBeCalledWith(
                `${REACT_APP_API}/targets`,
                {
                    url,
                    selector
                },
                { headers: {} }
            );
        });

        it('successfully receives response from API', async () => {
            axios.post.mockImplementationOnce(() => Promise.resolve({ url, selector }));
            await expect(addTarget(url, selector)).resolves.toEqual({ url, selector });
        });

        it('receives error from API', async () => {
            const errorMessage = 'Network Error';
            axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
            await expect(addTarget(url, selector)).rejects.toThrow(errorMessage);
        });
    });

    describe('test with invalid inputs', () => {
        it('should throw TypeError', () => {
            const url = 123;
            const selector = false;
            const errorMessage = new TypeError(`${url} is not a string`);
            expect(async () => await addTarget(url, selector)).rejects.toThrow(errorMessage);
        });
        it('should throw TypeError', () => {
            const url = 'example.com';
            const selector = false;
            const errorMessage = new TypeError(`${url} is not a valid URL.`);
            expect(async () => await addTarget(url, selector)).rejects.toThrow(errorMessage);
        });
        it('should throw TypeError', () => {
            const url = 'http://example.com';
            const selector = false;
            const errorMessage = new TypeError(`${selector} is not a string`);
            expect(async () => await addTarget(url, selector)).rejects.toThrow(errorMessage);
        });
    });
});
