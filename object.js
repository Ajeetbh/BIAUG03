// let student={
//     firstName:'Ajeet',
//     lastName:'Bharti'
// };
// student.age=25
//1 method student.sayHello=function(){
//     console.log('Hello')
// }
// student.sayHello();

// 2 method function greet(){
//     console.log("Hi")
// }
// student.sayHello=greet;
// student.sayHello();
let person={
    firstName:'Ajeet',
    lastName:'Bharti',
    sayHello(){
        console.log("Hello ! i am "+this.firstName+" and i have a "+car.brand+" Car");
    }
};
let car={
    brand:'Tata',
    model:'Safari'
}
person.sayHello();
