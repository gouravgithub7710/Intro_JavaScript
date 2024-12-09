class user{
    constructor(username){
        this.username=username
    }

    logme(){
        console.log(`user: ${this.username}is login`);
        
    }

  static createID(){
        return`123`
    }
}

const hitesh = new user('Hitesh')
console.log(hitesh.createID());


class Teacher extends user{
    Constructor(username,email){
        uper(username)
        this.email=email
    }

}
const iphone = new Teacher("iphone","i@gmail.com")
// console.log(iphone);
iphone.logme();

console.log(iphone.createID());
