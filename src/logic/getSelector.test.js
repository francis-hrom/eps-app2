import axios from 'axios';
import getSelector from './getSelector';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('getSelector', () => {
    const data = ['Nokia 123', 'LG Optimus', 'Samsung Galaxy'];
    const url = 'https://webscraper.io/test-sites/e-commerce/allinone/phones/touch';
    const selector = 'h4>a';

    it('should call API endpoint', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve(selector));
        await getSelector(url, data);
        expect(axios.post).toBeCalledWith(
            `${REACT_APP_API}/scrape/find-selector`,
            {
                url,
                textArr: data
            },
            { headers: {} }
        );
    });

    it('successfully retrieves data from server', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve(selector));
        await expect(getSelector(url, data)).resolves.toEqual(selector);
    });

    it('gets error while retrieving data from server', async () => {
        const errorMessage = 'Network Error';
        axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(getSelector(url, data)).rejects.toThrow(errorMessage);
    });
});
