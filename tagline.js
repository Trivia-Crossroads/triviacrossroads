var trivia = {
  tagline: null,
  index: [],
  randomTrivia: [
    "The word \"trivia\" comes from the Latin word \"trivium\", meaning a meeting of three roads.",
    "In the Middle Ages the \"trivium\" meant the curriculum of study comprising grammar, logic, and rhetoric.",
    "Oedipus killed his father at a trivium, a meeting of three roads. He later defeated the Sphinx in a trivia contest and saved the city of Thebes! Then he married his mother.",
    "The planet Jupiter is full of hot gas. So is your mom.",
    "Dueling is legal in Paraguay as long as both parties are registered blood donors.",
    "An ostrich\'s eye is bigger than its brain. Its brain is bigger than yours.",
    "The microwave oven was invented by mistake when an engineer testing a magnetron tube noticed that the radiation from it melted the chocolate bar he had in his pocket. He cried like a baby over the chocolate until he realized the commercial potential.",
    "Armadillos can be housebroken. Houses can\'t be armadillobroken.",
    "Recycling one glass jar saves enough energy to watch TV for 3 hours, but you should still read a book instead.",
    "Chewing gum while peeling onions will keep you from crying, unless you\'re thinking about your dead childhood puppy.",
    "In a survey, married men revealed that they change their underwear twice as often as single men: so, about once a week.",
    "\"Stewardesses\" is the longest word that is typed with only the left hand, even though it\'s sexist.",
    "The ancient Code of Hammurabi decreed that bartenders who watered down beer would be executed; bartenders responded by inventing the fruity cocktail.",
    "The American Psychiatric Asocial classifies careen withdrawal as a mental disorder, because obviously anyone who stops drinking coffee is nuts.",
    "The muppet Elmo is the only non-human to have testified before Congress. He was forced to admit under oath that he is insufferably annoying.",
    "The most shoplifted food item in the U.S. is candy; in Europe, it\'s cheese. Consequently European prisoners have better teeth but worse breath.",
    "Your cat does not really love you. He\'s just using you.",
    "Alaska is 75 times larger than New Jersey, yet has only 1/75 as many jerks.",
    "Trivia is about trivialities, while the trivium is about the most essential things. All the boring stuff goes in the quadrivium.",
    "British aphorist Logan Pearsall Smith published a book called \"Trivialities, bits of information of little consequence\". This appears to be the origin of the modern sense of \"trivia\".",
    "Famous expert in the trivium of liberal arts, Charles Van Doren, was involved in a major cheating scandal over his success on a television trivia quiz show.",
    "In English the days of the week are named after Norse gods, except for Saturday and Sunday. The first eight months are named after Roman gods, including two emperors; the rest are just numbers.",
    "Nobody likes clowns",
    "Mark Twain was born and died under two successive appearances of Halley\’s Comet. He once said \"Get your facts first, then you can distort them as you please\", which is the motto of this trivia feature!",
    "Most fortune cookies contain bromides and truisms, not fortunes.",
    "Many sayings are falsely attributed to Confucius. \"Never eat yellow snow\" is genuine, however.",
    "The difference between an aphorism and an apothegm is that you\'ve heard of one and not the other.",
    "There are no stupid questions, only stupid people.",
    "Back when people respected learning, trivia was called lore.",
    "Most people agree that the greatest sporting event of all time was when Rocky Balboa defeated Apollo Creed. Those people can\'t distinguish between fiction and reality.",
    "The first marathon was run by Pheidippides, a messenger bringing to Athens the news of the Battle of Marathon. When he had announced the Greek victory, he collapsed and died.",
    "The wheel was invented by Ughg, a caveman famous for dinosaur-riding. He also invented fire and Cheez-Its.",
    "Elephant seals can hold their breath for 100 minutes, and are not really elephants.",
    "The average adult human brain has about 100 billion brain cells, with 100 trillion connections between them, but most people only use four or five.",
    "According to Google CEO Eric Shmidt, every two days humanity now creates as much information as we did from the dawn of civilization until 2003. On an unrelated note, Sturgeon\'s Law states that 90% of everything is crap.",
    "Dogs were promoted to Man\'s Best Friend after the previous best friend caused that unfortunate incident in Vegas. You know the one."
    ],

  buildIndex: function () {
    for (var i = 1; i < trivia.randomTrivia.length; i++) {
      trivia.index.push(i);
    }
    trivia.shuffle(trivia.index);
    trivia.index.push('0');
  },

  shuffle: function (array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      // console.log('i = ' + i);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  },

  setStoredIndex: function() {
    localStorage.index = JSON.stringify(trivia.index);
  },

  getStoredIndex: function() {
    if (localStorage.shuffledIndex) {
      trivia.index = JSON.parse(localStorage.index);
    } else {
      trivia.buildIndex();
    }
  },

  randomFact: function () {
    if (localStorage.index) {
      trivia.index = JSON.parse(localStorage.index);
    }
    if (trivia.index.length === 0) {
      trivia.buildIndex();
    }
    trivia.tagline = document.getElementById("tagline");
    trivia.tagline.textContent = trivia.randomTrivia[trivia.index.pop()];
    localStorage.index = JSON.stringify(trivia.index);
  },
}

trivia.randomFact();



