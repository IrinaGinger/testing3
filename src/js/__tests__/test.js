import characterHealthIndicate from '../app.js';

const dataList = [
    ['Маг', 90, 'healthy'],
    ['мечник', 10, 'critical'],
    ['лучник', 40, 'wounded']
  ];

test.each(dataList)(('Characters health indicate'), (name, health, expected) => {
  const result = characterHealthIndicate({name, health});
  expect(result).toBe(expected);
});