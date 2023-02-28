"use strict";
//functions 
// the parameter in the function default type is any 
// we have to make a strict type to the parameter 
exports.__esModule = true;
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
//returning the exact values in functions 
function addnum(num) {
    return num + num;
}
console.log(addnum(5));
// in the above function the retrun type is strict on number 
// we cnannot return anything else except numbers 
//using array and mapping the values
var name = ["yash", "shourya ", "nancy "];
//here typescript eill automatically take thy type of array in map
name.map(function (names) { return "name is ".concat(name); });
// function func():void means returns nothing
// to handle an error or an fail ewe always use a return type as never that meansv value is never observed
function handleerr(err) {
    throw new Error(err);
}
