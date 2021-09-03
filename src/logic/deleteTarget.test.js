import axios from 'axios';
import deleteTarget from './deleteTarget';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('deleteTarget', () => {
    describe('test with valid inputs', () => {
        const _id = '611fa02583b416853031bb6a';

        it('should call endpoint with given data', async () => {
            await deleteTarget(_id);
            axios.delete.mockImplementationOnce(() => Promise.resolve());
            expect(axios.delete).toBeCalledWith(`${REACT_APP_API}/targets/${_id}`, { headers: {} });
        });

        it('successfully receives response from API', async () => {
            axios.delete.mockImplementationOnce(() => Promise.resolve('Target Deleted'));
            await expect(deleteTarget(_id)).resolves.toEqual('Target Deleted');
        });

        it('receives error from API', async () => {
            const errorMessage = 'Network Error';
            axios.delete.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
            await expect(deleteTarget(_id)).rejects.toThrow(errorMessage);
        });
    });

    describe('test with invalid inputs', () => {
        it('should throw TypeError', () => {
            const _id = 123456;

            const errorMessage = new TypeError(`${_id} is missing.`);
            expect(async () => await deleteTarget(_id)).rejects.toThrow(errorMessage);
        });
    });
});
