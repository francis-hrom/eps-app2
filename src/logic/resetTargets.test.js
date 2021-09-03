import axios from 'axios';
import resetTargets from './resetTargets';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('resetTargets', () => {
    const url = 'https://test.com';
    const selector = 'div>h1';

    it('should call endpoint with given data', async () => {
        await resetTargets(url, selector);
        axios.post.mockImplementationOnce(() => Promise.resolve());
        expect(axios.post).toBeCalledWith(`${REACT_APP_API}/targets/reset-to-default-data`, {}, { headers: {} });
    });

    it('successfully receives response from API', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve({ url, selector }));
        await expect(resetTargets(url, selector)).resolves.toEqual({ url, selector });
    });

    it('receives error from API', async () => {
        const errorMessage = 'Network Error';
        axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(resetTargets(url, selector)).rejects.toThrow(errorMessage);
    });
});
