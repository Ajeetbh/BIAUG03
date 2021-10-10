// var a=10
// g();  //the code will stop here and exit
// console.log('the end') //this will never execute



//if while executing the try block ,something bad happens i.e, some error happens
//then the control will go into the catch block

// var a=10
// try{
//     var a=10
//     g()  //function does not exist
//     console.log('still in try block')
// }catch(error){
//     console.log('Hi i am the catch block and i handle your error of try block');

// }
// console.log('the end')


//if no error in try block then catch block not execute
// var a=10
// try{
//     var a=10
//     console.log(1)
// }catch(error){
//     console.log(2);
// }
// console.log(3) //1 3


//if error ocuur in catct=h block
// var a=10
// try{
//     var a=10
//     console.log(1)
//     g()
// }catch(error){
//     console.log(2);
//     go(); //this will stop program
// }
// console.log(3) //

//finally: if error occur or not finally block will execute
// var a=10
// try{
//     var a=10
//     console.log(1)
//     go()
// }catch(error){
//     console.log(2);
//     go();
// }finally{ //statementin finally block will execute any cost
// console.log(3) 
// }  //1 2 3



//throw keyword
//can we have user defined error
//for example:wrong username
//how should we throw that error so that the control will go to the catch block 
// var a=10
// try{
//     var a=10
//     //go()  //this we get system defined error
//     throw new Error("user no found ")//user defined error
//     console.log(1)
// }catch(error){
//     console.log(2);
// }



    var a=10
    throw new Error("user no found ")
    console.log(1)



