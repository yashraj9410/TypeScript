"use strict";
//behaviour of objects 
exports.__esModule = true;
function createPerson(_a) {
    var string = _a.name, number = _a.age;
}
createPerson({ name: "Yash", age: 24 }); // a new object has been created
//returnng an object using function
function createCourse() {
    return { name: "reactjs", price: 399 };
}
//creating function that returns a type user 
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "Yash", email: "ada@asd.com", isActive: true });
var me = {
    name: "Yash",
    id: "213"
};
//me.id.push="13442"; cannot be assigned beacause it is a readonly value 
//type alldetails = cardnumber & cardname & {cvv:number }
//above we are mixing the different types i.e cardnumber is of type number and carname is string 
