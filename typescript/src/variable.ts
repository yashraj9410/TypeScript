//we dont define int or float in ts instead they are called number

const greetings:string ="Yash";   //greetings will always be type string 
const num:number =9;
let sum = greetings + num;
console.log(sum);            //theese ara not allowed in ts
export{}

//type inference is basically typescript storing the type of a variable declared 

// if a variable is only declared and not assigned any value then javascript takes it as any 
// to avoid type checking we use any 
// any should not be used 
// We can use as keyword for type conversion
