"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + num;
}
console.log(add(5));
function person(name, email, id, isPaid) {
    if (isPaid) {
        return "OK";
    }
}
console.log(person("Yash", "raju@hmasjo.com", 87, true));
function addnum(num) {
    return num + num;
}
console.log(addnum(5));
const name = ["yash", "shourya ", "nancy "];
name.map((names) => { return `name is ${name}`; });
function handleerr(err) {
    throw new Error(err);
}
//# sourceMappingURL=functions.js.map