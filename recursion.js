// function a(){
//     console.log("I am in A")
//     b()
// }
// function b(){
//     console.log("I am in B")
// }
// a()  //I am in A
//         I Am in B


// function a(){
//     console.log("I am in A")
//     a()
// }
// function b(){
//     console.log("I am in B")
// }
// a()  //I am in A  =are infinite time
//      //RangeError Maximum call stack size exceeded

//to avoid the error of infinte time to use (Base condition)
// i to goven 0 value
//i=3
//output: 3,2,1,0
// function printRangeOfNumber(i){
//     if(i<0){
//         return 
//     }
//     console.log(i);
//     i=i-1
//     printRangeOfNumber(i);
// }
// printRangeOfNumber(3)  //3 2 1 0

// function printRangeOfNumber(i){
//     console.log("printRangeOfNumber("+i+")");
//     if(i<0){
//         return 
//     }
//     console.log(i);
//     i=i-1
//     printRangeOfNumber(i);
//     //console.log(i);
// }
// printRangeOfNumber(3)  // 3 2 1 0

// function printRangeOfNumber(i){
//     //console.log("printRangeOfNumber("+i+")");
//     if(i<0){
//         return 
//     }
//     console.log(i);
//     i=i-1
//     printRangeOfNumber(i);
//     console.log(i);
// }
// printRangeOfNumber(3)  //3 2 1 0 -1 0 1 2


// function printRangeOfNumber(i){
//     //console.log("printRangeOfNumber("+i+")");
//     if(i<0){
//         return 
//     }
//     i=i-1
//     printRangeOfNumber(i);
//     console.log(i);
// }
// // -1 0 1
// printRangeOfNumber(2)  

// function printRangeOfNumber(i){
//     //console.log("printRangeOfNumber("+i+")");
//     if(i<0){
//         return 
//     }
//     i=i-1
//     printRangeOfNumber(i);
//     i++
//     console.log(i);
// }
// //2: 0 1 2
// printRangeOfNumber(2)  


// var j=0;
// function printRangeOfNumber(i){
//     //console.log("printRangeOfNumber("+i+")");
//     if(j>i){
//         return 
//     }
//     console.log(j);
//     j++;
//     printRangeOfNumber(i); 
// }
// printRangeOfNumber(2) //0 1 2

//Factorial
//f(5)=5*4*3*2*1
//f(4)=4*3*2*1

// function f(i){
//     //base condition
//     if(i<=1){
//         return 1
//     }
//     return i*f(i-1)
// }
// var result=f(3)
// console.log(result) //6

function f(i){
    //base condition
    if(i<=1){
        return 1
    }
    return i*f(i-1)*f(i-2)
}
var result=f(4)
console.log(result) //48



