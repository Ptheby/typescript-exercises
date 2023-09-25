var Student = /** @class */ (function () {
  function Student(name, age, grade) {
    this.studentName = name;
    this.studentAge = age;
    this.studentGrade = grade;
  }
  Student.prototype.displayInfo = function () {
    console.log(this.studentName);
    console.log(this.studentAge);
  };
  // isPassing(gradeThreshhold:number) {
  //     if (gradeThreshold >= 70) return console.log("Is passing");
  //     else console.log("Is Not Passing")
  // }
  // };
  Student.prototype.isPassing = function (gradeThreshold) {
    return this.studentGrade >= gradeThreshold;
  };
  return Student;
})();
var newStudent = new Student("Walker", 5, 97);
newStudent.displayInfo();
var passing = newStudent.isPassing(70);
console.log(passing);
// Define the properties here
// Define the constructor here
// Define the displayInfo method here
// Define the isPassing method here
// Instantiate a new student object and call the methods to test your class
