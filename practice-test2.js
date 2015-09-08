/**
 * Created by HUQ on 9/7/15.
 */
var xoCounter = function(string) {
  var xArray = string.match(/x/g) || [];
  var oArray = string.match(/o/g) || [];
  return (xArray.length%2 === 0 && oArray.length%2 === 0);
};

console.log(xoCounter("xoxooxo"));
console.log(xoCounter("ooxxoo"));



var abCounter = function(string) {
  return string.search(/(a...b)/g) > -1;
};

console.log(abCounter("after badly")); //false
console.log(abCounter("Laura sobs")); //true



//function Palindrome(str) {
//  letterArr = str.split("");
//  (letterArr.splice(letterArr.length/2).every(function(e, i) {
//    return (letterArr[i] === length letterArr[letterArr.length-i]
//  });
//  return str;
//
//}
//
//// keep this function call here
//// to see how to enter arguments in JavaScript scroll down
//Palindrome(readline());

