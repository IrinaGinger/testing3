import fetchData from '../http';
import {getLevel} from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('getLevel should be called successfully', () => {
  const response = {
    status: "ok",
    level: 1,
  };

  fetchData.mockReturnValueOnce(response);

  const result = getLevel(3);
  expect(result).toBe("Ваш текущий уровень: 1");
});