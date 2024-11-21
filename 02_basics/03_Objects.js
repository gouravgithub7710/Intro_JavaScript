//objects


//--singleton

//--objects literals

const jsuser={
  name :"Gourav",
  age : 21,
  email:"gouravgiri2004@gmail.com",
  islogin:false
}

console.log(jsuser.islogin);
console.log(jsuser.email);

jsuser.email="gouravgiri4343@gmail.com";

console.log(jsuser.age);

jsuser.greeting = function()
{
  console.log(`Hello js user,${this.name}`);
}

jsuser.greetingtwo = function()
{
  console.log("Hello js user");
}
console.log(jsuser.greetingtwo());
console.log(jsuser.greeting());

