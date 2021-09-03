import axios from 'axios';
import editTarget from './editTarget';
const { REACT_APP_API } = process.env;

jest.mock('axios');

describe('editTarget', () => {
    describe('test with valid  inputs', () => {
        const _id = '611fa02583b416853031bb6a';
        const selector = 'div>h4';

        it('should call endpoint with given data', async () => {
            await editTarget(_id, selector);
            axios.patch.mockImplementationOnce(() => Promise.resolve({ _id, selector }));
            expect(axios.patch).toBeCalledWith(`${REACT_APP_API}/targets/${_id}`, { selector }, { headers: {} });
        });

        it('successfully receives response from API', async () => {
            axios.patch.mockImplementationOnce(() => Promise.resolve({ selector }));
            await expect(editTarget(_id, selector)).resolves.toEqual({ selector });
        });

        it('receives error from API', async () => {
            const errorMessage = 'Network Error';
            axios.patch.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
            await expect(editTarget(_id, selector)).rejects.toThrow(errorMessage);
        });
    });

    describe('test with invalid inputs', () => {
        it('should throw TypeError', () => {
            const _id = 123456;
            const selector = 'div>h4';
            const errorMessage = new TypeError(`${_id} is missing.`);
            expect(async () => await editTarget(_id, selector)).rejects.toThrow(errorMessage);
        });

        it('should throw TypeError', () => {
            const _id = '611fa02583b416853031bb6a';
            const selector = false;
            const errorMessage = new TypeError(`${selector} is not a string`);
            expect(async () => await editTarget(_id, selector)).rejects.toThrow(errorMessage);
        });
    });
});
