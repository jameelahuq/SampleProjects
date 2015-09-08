/**
 * Created by HUQ on 9/7/15.
 */

//----------
//    Code
//----------


class House {

  constructor(nameString) {
    this.name = nameString;
    this.rooms = [];
  }

  addRoom(...room) {
    this.rooms.push(...room);
    return this;
  }

  area() {
    return this.rooms.reduce((tot, e) => {
      return tot + e.area();
    }, 0);
  }
}

class Room {
  constructor(dimensions = {}) {
    //super(dimensions);
    let {rmWidth, rmLength } = dimensions;
    if (!rmWidth || !rmLength) {
      throw new Error("Missing params");
    }
    this.rmWidth = rmWidth;
    this.rmLength = rmLength;
  }

  area() {
    return this.rmLength * this.rmWidth
  }
}

//----------
//    Tests
//----------
import { expect } from "chai";


describe("House", () => {
  it("allows user to define a house object", () => {
    let house1 = new House;
    expect(house1).to.be.an('object');
  });

  it("labels every house object with a name", () => {
    let house1 = new House("Terra Vista");
    expect(house1.name).to.equal('Terra Vista');
  });

});


  describe("Room", () => {
    it ("throws an error if I try to define a room with missing dimensions", () => {
      expect(() => {new Room}).to.throw("Missing params");
    });


    it("accepts width and length arguments", () => {
      let room1 = new Room({rmWidth: 7, rmLength: 8});
      let room2 = new Room({rmWidth: 5, rmLength: 15});

      expect(room1.rmWidth).to.be.equal(7);
      expect(room1.rmLength).to.be.equal(8);
      expect(room2.rmWidth).to.be.equal(5);
      expect(room2.rmLength).to.be.equal(15);
    });
  });

describe ("addRoom", () => {
  let house1, house2;
  beforeEach(() => {
    let room1 = new Room({rmWidth: 7, rmLength: 8});
    let room2 = new Room({rmWidth: 5, rmLength: 15});
    let room3 = new Room({rmWidth: 8, rmLength: 11});
    house1 = new House("Terra Vista");
    house2 = new House("Mendel");
    house2.addRoom(room3);

    house1.addRoom(room1).addRoom(room2);
  });

  it("allows users to add a newRoom object to a house object", () => {

    expect(house1.rooms.length).to.be.equal(2);
    expect(house2.rooms.length).to.equal(1);
  });

  it("allows calculation of house area", () => {
    expect(house1.area()).to.equal(131);
    expect(house2.area()).to.equal(88);
  });

});

