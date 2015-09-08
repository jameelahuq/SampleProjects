/**
 * Created by HUQ on 9/7/15.
 */

//----------
//    Code
//----------

class Student {
  constructor (studentName) {
    if (!studentName) {throw new Error("No name provided for student");}
    this.name = studentName;
    this.grades= [];
  }

  addGrade(grade) {
    this.grades.push(grade);
    return this;
  }
}

class Grade {
  constructor (gradeName, gradeScore) {
    if(!gradeName || !gradeScore) {throw new Error("Grade is missing params");}
    this.name = gradeName;
    this.score = gradeScore;
  }
}


//----------
//    Tests
//----------
import { expect } from "chai";



describe("Student", () => {
  let student1 = new Student("Andrew");

  it("allows the user to define a new student object", () => {
    expect(student1).to.be.an('object');
  });

  it("labels every student object with a name", () => {
    expect(student1.name).to.equal('Andrew');
  });

  it("throws an error if user doesn't name the student", () => {
    expect(() => {new Student}).to.Throw("No name provided for student");
  });

});


describe("Grade", () => {
  let grade1 = new Grade("quiz1", 65);

  it("allows user to define a new grade object for a student", () => {
    expect(grade1).to.be.an('object');
  });

  it("allows the user to name the student object", () => {
    expect(grade1.name).to.equal('quiz1');
  });

  it("allows user to provide a numerical value for score of object", () => {
    expect(grade1.score).to.be.a('number');
  });

  it("throws error no name or score is provided", () => {
    expect(() => {new Grade}).to.Throw("Grade is missing params");
  });

  it("throws error if score is not a number", () => {
    expect(() => {new Grade}).to.Throw("Grade is missing params");
  });

});

describe("addGrade", () => {
  let student1 = new Student("Sam");
  let grade1 = new Grade("Snuggles1", 35);
  let grade2 = new Grade("Cooking with Ramsey", 22);
  student1.addGrade(grade1).addGrade(grade2);

  it("adds the grade to the student object's grades array", () => {
    expect(student1.grades.length).to.equal(2);
  });



});