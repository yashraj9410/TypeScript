// unions are basically used when we want multiple value to hold under a single variable 
// for example we want a variable to hold either number , string , boolean then we will make use of unions 
let id:string | number 
// id will take either string or number 
id=10;
id="yash123";
//both values are accepted 

// we can use unions in functions also 
function getid(id:string|number){
    //id.toUpperCae() this is not allowed we will have to use if else
    //commom methods to both string and number will apply 
    console.log(id);
}

getid(23);
getid('23');

//both will work 

//working with array 
const arr:(string | number)[]=[1,2,"y"] //array can take either string or num 