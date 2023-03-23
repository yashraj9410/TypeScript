// consider a interface 

interface myObj {
    name?:string,       // the value for key name may also be undefined 
    age:number
}

let User:myObj = {
    name:"yash",
    age:12
}

console.log(getUsername(User));

function getUsername(a:myObj){
    // return a.name.toUpperCase();   // this line will create a error as the name property may be possibly undefined for some user 
    if(a.name){
        return a.name?.toUpperCase();          // here we have done narrowing to check if the name exists or not 
    }

    return "User is not defined in the interface";
}
    
