// index signatures

// index-signatures is basically providing the keys of any interface a type 

//exapmle

interface user {
    [index:string]:string | number,  // provideing signature for the key 
}

const user_1:user = {
    "name":"yash",
    "age":10
}

const a = 'name';
 console.log(user_1[a]);  // due to index signature we can acceess the name in this way 
 // without indexing the above line will throw error 
 