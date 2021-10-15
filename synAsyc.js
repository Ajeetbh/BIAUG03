//Synchronous

// const fun2=()=>{
//     console.log('fun2 is starting')
// }
// const fun1=()=>{
//     console.log('fun1 is starting');
//     fun2();
//     console.log('fun1 is ending')
// }
// fun1();      //fun1 is starting
               //fun2 is starting
              //fun1 is ending



//Asynchronous
// const fun2=()=>{
//     setTimeout(()=>{
//         console.log('fun2 is starting');
//     },3000);
// }
// const fun1=()=>{
//     console.log('fun1 is starting');
//     fun2();
//     console.log('fun1 is ending')
// }
// fun1();       //fun1 is starting
                //fun1 is ending
               // fun2 is starting :it executed after 3 sec
               
// function download(url,callback){
//     setTimeout(()=>{
//         console.log(`Downloading ${url}`);
//         callback(url)
//     },5000)
// }           
// function process(picture){
//     console.log(`Processing ${picture}`)
// }   
// var url='http://www.google.com'
// download(url,process);
// console.log('I will execute before download function')  //I will execute before download function
                                                            //Downloading http://www.google.com
                                                             //Processing http://www.google.com



//callback

//Callback Function: Any function that is passed as an argument is called a callback function
// const funA=()=>{
//     console.log('Welcome FunA')
// }               
// const funB=()=>{
//     console.log('Welcome FunB');
// }
// funA();
// funB(); //Welcome FunA
         //Welcome FunB


//Second def of callback fun:
//A callback is function that is to be executed after another function has finished executing--hence the name'callback'

// const funA=()=>{
//     setTimeout(function(){
//         console.log('Welcome FunA')
//     },5000);
// }               
// const funB=()=>{
//     console.log('Welcome FunB');
// }
// funA();
// funB();


// const perOne=(friend)=>{
//     console.log(`I am busy right now. I am talking to ${friend}.I will call you back.`);
// }

// const perTwo=()=>{
//     console.log(`Hey what's up.I call back you dekha`);
// }
// perOne('Ajay');
// perTwo()       //I am busy right now. I am talking to Ajay.I will call you back.
                 //Hey what's up.I call back you dekha

//here callback
// const perOne=(friend,callfrnd)=>{
//     console.log(`I am busy right now. I am talking to ${friend}.I will call you back.`);
//     callfrnd();
// }

// const perTwo=()=>{
//     console.log(`Hey what's up.I call back you dekha`);
// }
// perOne('Ajay',perTwo);
//         //I am busy right now. I am talking to Ajay.I will call you back.
//                  //Hey what's up.I call back you 


// function download(url,callback){
//     console.log(`Downloading ${url}`);
//     callback(url)
// }           
// function process(picture){
//     console.log(`Processing ${picture}`)
// }   
// var url='http://www.google.com'
// download(url,process);
// console.log('I will execute before download function') //Downloading http://www.google.com
//                                                     //Processing http://www.google.com
//                                                     //I will execute before download function



//Promise

// Promise are used to handle asynchronous operration
// in javascript .they are easy to manage when dealing 
// with multiple asynchronous operation where callback can 
// create callback hell leading to unmanageable code .

// A Promise is an object that keep track about whether
// a certain event has happened already or not .

//determine what happens after the events has happend.

//1.pending
//2.resolve
//3.reject



// const pobj1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let roll_no=[1,2,3,4,5];
//         //resolve(roll_no);
//         reject('Error while communicating');
//     },2000);
// })
// //..promise consume
// pobj1.then((rollno)=>{
//     console.log(rollno);
// }).catch((error)=>{
//     console.log(error)
// })                                                    

//create promise object
//use promise object-important
// var promiseObj=new Promise(function(resolve,reject){
//     const firstName='Rahul';
//     const secondName='Kumar';
//     if(firstName==secondName){
//         resolve() //for success
//     }else{
//         reject(); //for error,then throw error
//     }
// })
// //promiseObj.then().catch()
// promiseObj.then(function(){
//     console.log('then execute on success')
// }).catch(function(){
//     console.log('then execute on error')
// });



//Closure: closure in action that is inner function can have access 
//to outer function variables as well as all the global variables.

// const outerFun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum=a+b;
//         console.log(`the sum of two no is ${sum}`);
//     }
//     innerFun();
// }
// outerFun(5);


//the return statement does not execute the inner function
//is executed only when followed by (),but rather the 
//return statement returns the entire body of the function

// const outerFun=(a)=>{
//     let b=10;
//     const innerFun=()=>{
//         let sum=a+b;
//         console.log(`the sum of two no is ${sum}`);
//     }
//     return innerFun;
// }
// let inner=outerFun(5);
// //console.dir(inner);
// inner();


//sir
// function f1(){
//     var num1=10;
//     function f2(){
//         console.log(num1);
//     }
//     return f2
// }
// //access the in-context data outside as well.
// var f3=f1()
// //console.log(num1) //undefined:num1 in inside f1 block/context
// f3()


function f1(d){
    function f2(dd){
        console.log(d)
        console.log(dd)
    }
    return f2;
}
var f3=f1(12)
f3(13)