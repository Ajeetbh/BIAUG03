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

// 10. function trueOrFalse(wasThatTrue) {
//     if(wasThatTrue){
//       return "Yes,that was true";
//       }
//     return "No,that was false";
//   }
//   console.log(trueOrFalse(true));
//   console.log(trueOrFalse(false));

// 11. function testEqual(val) {
//     if (val==12) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   console.log(testEqual(12));

// 12. function testStrict(val) {
//     if (val===7) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   console.log(testStrict(7));

// 13. function compareEquality(a, b) {
//     if (a == b) {
//       return "Equal";
//     }
//     return "Not Equal";
//   }
//   console.log(compareEquality(10, "10"));

// 14. function testNotEqual(val) {
//     if (val!=10) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }
//   console.log(testNotEqual(99));

// 15.  function testStrictNotEqual(val) {
//     if (val!==17) { 
//       return "Not Equal";
//     }
//     return "Equal";
//   }
//   console.log(testStrictNotEqual(10));

// 16. function testGreaterThan(val) {
//     if (val>100) {  
//       return "Over 100";
//     }
//     if (val>10) { 
//       return "Over 10";
//     }
//     return "10 or Under";
//   }
//   console.log(testGreaterThan(150));

// 17. function testGreaterOrEqual(val) {
//     if (val>=20) { 
//       return "20 or Over";
//     }
//     if (val>=10) {  
//       return "10 or Over";
//     }
//     return "Less than 10";
//   }
//   console.log(testGreaterOrEqual(100));

// 18. function testLessThan(val) {
//     if (val<25) {  
//       return "Under 25";
//     }
//     if (val<55) {  
//       return "Under 55";
//     }
//     return "55 or Over";
//   }
//   console.log(testLessThan(50));

// 19. function testLessOrEqual(val) {
//     if (val<=12) {  // Change this line
//       return "Smaller Than or Equal to 12";
//     }
//     if (val<=24) {  // Change this line
//       return "Smaller Than or Equal to 24";
//     }
//     return "More Than 24";
//   }
//   console.log(testLessOrEqual(15));

// 20. function testLogicalAnd(val) {
//     if (val>=25 && val<=50) {
//         return "Yes";
//     }
//     return "No";
//   }
//   console.log(testLogicalAnd(30));

// 21. function testLogicalOr(val) {
//     if (val<10 || val>20) {
//       return "Outside";
//     }
//     return "Inside";
//   }
//   console.log(testLogicalOr(15));

// 22.function testElse(val) {
//     var result = "";
//     if (val > 5) {
//       result = "Bigger than 5";
//     }
//   else {
//       result = "5 or Smaller";
//     }
//     return result;
//   }
//   console.log(testElse(4));

// 23. function testElseIf(val) {
//     if (val > 10) {
//       return "Greater than 10";
//     }
//     else if (val < 5) {
//       return "Smaller than 5";
//     }else{
//     return "Between 5 and 10";
//     }
//   }
//   console.log(testElseIf(7));

// 24. function orderMyLogic(val) {
//     if (val < 5) {
//       return "Less than 5";
//     } else if (val < 10) {
//       return "Less than 10";
//     } else {
//       return "Greater than or equal to 10";
//     }
//   }
//   console.log(orderMyLogic(7));

// 25.function testSize(num) {
//     if(num<5){
//       return 'Tiny'
//     }else if(num<10){
//       return 'Small'
//     }else if(num<15){
//       return 'Medium'
//     }else if(num<20){
//       return 'Large'
//     }else if(num>=20){
//       return 'Huge'
//     }
//   }
//   console.log(testSize(7));

// 26. function caseInSwitch(val) {
//     var answer = "";
//     switch(val){
//       case 1:
//       answer='alpha';
//       break;
//       case 2:
//       answer='beta';
//       break;
//       case 3:
//       answer='gamma';
//       break;
//       case 4:
//       answer='delta';
//       break;
//     }
//     return answer;
//   }
//   console.log(caseInSwitch(2));

// 27. function switchOfStuff(val) {
//     var answer = "";
//     switch(val){
//       case 'a':
//       answer='apple'
//       break;
//       case 'b':
//       answer='bird'
//       break;
//       case "c":
//       answer='cat'
//       break;
//       default:
//       answer='stuff'
//     }
//     return answer;
//   }
//   console.log(switchOfStuff('a'));

// 28. function sequentialSizes(val) {
//     var answer = "";
//     switch(val){
//       case 1:
//       case 2:
//       case 3:
//       answer="Low"
//       break;
//       case 4:
//       case 5:
//       case 6:
//       answer='Mid'
//       break;
//       case 7:
//       case 8:
//       case 9:
//       answer="High"
//       break;
//     }
//     return answer;
//   }
//   console.log(sequentialSizes(8));

// 29 function chainToSwitch(val) {
//     var answer = "";
//     switch(val){
//     case "bob": 
//       answer = "Marley";
//       break;
//     case 42: 
//       answer = "The Answer";
//       break;
//     case 1:
//       answer = "There is no #1";
//       break;
//     case 99:
//       answer = "Missed me by this much!";
//       break;
//     case 7:
//       answer = "Ate Nine";
//       break
//     }
//     return answer;
//   }
//   console.log(chainToSwitch(7));

function isLess(a, b) {
   return a<b
 }
 console.log(isLess(10, 15));