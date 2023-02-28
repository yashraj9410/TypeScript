//javascript objects

const person ={
    name:"yash",
    age:"22",
    colour:"black",
    id:12345
}

//objects have property name and property value
// we can access the property value by objname.property name

person.age="34";  //updated the age value of the object

console.log(person);

//objects can also contain methods 

const cred={
    firstname:"yash",
    lastname:"raj",
    fullname: function(){return this.firstname +" "+ this.lastname}
}

console.log(cred.fullname())