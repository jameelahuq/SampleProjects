/**
 * Created by HUQ on 8/31/15.
 */
function sumAndAverageInStepsOf5(num) {
  var result = {
    sum : 0,
    avg : 1
  };

  for (var i = 0; i <= num; i = i+5) {
    result.sum = result.sum + i;


  }
  result.avg = result.sum/(num/5);
  return result;
}
//var result = sumAndAverageInStepsOf5(1000);
//console.log(result);
//
//result = sumAndAverageInStepsOf5(10);
//console.log(result);

// {sum: _____, avg: ______}

function shortestFirstReversed(string) {
  var stringArray = string.split(" ");
  var firstSmallestWord;
  var firstSmallestLength = 10000000;

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length < firstSmallestLength) {
      firstSmallestWord = stringArray[i];
      firstSmallestLength = stringArray[i].length;
    }
  }
  return firstSmallestWord.split('').reverse().join('');
}

//var sentence = "Cattle Meow Elephant Dog Snake Cat Hit";
//var output = shortestFirstReversed(sentence);
//console.log(output);
// goD

// get all female dogs less than 3 years old
function getFemaleDogsLessThan3 (dogs) {
  var dogsLessThanThreeArray = [];
  dogs.forEach(function(dog) {
    if (dog.age < 3) {
      dogsLessThanThreeArray.push(dog);
    }
  });
  return dogsLessThanThreeArray;
}
//
//var dogs = [
//  {name: 'a', age: 10, gender: 'male'},
//{name: 'b', age: 2, gender: 'female'},
//{name: 'c', age: 7, gender: 'male'},
//{name: 'd', age: 1, gender: 'female'},
//{name: 'e', age: 4, gender: 'male'},
//{name: 'f', age: 6, gender: 'female'}
//];
//
//var result = getFemaleDogsLessThan3(dogs);
//console.log(result);
// result => [{name: 'b', ...}, {name: 'd', ...}]

