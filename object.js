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

//object holds simply attributes and method
//mobile is an object
//attribute/entity/properties of mobile-size,color,weigth


// var student={
//     address:{
//         city:'Banglore', //we can define another object inside another object
//         state:'Karnataka',
//         country:'India'
//     },
//     name:'Ajeet',
//     age:12,
//     isGraduated:false,
//     printDetails:function(){
//         //trying to access the student attribute in the student method:::this method
//         //this is keyword which is only used inside the method of the object
//         console.log(this.city)
//         console.log(this.address.city)
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.isGraduated)
//     }
// } 
// student.printDetails()
// //console.log(student)
// //student.address.city

// var student={
//     address:{
//         city:'Banglore', //we can define another object inside another object
//         state:'Karnataka',
//         country:'India'
//     },
//     name:'Ajeet',
//     age:12,
//     isGraduated:false,
//     printDetails:function(){
//         console.log(this.city)
//         console.log(this.address.city)
//         console.log(this.name)
//         console.log(this.age)
//         console.log(this.isGraduated)
//     }
// } 
//student.printDetails()
//console.log(student)
//student.address.city

//this loop is used to iterate over the properties of object
/*for(var key in object){
    ...
}*/


// delete student.address //if i want to delete the properties of object

// student.lastname='Kumar' //if i want to add the properties 
// for(var key in student){
//     console.log(key)      //if want to print key
// }

// for(var key in student){
//     console.log(key+ ':' + student[key])    //if I want to print key with value
// }

// console.log(student.age)    //if i want to access of properties of object
// console.log(student['age'])

//check whether 'address' properties is present or not
//for(var key in student){
    // if(key=='address'){
    //     console.log(student.address)
    // }
    // else{
    //     student.address='delhi'
    //     console.log(student.address)
    // }
// }
// console.log(student)

// delete student.address
// if('address' in student){
//     console.log(student.address)
// }
// else{
//     student.address='delhi'
//     console.log(student.address)
// }

var emp={
    empID:1,
    name:'Ajeet',
    address:'Mumbai',
    printEmpDetails:function(){
        console.log("the Employee Id is "+ this.empID+",Name of Employee is "+this.name)
    }
}
emp.printEmpDetails()








