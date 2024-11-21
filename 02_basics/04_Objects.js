// const tinder = new Object();
// const tinder2 = {};

// console.log(tinder);
// console.log(tinder2);

// tinder.id = 123;
// tinder.username = "xyz";
// tinder.useremail = "xyz1234@tinder.com";

// console.log(tinder.id);
// console.log(tinder.useremail);

// const regularUser ={
//   email :"some@gmail.com",
//   fullname:{
//     userfullname:{
//       firstname:"Gourav",
//       lastname:"Giri"
//     }
//   }
// }
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 ={
//   1:"a",
//   2:"b",
//   3:"c"
// }

// const obj2={
//   4:"d",
//   5:"e"
// }

// // const obj3={obj1,obj2};
// // console.log(obj3);

// const obj3 = Object.assign(obj1,obj2);
// const obj4 = {...obj1,...obj2}
// console.log(obj3);
// console.log(obj4);

// console.log(Object.keys(obj4));
// console.log(Object.values(obj4));
// console.log(Object.entries(obj4));

const course ={
    coursename:"jsinhindi",
    price:999,
    courseInstructor:"hitesh"
  }
  ///.......................DESTRUCTERING....................
  const {courseInstructor,price}=course
  console.log(courseInstructor);
  console.log(price);
  
  