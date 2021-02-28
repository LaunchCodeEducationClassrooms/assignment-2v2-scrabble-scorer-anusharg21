// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
  
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
   console.log("Let's play some scrabble!");
  return input.question("Enter a word to score:");
  };

let simpleScore =function(word){
  word = word.toUpperCase();
  let letterPoints =0;
  for(i=0;i<word.length;i++){
    letterPoints+=1;
  }
  return letterPoints;
}




let vowelBonusScore = function(word){
  word = word.toUpperCase();
  let letterPoints = 0;
  for(i=0;i<word.length;i++){
   if(word[i]==="A"||word[i]==="E"||word[i]==="I"||word[i]==="O"||word[i]==="U"){
      letterPoints+=2;
    }
    letterPoints+=1;
  }
    return letterPoints;
  
}

let scrabbleScore =function(word){
  word = word.toLowerCase();
  let scrabblePoints = 0;
  for(i=0;i<word.length;i++){
  let letter = word[i];
  scrabblePoints += newPointStructure[letter];
  }
  return scrabblePoints
}

const scoringAlgorithms = [
  { name: "Simple Score",
    description: "Each letter is worth 1 point.",
    scoringFunction: simpleScore
  },
  {
    name: "Bonus Vowels",
    description: "Vowels are 3 pts, consonants are 1 pt.",
    scoringFunction: vowelBonusScore
  },
  {
    name: "Scrabble",
    description: "The traditional scoring algorithm.",
    scoringFunction: scrabbleScore
  }
];

function scorerPrompt(word) {
let number= input.question(`which algorithm would you like to use?\n
0 - ${scoringAlgorithms[0].name} :${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name} :${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name} :${scoringAlgorithms[2].description}\nEnter 0,1,or 2:`);
if(number==0){
console.log(`algorithm name: ${scoringAlgorithms[0].name}`);
console.log(`scoringFunction result: ${scoringAlgorithms[0].scoringFunction(word)}`);
 return (`score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)}`);
}
if(number==1){
  console.log(`algorithm name: ${scoringAlgorithms[1].name}`);
 console.log(`scoringFunction result: ${scoringAlgorithms[1].scoringFunction(word)}`);
 return (`score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}`);
}
if(number==2){
  console.log(`algorithm name: ${scoringAlgorithms[2].name}`);
 console.log(`scoringFunction result: ${scoringAlgorithms[2].scoringFunction(word)}`);
}
return (`score for '${word}': ${scoringAlgorithms[2].scoringFunction(word)}`);
}

function transform(obj) {
  let newpointObject = {};
  for(item in obj){
  let point = 0;
  while(point<obj[item].length){
    let key = obj[item][point];
    key = key.toLowerCase();
    newpointObject[`${key}`] = Number(item);
    point++;
  }
  }
  return newpointObject;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
 let word = initialPrompt();
 console.log(scorerPrompt(word));
 
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

