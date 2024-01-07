export default function characterHealthIndicate(characterHealth) {
  if (characterHealth.health > 50) {
    return ('healthy');
  } else if (characterHealth.health <= 50 && characterHealth.health >= 15) {
      return ('wounded');
    } else {
        return ('critical');
    }
}