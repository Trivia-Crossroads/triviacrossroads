randomTrivia = ["The word \"trivia\" comes from the Latin word \"trivium\", meaning a meeting of three roads.", "In the Middle Ages the \"trivium\" meant the curriculum of study comprising grammar, logic, and rhetoric.",
"Oedipus killed his father at a trivium, a meeting of three roads. He later defeated the Sphinx in a trivia contest and saved the city of Thebes! Then he married his mother.", "The planet Jupiter is full of hot gas. So is your mom.", "Dueling is legal in Paraguay as long as both parties are registered blood donors.",
"An ostrich\'s eye is bigger than its brain. Its brain is bigger than yours.", "The microwave oven was invented by mistake when an engineer testing a magnetron tube noticed that the radiation from it melted the chocolate bar he had in his pocket. He cried like a baby over the chocolate until he realized the commercial potential.", "Armadillos can be housebroken. Houses can\'t be armadillobroken.",
"Recycling one glass jar saves enough energy to watch TV for 3 hours, but you should still read a book instead.", "Chewing gum while peeling onions will keep you from crying, unless you\'re thinking about your dead childhood puppy.", "In a survey, married men revealed that they change their underwear twice as often as single men: so, about once a week.", "\"Stewardesses\" is the longest word that is typed with only the left hand, even though it\'s sexist."];

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

tagline = document.getElementById("tagline");
tagline.textContent = displayRandom.randomFact();

