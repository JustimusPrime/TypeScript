var fullName_two = (first, last) => {
  return first + " " + last;
}

console.log(fullName_two('Justin', 'Murray'));

var gradeGenerator_one = (grade_one: number) : string => {
  if (grade_one < 60) {
    return 'F';
  } else if (grade_one >= 60 && grade_one < 70) {
    return 'D'
  } else if (grade_one >= 70 && grade_one < 80) {
     return 'C'
  } else if (grade_one >= 80 && grade_one < 90) {
     return 'B'
  } else {
     return 'A'
   }
}

console.log(gradeGenerator_one(45));
console.log(gradeGenerator_one(100));
console.log(gradeGenerator_one(80));