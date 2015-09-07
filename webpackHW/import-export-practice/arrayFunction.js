/**
 * Created by HUQ on 9/4/15.
 */
//
//export default () => (A,B)  => {
//
//  let total = [];
//  for (var i = A; i <= B; i++) {
//    total.push(i);
//  }
//  return total;
//}


export default () => (A, B) => Array(...Array(B-A)).map((a,b,c) => b + A);