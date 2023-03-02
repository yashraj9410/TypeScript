var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.returnname = function (name) {
        return name;
    };
    return Person;
}());
var p = new Person();
console.log(p.returnname("yash"));
