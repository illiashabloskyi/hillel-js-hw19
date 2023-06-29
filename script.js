class Student {
  constructor(name, year, grades) {
    this.name = name;
    this.year = year;

    this.attendance = new Array(25).fill(null);
    this.grades = grades;
  }
  yearsOld() {
    console.log(`${this.name}s years old: ${2023 - this.year}`);
  }

  present() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = true;
    } else {
      console.log("Month end");
    }
  }

  absent() {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
      this.attendance[index] = false;
    } else {
      console.log("Month end");
    }
  }

  // TODO: Додав  метод щоб бистріше заповнювати оцінки
  grade() {
    for (let i = 0; i <= this.grades.length; i++) {
      if (this.attendance[i] === true) {
        this.grades[i] = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
      }
      if (this.attendance[i] === false) {
        this.grades[i] = 0;
      }
    }
  }

  summary() {
    let sumGrades = this.grades.reduce((acc, x) => acc + x, 0);
    let midSumGrades = sumGrades / this.grades.length;

    let countAttend = 1;

    for (let i of this.attendance) {
      if (i === false) {
        countAttend -= 0.0388;
      }
    }

    console.log(midSumGrades, countAttend);

    if (countAttend >= 0.9 && midSumGrades >= 90) {
      console.log("Well done!");
    } else if (
      (countAttend <= 0.9 && midSumGrades >= 90) ||
      (midSumGrades <= 90 && countAttend >= 0.9)
    ) {
      console.log("Good, but it can be better");
    } else {
      console.log("Radish");
    }
  }
}

const grade1 = new Array(25);

const student1 = new Student("Viktor", "1999", grade1);
console.log(student1);
student1.yearsOld();

student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();

student1.grade();
student1.summary();

const grade2 = new Array(25);
const student2 = new Student("Dasha", "2000", grade2);

console.log(student2);

student2.present();
student2.present();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();
student2.absent();

student2.grade();
student2.summary();

let grade3 = [
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
  100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
];
const student3 = new Student("Lena", "2001", grade3);
console.log(student3);
student3.yearsOld();

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

student3.summary();
