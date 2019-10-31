var vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
var anySentence = "ello this it is def burnout stuff!";

var addWay = function(word){
  if (vowels.indexOf(word[0]) > -1){
    return word + "way";
  }
  else {
    return word;
  }
}

var finalArray = [];
var addWayToAll = function(sentence){
  var sentenceToArray = sentence.split(" ");
  for (let i = 0; i < sentenceToArray.length; i++){
    finalArray.push(addWay(sentenceToArray[i]));
  }
}

addWayToAll(anySentence);
console.log(finalArray);
