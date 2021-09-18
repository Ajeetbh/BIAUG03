// 1. function reusableFunction(){
//     console.log('Hi World')
// }
// reusableFunction();

// 2. function functionWithArgs(n1,n2){
//     console.log('Sum=',n1+n2)
//   }
//   functionWithArgs(8,3)

// 3. var myGlobal=10
// function fun1() {
//    oopsGlobal=5
// }
// function fun2() {
//   var output = "";
//   if (typeof myGlobal != "undefined") {
//     output += "myGlobal: " + myGlobal;
//   }
//   if (typeof oopsGlobal != "undefined") {
//     output += " oopsGlobal: " + oopsGlobal;
//   }
//   console.log(output);
// }

// 4. function myLocalScope() {
//     var myVar=10
//     // Only change code below this line
//     console.log('inside myLocalScope', myVar);
//   }
//   myLocalScope();
//   // Run and check the console
//   // myVar is not defined outside of myLocalScope
//   //console.log('outside myLocalScope', myVar)

// 5. var outerWear = "T-Shirt";
// function myOutfit() {
//   // Only change code below this line
//   var outerWear="sweater";
//  // return myOutfit;
//   // Only change code above this line
//   return outerWear;
// }
// console.log(myOutfit());

// 6. function timesFive(num){
//   return num*5;
// }
// var ans=timesFive(5)
// console.log(ans)

// 7. var sum = 0;
// function addThree() {
//   sum = sum + 3;
// }
// function addFive(){
//   sum=sum+5;
// }
// addThree();
// addFive();

// 8. var processed = 0;
// function processArg(num) {
//   return (num + 3) / 5;
// }
// processed=processArg(7)
// console.log(processed)

// 9. function welcomeToBooleans() {
//     return true; 
//   }

function trueOrFalse(wasThatTrue) {
    if(wasThatTrue){
      return "Yes,that was true";
      }
    return "No,that was false";
  }
  console.log(trueOrFalse(true));
  console.log(trueOrFalse(false));