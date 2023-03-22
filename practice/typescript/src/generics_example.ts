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


// example for checking if the argument passed into the function is only an object  

const isObj = <T>(arg:T):boolean => {
    return(typeof arg === 'object' && !Array.isArray(arg) && arg !== null ); 
}

console.log(isObj(true));
console.log(isObj({}));
console.log(isObj({name:"Yash"}));
console.log(isObj([1,2,3,4]));


// generics are maimly used when we need to return specific type depending on the argument

// example 
// checking if an argument is true or false 

const isTrue  = <T>(arg:T):{arg:T,is:boolean} => {
    if(Array.isArray(arg) && !arg.length){
        return {arg, is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg , is:false}
    }
    return {arg , is:!!arg}
}

console.log(isTrue(true));
console.log(isTrue({}));
console.log(isTrue({name:"Yash"}));
console.log(isTrue([1,2,3,4]));
console.log(isTrue([]));
console.log(isTrue("yash"));
console.log(isTrue(""));


// we can also implement the above function using a return type as an interface
// exapmple 

interface Boolcheck<T> {
    value:T,
    is:boolean
}

const checkTrue  = <T>(arg:T):Boolcheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        let a ={value:arg, is:false};          // making a interface 'a'
        return a;
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value:arg , is:false}
    }
    return {value:arg , is:!!arg}
}

// the above function has also the same work as the isTrue function


// implementing the extends property of interface

interface hasId {
    id:number
}

const isUser = <T extends hasId>(user:T):T => {   // the arg interface must have a id property 
    return user;
}

isUser({name:"Yash", id:23 , class:12})  // valid (id is mandatory)
// isUser({name:yash}) // not valid as id property is missing 


// get users property function using generics  
const getUserProperty = <T extends hasId , K extends keyof T>(users:T[], key:K):T[K][] => {
    // the above line T[k][] means to return the array of values for T[K] as T[K] will return a single value but there are multiple users then we need a array of values 
    return users.map(user => user[key]);
    // the return statement will map through every user of the array and will return the value for user[key] 
}

//only T denotes an element of the array of users 

const userArray = [
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      },
      {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
          "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
          }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        }
      },
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
]

console.log(getUserProperty(userArray , "id")); // it wil return a array of values for key id
console.log(getUserProperty(userArray , "email"));
