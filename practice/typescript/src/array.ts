//array in typescript 

const names:[] =[] // here we have created names of type array but has default value type never thet means we cannot push any value to the array with this syntax

const names1:Array<string>=[]; //proper definition

//creating a type user 
type user={
    name:string
    age:number 
}

//creating an array allUsers and pushing the values of type user like array of objects 
const allUsers:Array<user> =[]
allUsers.push({name:"Yash",age:34})
console.log(allUsers)

export{}