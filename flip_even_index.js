/**
 * Created by HUQ on 8/24/15.
 */

function compareArray (a1, a2) {
  //for (var i = 0; i < a1.length; i++) {
  //  if (a1[i] !== a2[i])
  //    return false;
  //}
  //return true;
  return (a1.toString() === a2.toString());
}

function swapEvenIndexes (userInput) {
  var storedItem;
  var arrayLength = userInput.length;
  for (var i = 0; i < arrayLength/2; i+=2) {
    //if (i%2 === 0) {
      storedItem = userInput[i];
      userInput[i] = userInput[arrayLength-i-1];
      userInput[arrayLength-i-1] = storedItem;
    //}
  }
  return userInput;
}

//test cases//
console.log(compareArray ([4,5,6,7,8,9], swapEvenIndexes([4,5,6,7,8,9]))); //fail case
console.log(compareArray ([9,5,7,6,8,4], swapEvenIndexes([4,5,6,7,8,9]))); // even number of indexes
console.log(compareArray ([10,5,8,7,6,9,4], swapEvenIndexes([4,5,6,7,8,9,10])));  //odd number of indexes
console.log(compareArray (['purple','orange','green','yellow','blue','red'],
    swapEvenIndexes(['red','orange','yellow','green','blue','purple'])));  //words
console.log(compareArray ([4], swapEvenIndexes([4]))); //one number
console.log(compareArray ([[4,5],[6,7],[8,9]], swapEvenIndexes([[8,9],[6,7],[4,5]]))); //array



