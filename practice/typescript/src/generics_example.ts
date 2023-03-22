// examples of generics 

// generics are maily used when we have  

// mainly used to define the types with function, interfaces , type alias 

// for example 

const echo = (arg:string):string => arg;
echo("yash") // the function will work
// echo(12);   // the function will throw an error because the argument type is only string 
// the aboe function echo just takes string as a parameter and aslo returns the same type as its argument 
// to make this function more generic we can use the help of generics 

// example with generic 

const echo_generic = <T>(arg:T):T => arg;
echo_generic("yash");
echo_generic(12);  // the return type will automatically change to number 


