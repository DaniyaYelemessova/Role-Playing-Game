import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Character from "./js/character";




function reset(){
  document.getElementById("form").reset();
}

function generatedCharacter(e){
  e.preventDefault();
  const gamerNameInput = document.getElementById("gamerName").value;
  const generatedCharacter = document.getElementById("generatedCharacter");
  const character = new Character(gamerNameInput, generatedCharacter);
  generatedCharacter.textContent = `You're a ${character.generateCharacter()} for this game!`;
}


function handleForm(e){
  e.preventDefault();
  const gamerNameInput = document.getElementById("gamerName").value;
  const gamerNameOutput = document.getElementById("gamerNameOutput");
  const character = new Character(gamerNameInput);
  gamerNameOutput.textContent = character.welcomeGamer();
  document.getElementById("generate").removeAttribute("class");
  reset();
}

document.getElementById("form").addEventListener("submit", handleForm);
document.getElementById("generate").addEventListener("click", generatedCharacter);