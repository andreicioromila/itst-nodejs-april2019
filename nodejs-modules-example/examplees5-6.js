// var person= { sayHello:function()
// {
//   console.log(`hello ${this.name}`)
// },
//   name:'Node'
// }
// person.sayHello()
//
// index= 10
// const string='hello'
// var index=1
// let ind=3
// ind=4
// // string='hello guys'
//
// console.log(string,index,ind)

// let person = {
//   nume:"Popescu",
//   prenume :"Andrei",
//   age:4
// }
//
// let {nume,prenume,age}=person
// console.log(nume)

// function sayHello(name='guys'){
//   console.log(`hello ${name}`)
// }
//
// sayHello()
// sayHello('Andrei')

"use strict";

class Person {
  constructor() {
    this.id=1
}
setName(name){
    this.name=name
}
sayHello(){
    console.log(`Hello ${this.name}`)
}
}

let persona= new Person()
persona.name='Popescu'
persona.sayHello()