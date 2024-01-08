import characterHealthSorting from '../app.js';

const charactersList = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
];

test(('Characters sorting'), () => {
  const result = characterHealthSorting(charactersList);
  const expected = [
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ];
  expect(result).toEqual(expected);
});