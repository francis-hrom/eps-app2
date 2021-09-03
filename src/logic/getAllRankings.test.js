import axios from 'axios';
import getAllRankings from './getAllRankings';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('getAllRankings', () => {
    const data = [
        {
            _id: '611e4244248af55f14b10e65',
            item: 'google pixel 4a just black',
            url: 'https://test.eu/?m=5',
            rank: 1,
            date: '2021-01-01T11:36:36.609Z',
            __v: 0
        },
        {
            _id: '611e4244248af55f14b10e79',
            item: 'apple iphone 12',
            url: 'https://www.test2.de/preisvergleich/ProductCategory/19116.html?cmpReload=true',
            rank: 1,
            date: '2021-01-01T11:36:36.771Z',
            __v: 0
        }
    ];

    it('should call API endpoint', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve(data));
        await getAllRankings();
        expect(axios.get).toBeCalledWith(`${REACT_APP_API}/rankings`, { headers: {} });
    });

    it('successfully retrieves data from server', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getAllRankings()).resolves.toEqual(data);
    });

    it('gets error while retrieving data from server', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(getAllRankings()).rejects.toThrow(errorMessage);
    });
});
