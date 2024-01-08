export default function characterHealthSorting(characters) {
  characters.sort( (a, b) => {
    return b.health - a.health;
  });
  return characters;
}