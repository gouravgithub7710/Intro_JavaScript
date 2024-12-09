//ES6 ke baad ke js

class User{
    constructor(username,email,pass)
    {
        this.username=username;
        this.email=email
        this.pass=pass
    }

    encryptPassword(){
        return `${this.pass}abc`
    }
}

const chai = new User("chai","chai@gmail.com",1234);

console.log(chai.encryptPassword());
