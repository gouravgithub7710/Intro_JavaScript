const user={
    username :"Gourav",
    loginCount:8,
    signIn:true,

    getuserDetails : function(){
        console.log("Got user detal form database");
        
    }
}

console.log(user.username);
console.log(user.getuserDetails());
