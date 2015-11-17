randomTrivia = ["The word \"trivia\" comes from the Latin word \"trivium\", meaning a meeting of three roads.", "In the Middle Ages the \"trivium\" meant the curriculum of study comprising grammar, logic, and rhetoric.",
"Oedipus killed his father at a trivium, a meeting of three roads. He later defeated the Sphinx in a trivia contest and saved the city of Thebes! Then he married his mother."];

displayRandom = {
  randomNum: function () {
    return Math.floor(Math.random() * randomTrivia.length);
    console.log(randomNum);
  },

  randomFact: function () {
    num = displayRandom.randomNum();
    return randomTrivia[num];
    console.log(randomFact);
  },

}

container = document.getElementById("container");
container.textContent = displayRandom.randomFact();
