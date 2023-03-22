// a class can implement a interface members 
// a class can also implement multiple interfaces 
// class User implements A,B{}  where A,B are interfaces 

interface hasfun{
    returnname(name:string):string;
}

// a class can implement a interface
class Person implements hasfun{
    returnname(name: string): string {
        return name;
    }
}

const p = new Person();
console.log(p.returnname("yash"));
export{}