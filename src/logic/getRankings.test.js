import axios from 'axios';
import getRankings from './getRankings';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('getRankings', () => {
    const data = ['Nokia 123', 'LG Optimus', 'Samsung Galaxy', 'Nokia X', 'Sony Xperia', 'Ubuntu Edge', 'Iphone', 'Iphone', 'Iphone'];
    const url = 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch';
    const selector = 'h4>a';

    it('should call API endpoint', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve(data));
        await getRankings(url, selector);
        expect(axios.post).toBeCalledWith(
            `${REACT_APP_API}/scrape/get-rankings`,
            {
                url,
                selector
            },
            { headers: {} }
        );
    });

    it('successfully retrieves data from server', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getRankings(url, selector)).resolves.toEqual(data);
    });

    it('gets error while retrieving data from server', async () => {
        const errorMessage = 'Network Error';
        axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(getRankings(url, selector)).rejects.toThrow(errorMessage);
    });
});
