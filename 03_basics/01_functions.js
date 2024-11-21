
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName();
// //function for add 2 num

// function addtwonum(a , b){
// return a+b;
// }


// function multipletwonum(a , b){
//     return a*b;
// }

// console.log(addtwonum(2,2));
// console.log(`this is multiple of two given num answer : ${multipletwonum(2,2)}`);


// function loginusermsg(username){
//     if(username===undefined){console.log("pls enter the username"); return;}
//     else return `${username} just logged in`;
// }

// console.log(loginusermsg("Gourav"));
// console.log(loginusermsg());

// function calCartPrice(...num1){
// return num1;
// }

// console.log(calCartPrice(200));
// console.log(calCartPrice(200,4324,4234,54,654,65));

// const user={
//     username:"Gourav",
//     price:199
// }

// function handelobject(anyobject){
// console.log(`Username is ${anyobject.username} and ItemId is ${anyobject.itemID} or price is ${anyobject.price}`);
// }

// // handelobject(user);
// handelobject({
// username:"Gourav",
// itemID:1234,
// price:199
// });

const mynewArray =[200,3000,4000,5000,6000];

function returnsecondvalue(getArray)
{
    return getArray[1];
}
console.log(returnsecondvalue(mynewArray));
