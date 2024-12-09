let name = "Gourav        "
let name1 = "Gourav"
// console.log(name.length);
// console.log(name.trim().length);


//  console.log(name.truelength);

let myheroes =["thor","spiderman"]


let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);  
    }
}

Object.prototype.Gourav=function(){
    console.log(`Gourav is present in all the objects`);
}

// myheroes.Gourav();
// heropower.Gourav();

//inheritance------------------

const user={
    name:"chai",
    email:"chai@gmail.com"
}

const teacher={
    makevideo:true
}

const teachingsupport={
    isAvaliable:false
}

const TAsupport={
    makeassigment:'js',
    fulltime:true,
    __proto__:teachingsupport
}

teacher.__proto__=user;

//modern syntex
Object.setPrototypeOf(teachingsupport,teacher)

let anotherusername = "chaiorcode      "

String.prototype.trueLength = function(){
    // console.log(this);
    // console.log(this.name);
    console.log(`truelength is ${this.trim().length}`);
}

anotherusername.trueLength();