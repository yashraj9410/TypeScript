//functions 
// the parameter in the function default type is any 
// we have to make a strict type to the parameter 

function add(num:number){    //strict check for param
    return num +  num;
}
console.log(add(5));

// in case of functions type inference is compulsory 
export{}

function person(name:string ,email:string ,id:number,isPaid:boolean ){
    if(isPaid){return "OK"}
}
console.log(person("Yash","raju@hmasjo.com",87,true));

//returning the exact values in functions 
function addnum(num:number):number{    //strict check for param andreturn val
    return num +  num;
}
console.log(addnum(5));
// in the above function the retrun type is strict on number 
// we cnannot return anything else except numbers 

//using array and mapping the values
const name =["yash" ,"shourya ", "nancy "];
//here typescript eill automatically take thy type of array in map
name.map((names):string=>{return `name is ${name}`})

// function func():void means returns nothing

// to handle an error or an fail ewe always use a return type as never that meansv value is never observed
function handleerr(err:string):never{
    throw new Error(err);
}
