//behaviour of objects 

function createPerson({name,age} : {name:string , age:number}){
    console.log(name,age);
}
createPerson({name:"Yash" ,age:24}) // a new object has been created

//returnng an object using function
function createCourse():{name:string , price:number}{
    return {name:"reactjs", price:399}
}

//type alias -> we can create our own type 
type User ={
    name:string,
    email:string,
    isActive:boolean
}

//creating function that returns a type user 
function createUser(user:User):User{
    return {name:"", email:"", isActive:true}
}
createUser({name:"Yash", email:"ada@asd.com", isActive:true})

export{}

type  s = string
type userPass ={
    name:s
    readonly id:string   //cannot be manipulated 
    cred?:number         //optional property 
}
let me:userPass={
    name:"Yash",
    id:"213"
}  

//me.id.push="13442"; cannot be assigned beacause it is a readonly value 
//type alldetails = cardnumber & cardname & {cvv:number }
//above we are mixing the different types i.e cardnumber is of type number and carname is string 
