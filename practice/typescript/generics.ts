// generics are used to make reusable code 
// generic locks the paramter type and return type of any function

function func<Type>(val:Type):Type{
    return val;
}

// in the above function the func<Type> means that func will log the given parameter type and will return the same type 
//example if val is Type number then function return type will be automattialy set to number 
// that is the function saying that if i get number type them i am going to return a number type 

// function func<T>(val:T):T{} sometimes this declaratio is also used 

// if we want to create our own type 

interface User{
    name:string;
    age:number;
}

function getuser<User>(val:User):User{
    return val;
}

//here all parameters and return type id set to interface type user 