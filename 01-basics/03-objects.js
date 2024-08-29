//singleton if an object is made from constructor it is singleton but if it is made from literal it is not singleton
//object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name:"Taranum"
    age:18
    location:"Jaipur"
    isLoggedIn:false
    lastLoginDays:["Monday","Saturday"]
    [mysym]:"myKey1"    // syntax to use symbol as key in an object, you have to use square brackets 
}
console.log(Jsuser.age);
console.log(Jsuser[age]);