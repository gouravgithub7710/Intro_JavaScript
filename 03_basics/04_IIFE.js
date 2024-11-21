//Immediate invoke function exprecsion(IIFE)


//normal----------
// function chai()
// {
//    console.log("Chai pe lo");   
// }

// chai();

//---iife--------------------

(function chai()
{
   console.log("Chai pe lo");   
})();

( () => {
    console.log("Hello");
} ) ()