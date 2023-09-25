class Student {
    studentName:string;
    studentAge: number;
    studentGrade:number;

    constructor(name:string,age:number,grade:number) {
        this.studentName=name;
        this.studentAge=age;
        this.studentGrade=grade;
    }
    displayInfo(): void {
        console.log(this.studentName);
    
    }
    // isPassing(gradeThreshhold:number) {
    //     if (gradeThreshold >= 70) return console.log("Is passing");
    //     else console.log("Is Not Passing")
    // }
    // };
    isPassing(gradeThreshold: number): boolean {
        return this.studentGrade >= gradeThreshold;
    }
}
const newStudent= new Student("Walker", 5, 97);

newStudent.displayInfo();


const passing = newStudent.isPassing(70);
console.log(passing);



    // Define the properties here
    
    // Define the constructor here

    // Define the displayInfo method here

    // Define the isPassing method here


// Instantiate a new student object and call the methods to test your class
