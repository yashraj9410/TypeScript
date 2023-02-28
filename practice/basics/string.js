var name = "yash\t"
//it will be counted as 5 because \t is escape sequence character
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.slice(2,4));
console.log(name.slice(2));
console.log(name.replace("ya","ha"));

let friend = "raj";
console.log(name.concat("is friend of", friend)) // can also use concat operator  

//strings are immutable
for(var i=0;i<friend.length;i++){
    console.log(friend[i]);
}

