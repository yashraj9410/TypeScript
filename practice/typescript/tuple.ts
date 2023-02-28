//tuple are only used in typescript and not in javascript 
//tuuple are used when we have structured data to be stored'
//example

let user : [string,number,boolean]
//the above resembles the structured storage of data in the tuple user 
user=["yash",21,true];

//we can also create a type 
type usercred =[string,number]
let user1:usercred =["yash",32];
console.log(user1)

user.push(true); // this will allow to push that is not correct 

 