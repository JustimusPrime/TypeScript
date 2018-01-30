var fullName_two = function (first, last) {
    return first + " " + last;
};
console.log(fullName_two('Justin', 'Murray'));
var gradeGenerator_one = function (grade_one) {
    if (grade_one < 60) {
        return 'F';
    }
    else if (grade_one >= 60 && grade_one < 70) {
        return 'D';
    }
    else if (grade_one >= 70 && grade_one < 80) {
        return 'C';
    }
    else if (grade_one >= 80 && grade_one < 90) {
        return 'B';
    }
    else {
        return 'A';
    }
};
console.log(gradeGenerator_one(45));
console.log(gradeGenerator_one(100));
console.log(gradeGenerator_one(80));
//# sourceMappingURL=016_S_arrow_functions.js.map