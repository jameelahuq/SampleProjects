/**
 * Created by HUQ on 9/7/15.
 */


var sqFootCounter = function(lengthWidthRoomsArray) {
  var sqFootRoomsArray = [];
  lengthWidthRoomsArray.forEach(function(e) {
    sqFootRoomsArray.push(e.rmLength * e.rmWidth);
  });

  return sqFootRoomsArray.reduce(function (tot,e) {
    return tot + e;
  });
};

var house1 = [{rmLength:20, rmWidth: 20}, {rmLength: 35, rmWidth: 20}, {rmLength: 10, rmWidth: 10}];
console.log(sqFootCounter(house1));

var addRoom = function (house1, newRoomObj) {
  house1.push(newRoomObj);
  return sqFootCounter(house1);

};

var newRoomObj = {rmLength: 100, rmWidth: 100};
console.log(addRoom(house1, newRoomObj));


var house2 = [{rmLength:10, rmWidth: 10}, {rmLength: 10, rmWidth: 20}, {rmLength: 10, rmWidth: 10}];

var addHouse = function (houseTots, newHouse) {
  newHouse.forEach(function(e) {
    houseTots.push(e);
  });
  return sqFootCounter(houseTots);
};

console.log(addHouse(house1, house2));