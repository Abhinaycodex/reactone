function say (){
    console.log("Hello World");
}

say();




const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


const abhi = {
    name: "Abhi",
    "full name": "Abhi raj gupta",
    age: 18,
    location: "delhi",
    email: "abhi@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser);
console.log(abhi)
x= abhi.name
console.log(x);

let tut= "bahi ji ka naam abhinay hai "

abhi.bolega =function(){
    console.log(`Hello World ki haal chal bhyi ${this.name}`);
}

JsUser.bolega =function(){
    console.log(`Hello World ki haal chal bhyi ${this.name}`);
}


console.log(abhi.bolega())
console.log(JsUser.bolega())

