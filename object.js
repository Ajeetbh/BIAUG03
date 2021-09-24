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
// let person={
//     firstName:'Ajeet',
//     lastName:'Bharti',
//     sayHello(){
//         console.log("Hello ! i am "+this.firstName+" and i have a "+car.brand+" Car");
//     }
// };
// let car={
//     brand:'Tata',
//     model:'Safari'
// }
// person.sayHello();


// function print(data){
//     console.log(data)
// }
// var student={
//     name:'Ajeet',
//     age:12,
//     isGraduated:false,
//     fun:print
// } 
// console.log(student.age)
// student.fun('ajeet')

// var print=function(data){
//     console.log(data)
// }                          // print is function
// var student={
//     name:'Ajeet',
//     age:12,
//     isGraduated:false,
//     fun:function(data){
//         console.log(data)   // fun is method because function define inside object is called fun is methode of student
//     }
// } 
// console.log(student.age)
// student.fun('ajeet')


// var print=function(data){
//     console.log(data)
// }
// var student={
//     name:'Ajeet',
//     age:12,
//     isGraduated:false,
//     fun:function(data){
//         console.log(data)
//         return 'hi'
//     }
// } 
//console.log(student.age)
//student.fun(9)  //9
//console.log(student.fun(12))  //12 ,hi
// var msg=student.fun(10)
// console.log(msg) // 10 hi


var student={
    address:{
        city:'Banglore', //we can define another object inside another object
        state:'Karnataka',
        country:'India'
    },
    name:'Ajeet',
    age:12,
    isGraduated:false,
    printDetails:function(){
        //trying to access the student attribute in the student method:::this method
        //this is keyword which is only used inside the method of the object
        console.log(this.city)
        console.log(this.address.city)
        console.log(this.name)
        console.log(this.age)
        console.log(this.isGraduated)
    }
} 
student.printDetails()
//console.log(student)
//student.address.city