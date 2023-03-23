"use strict";
let User = {
    name: "yash",
    age: 12
};
console.log(getUsername(User));
function getUsername(a) {
    var _a;
    if (a.name) {
        return (_a = a.name) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    }
    return "User is not defined in the interface";
}
