"use strict";
const user_1 = {
    "name": "yash",
    "age": 10
};
const a = 'name';
console.log(user_1[a]);
console.log(typeof user_1.age);
for (let key in user_1) {
    console.log(typeof key);
}
