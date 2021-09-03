import axios from 'axios';
import getAllTargets from './getAllTargets';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('getAllTargets', () => {
    const data = [
        {
            _id: '6128fc0d55edea8140bbe73c',
            url: 'https://test1.io/test-sites/e-commerce/allinone/phones/touch',
            selector: 'html>body>div>div>div>div>div>div>div>div>h4>a:nth-of-type(1)',
            __v: 0
        },
        {
            _id: '6128fc0d55edea8140bbe73d',
            url: 'https://test2.eu/?m=5',
            selector: 'html>body>div>div>main>div>div>div>ol>li>div>div>div>a:nth-of-type(1)',
            __v: 0
        }
    ];

    it('should call API endpoint', async () => {
        axios.post.mockImplementationOnce(() => Promise.resolve(data));
        await getAllTargets();
        expect(axios.get).toBeCalledWith(`${REACT_APP_API}/targets`, { headers: {} });
    });

    it('successfully retrieves data from server', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        await expect(getAllTargets()).resolves.toEqual(data);
    });

    it('gets error while retrieving data from server', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
        await expect(getAllTargets()).rejects.toThrow(errorMessage);
    });
});
