class User{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`user name is ${this.username}`);
        
    }
}

class Teacher extends User{

    Constructor(username,email,pass)
    {
       Super(username)
        this.email=email
        this.pass=pass
    }

    addcources(){
        console.log(`new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@gmail.com",123)
chai.addcources()

const tea = new User("tea")
tea.logme()

console.log(chai===tea);
