//Javascript classes are  templates for javascript object
//objcet is instance of class
//class keyword used to create class in js
// class ClassName{
//     //body of class
// }

//constructor method
//it has to have the exact name 'constructor'
//it is executed automatically when a new object is created
//it is used to initalize object properties
//syntax
// class ClassName{
//     constructor(){
//         ....
//     }
// }

// class Student{
//     //body of class
//     constructor(name,phone){
//         //this is constructor body
//         this.name=name;
//         this.phone=phone;
//         console.log('Object Created..')
//     }
//     showDetails(){
//         console.log('Name:',this.name);
//         console.log('Phone:',this.phone)
//         console.log('................')
//     }
//     getName(){
//         return this.name.toUpperCase();
//     }
// }
// let s1=new Student("Ajeet",12345)
// s1.showDetails();
// console.log(s1.getName())


// class Employee{
//     //this function will help the class to get initialize with specific data
//     //for the attribute/entity/properties
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
//     //method
//     printEmpDetails(){
//         console.log("Employee Name:"+this.name);
//         console.log("Employee ID:",this.id);
//     }
// }
// var emp1=new Employee(1,'Ajeet');
// var emp2=new Employee(2,'Aditya')
// var emp3=new Employee(3,'amit')
// emp2.printEmpDetails()


//constructor taking without parameter
// class Employee{
//     //this function will help the class to get initialize with specific data
//     //for the attribute/entity/properties
//     constructor(){
//         this.id=1;
//         this.name='Ajay';
//     }
//     //method
//     printEmpDetails(){
//         console.log("Employee Name:"+this.name);
//         console.log("Employee ID:",this.id);
//     }
// }
// var emp1=new Employee();
// // var emp2=new Employee(2,'Aditya')
// // var emp3=new Employee(3,'amit')
// emp1.printEmpDetails()


//we can intialize the value outside without constructor
class Employee{
    //this function will help the class to get initialize with specific data
    //for the attribute/entity/properties
    // constructor(){
    //     this.id=1;
    //     this.name='Ajay';
    // }
    //method
    printEmpDetails(){
        console.log("Employee Name:"+this.name);
        console.log("Employee ID:",this.id);
    }
}
var emp1=new Employee();
// var emp2=new Employee(2,'Aditya')
// var emp3=new Employee(3,'amit')
emp1.id=3;
emp1.name='Amit'
emp1.printEmpDetails()