/**
 * Created by HUQ on 8/25/15.
 */
var usedNumbers = [];

function powerThenAddNumber (num) {

  return num.toString().split('')
      .map(function (n) {return n * n})
      .reduce(function (a, b) {return a + b});
}

function HappyNumberCheck (num) {
  if (num == 1)
    return true;
  else if (usedNumbers.indexOf(num) > -1 || num == 4)
    return false;
  else {
    usedNumbers.push(num);
    return (HappyNumberCheck(powerThenAddNumber(num)));
  }
}


console.log(HappyNumberCheck(1));
console.log(HappyNumberCheck(19));
console.log(HappyNumberCheck(25));
console.log(HappyNumberCheck(2));
