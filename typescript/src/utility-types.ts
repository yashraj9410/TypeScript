// utility types help to create out own custom types 
// some of the utility type are :
// Partial --> allow to use any type partially 
// Required --> 
// ReadOnly --> 


// using the partial utility type 
interface assignment {
    name:String,
    class:number,
    checked?:boolean
}

// this function takes a partial utility type to update any property of the assignment interface 
const update_assignment = (assign:assignment , propsToUpdate:Partial<assignment>):assignment => {
    return {...assign , ...propsToUpdate};
}

const assign1:assignment = {
    name:"yash",
    class:23,
    checked:false
}

console.log(update_assignment(assign1 , {checked:true}));  // here we are overriding the property checked in the assign1



// using required and readonly 
// if we use Required<assignment> then this tells that all of the properties are required in the assignment type  