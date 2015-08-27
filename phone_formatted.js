/**
 * Created by HUQ on 8/27/15.
 */

function phone_formatted(string) {
  if (string.length != 10)
    return "Please enter a 10 digit number";
  return string.replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, function (match, p1,p2,p3) {
   // console.log (p1);
    return ("(" + p1 + ") " + p2 + "-" + p3);
  });

}

console.log(phone_formatted('4773948'));
console.log(phone_formatted('8154773945'));