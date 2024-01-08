import fetchData from '../http';
import {getLevel} from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call getLevel', () => {
  fetchData.mockReturnValue({});

  getLevel(1);
  expect(fetchData).toBeCalledWith(`https://server/user/1`);
});