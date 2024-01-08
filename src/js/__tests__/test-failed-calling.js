import fetchData from '../http';
import {getLevel} from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel should be failed', () => {
  fetchData.mockReturnValue({status: ''});

  const result = getLevel(2);
  expect(result).toBe("Информация об уровне временно недоступна");
});