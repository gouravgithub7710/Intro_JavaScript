// //...Arrays

// const myArray = [0,1,2,3,4,5,6];
// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[0]);
// myArray.push(19);
// console.log(myArray);

// myArray.unshift(23); //add in frount
// console.log(myArray);

// myArray.shift();
// console.log(myArray);


let myArr = [1,2,3,4,5,6,7,8,9,10];
console.log(myArr);

let arr2 = myArr.slice(0,4);
console.log(arr2);
console.log(myArr);
console.log("--------------------");

let arr3 = myArr.splice(0,4); //splice modife the original array
console.log(arr3);
console.log(myArr); 