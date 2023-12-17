export default class Character{
  constructor(name, character){
    this.name = name;
    this.character = character;
  }

  welcomeGamer(){
    return `You're IN Game, ${this.name}!`;
  }

  generateCharacter(){
    const characters = ["warrior", "scientist", "wizard", "queen"];
    const randomCharacter = Math.floor((Math.random() * characters.length));
    return characters[randomCharacter];
  }
}