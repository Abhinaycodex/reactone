
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
tinderUser.profilePic = "https://i.imgur.com/0nJhIMG.jpg"


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

console.log(tinderUser);
console.log(course);
// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor);


function  loginUserMessage (username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("abhi"))

const Array = [200, 400, 100, 600]

function returnthirdvalue(getArray){
    return getArray[2]
}

function returnthirdvalue(getArray){
    return getArray[3]
}

console.log(returnthirdvalue(Array));



(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('Abhinay')


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}



const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

Object.values(myObject).forEach(value => {
    console.log(value);
});