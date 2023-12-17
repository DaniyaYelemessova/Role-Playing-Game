import Character from '../src/js/character.js';

describe('Character', () => {

  test('should correctly create a character object', () => {
    const character = new Character("Josh");
    expect(character.name).toEqual("Josh");
  });

  test('should correctly welcome the game player', () => {
    const character = new Character("Josh");
    expect(character.welcomeGamer()).toEqual("You're IN Game, Josh!");
  });

  test('should return a random character from the array', () => {
    const characterInstance = new Character('Player', 'defaultCharacter');
    const characters = ["warrior", "scientist", "wizard", "queen"];
    expect(characters).toContain(characterInstance.generateCharacter());
  });
});