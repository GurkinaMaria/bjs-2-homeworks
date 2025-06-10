function Student(name, gender, age) {
  this.name = "Василиса";
  this.gender = "женский";
  this.age = 19;
  this.marks = [];
}

let student = new Student;
console.log(student.name);

Student.prototype.setSubject = function (subjectName) {
 let setSubject = "Algebra";
 this.subject = subjectName;
}

console.log(student.setSubject);

Student.prototype.addMarks = function (...marks) {
    if (this.marks) { 
    this.marks.push(...marks); 
  }
}

Student.prototype.getAverage = function () {
   if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  let sum = this.marks.reduce((acc, mark) => acc + mark, 0); 
  return sum / this.marks.length; 
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
