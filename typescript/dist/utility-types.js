"use strict";
const update_assignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    name: "yash",
    class: 23,
    checked: false
};
console.log(update_assignment(assign1, { checked: true }));
