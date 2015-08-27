/**
 * Created by HUQ on 8/26/15.
 */
function calculatorParser(string) {
//PEMDAS

  var string="4+6-5*20/10";

  var regex = (/([-+*\/])/g);

  var string = string.split(regex);
  var tots;

  while (string.length > 1) {
    string.forEach(function (num, int, array) {
      switch (num) {
        case '*':
          tots = parseInt(string[int - 1]) * parseInt(string[int + 1]);
          string.splice(int - 1, 3, tots);
          break;
        case '/':
          tots = parseInt(string[int - 1]) / parseInt(string[int + 1]);
          string.splice(int - 1, 3, tots);
          break;
        case '+':
          tots = parseInt(string[int - 1]) + parseInt(string[int + 1]);
          string.splice(int - 1, 3, tots);
          break;
        case '-':
          tots = parseInt(string[int - 1]) - parseInt(string[int + 1]);
          string.splice(int - 1, 3, tots);
          break;
      }
    });
  };








//  if (!string) //TODO: error for non-equation answers: "5 5" "+5-6" etc.
//  return "Error: no value, try again."
//  string = string.replace(/ /g,'').split("");
//
//
//  var addIsDone = string.replace(/\d+(?:\*|\+|\-|\/)\d+/, function() {

  ////})
  //
  //  var myString = "something format_abc";
  //  var myRegexp = /(?:^|\s)format_(.*?)(?:\s|$)/g;
  //  var match = myRegexp.exec(myString);
  //  alert(match[1]);  // abc
  //
  //      match = myRegexp.exec(myString);
  //  while (match != null) {
  //    // matched text: match[0]
  //    // match start: match.index
  //    // capturing group n: match[n]
  //    match = myRegexp.exec(myString);
  //  }
  return string;
};

myString = "2+5*9-2/99";

console.log(calculatorParser(myString));






//calculator parser
//
//math operations
//
//4+(3-10)/6*4
//
//accept a string
//so using order of operations
//can't use exec

//HARD MODE//
//exponents
//decimal