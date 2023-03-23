"use strict";
var grade;
(function (grade) {
    grade[grade["a"] = 0] = "a";
    grade[grade["b"] = 1] = "b";
    grade[grade["c"] = 2] = "c";
    grade[grade["d"] = 3] = "d";
})(grade || (grade = {}));
console.log(grade.a);
