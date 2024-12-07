//promises consume :----
//fetch('https://something.com').then().catch().finally()

// const promiseOne=new Promise(function(resolve,reject){
//     //do and asunc task

//     setTimeout(function(){
//         console.log('async task is complete');   
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function(){
//     console.log('promise consumed');
    
// })



// //same as above 

// new Promise(function(resolve,reject){

//     setTimeout(function(){
// console.log("Async task_2 is done");
// resolve();
//     },1000)
// }).then(function(){
//     console.log('Async_2 is resolved');
// })


// const promiseThree = new Promise(function(resolve,reject){

//     setTimeout(function(){
//     resolve({username:"chai",email:"chai@examplegmai.com"})
//     }, 1000);
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let error = false;
//         if(!error){
//             resolve({username:"hitesh",password:"123"});
//         }else{
//             reject('ERROR,Something went rong')
//         }
//     }, 1000);
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
// console.log(username);
// })
// .catch(function(error){
//     console.log("Error");
// })
// .finally(()=>{
//     console.log("The Promise is either resolved or rejected");   
// })


// const promiseFive = new Promise(function(resolved,reject){
//     setTimeout(() => {
//         let error = false;
//         if(!error){
//             resolved({username:"Java", password:"1234"});
//         }else{
//             console.log("JS went wrong");
            
//         }
//     }, 1000);
// })

// promiseFive
// .then(function(user){
//     console.log(user.username);
//     console.log(user.password);
// })
// .catch(function(error){
//     console.log("this is an erorr");
// })
// .finally(function(){
//     console.log("this is last line finally block is excuted");
    
// })


fetch('https://api.github.com/users/gouravgithub7710')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);
})
.catch((error)=> console.log(error))
