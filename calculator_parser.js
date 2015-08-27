/**
 * Created by HUQ on 8/26/15.
 */
function calculatorParser(string) {
//PEMDAS
  var regex = (/([-+*\/])/g);

  var string = string.split(regex);
  var tots;

  while (string.length > 1) { //TODO: account for order of operations
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

  return string[0];
};


console.log(calculatorParser("2+5*9-10/5"));