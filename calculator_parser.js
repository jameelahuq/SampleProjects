/**
 * Created by HUQ on 8/26/15.
 */

var tots; //for now! move later

function calculatorParser(inputMathExpression) {
//PEMDAS
  var regex = (/([-+*\/^()])/g);


  var mathExprArray = inputMathExpression.split(regex);
  console.log(mathExprArray);
  //var tots;
  //return evaluateBinaryOperation(inputedMathExpression);

}





function evaluateBinaryOperation(arrayNumOpNum) {
    //while (string.length > 1) { //TODO: account for order of operation

  var num1 = parseFloat(arrayNumOpNum[1]);
  var num2 = parseFloat(arrayNumOpNum[3]);
  var op = arrayNumOpNum[2];
  var tots;

        switch (op) {
          case '*': tots = num1 * num2;

            //string.splice(int - 1, 3, tots);
            //console.log(string);
            break;
          case '/': tots = num1 / num2;
            //string.splice(int - 1, 3, tots);
            //console.log(string);

            break;
          case '+': tots = num1 + num2;
            //string.splice(int - 1, 3, tots);
            //console.log(string);

            break;
          case '-': tots = num1 - num2;
          //string.splice(int - 1, 3, tots);
          //console.log(string);

          break;
          case '^': tots = Math.pow(num1, num2);
            //string.splice(int - 1, 3, tots);
            //console.log(string);

            break;
        }
  return tots;
}

function ReplaceBinaryWithEval(mixedOperatorArray) {

  var ops = [(/^/), (/[/*]/), (/[-+]/)];

  ops.forEach(function(op) {
    while(mixedOperatorArray.test(op)) {
      var indexOfOp = mixedOperatorArray.indexOf(op);
      var arrayNumOpNum = [
        mixedOperatorArray[indexOfOp-1],
        mixedOperatorArray[indexOfOp],
        mixedOperatorArray[indexOfOp+1]
      ];
      mixedOperatorArray.splice(indexOfOp-1, 3, evaluateBinaryOperation(arrayNumOpNum));
    }
  });

//
//
//function somethingOrOther(arrayNumOpNum) {
//  var regexExponent = (/\d+); //put regex here for that shit
//  var regexMultDiv = b; //again here
//  var regexAddSub = c; //again here
//
//  var regexes =  [regexExponent, regexMultDiv, regexAddSub];
//
//  regexes.forEach(function(regex){
//    while (expression.test(regex)) {
//      var match = expression.match(regex)
//      var result = evaluateBinaryOperation(match);
//      expression.splice(match.index, match[0].length, result);
//    }
//  });
//  return parseFloat(expression);
//}
//function findMutlDivFirst (string) {
//  var startOfSign = string.indexOf(/\([\*\/]\)/);
//
//  while (string.indexOf(/\([\*\/]\)/) != -1) {
//    tots = parseInt(string[startOfSign - 1]) / parseInt(string[startOfSign + 1]);
//    string.splice(startOfSign - 1, 3, tots);
//    console.log(string);
//  }
//}
//
///////////////Cade stuff
//
//function findInnerMostParen(string) {
//
//  var match = string.match(/\([^()]+\)/);
//  console.log(match);
//  return match;
//}
//
//function evaluateMathExpression(expression) {
//  var regexExponent = a; //put regex here for that shit
//  var regexMultDiv = b; //again here
//  var regexAddSub = c; //again here
//
//  var regexes =  [regexExponent, regexMultDiv, regexAddSub];
//
//  regexes.forEach(function(regex){
//    while (expression.test(regex)) {
//      var match = expression.match(regex)
//      var result = evaluateBinaryOperation(match);
//      expression.splice(match.index, match[0].length, result);
//    }
//  });
//return parseFloat(expression);
//}



//Array.prototype.

console.log(evaluateBinaryOperation( ['42','/','89'] );

console.log(calculatorParser("2 - 5 + 9 * 10 / 5")); // 10.2 or 45
//console.log(findMutlDivFirst("2 - 5 + 9 * 10 / 5")); // 10.2 or 45
console.log(calculatorParser('2 + 27 + 16 / 4')); // 8.7 5 or 33
console.log(calculatorParser("2 + 27  + (2* 9) / 4"));
//console.log(findInnerMostParen("2 + (3  * 9) + ((5 - 3)* 9) / 4"));
console.log(calculatorParser("2 + (( 5 - 6 / 3 ) * 9) + ((5 - 3)* 9) / 4"));
console.log(calculatorParser("2 + (( 5 ^ 6 / 3 ) * 9) + ((5 - 3)* 9) / 4"));

