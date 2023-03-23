// type assertions in typescript is type casting 

// example 

 let c:unknown = 10;
  c = c as string;  // this casting techmique is called forced casting or force assertions because 10 cannot be directly casted to string type
  console.log(typeof c);

 // type assertions are useful when fetching a html element by id or tag name or any 

//  const assert = document.getElementById("img") as HTMLImageElement;

 // the abov e type assertion is infering the type of assert to HTMLimageElement