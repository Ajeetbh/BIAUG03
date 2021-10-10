//1.Iterate with JavaScript While Loops
// var myArray = [];
// var i=5;
// while(i>=0){
//   myArray.push(i)
//   i--;
// }
// console.log(myArray)

//2 Iterate with JavaScript For Loops
// var myArray = [];
// for(var i=1;i<=5;i++){
//   myArray.push(i);
// }
// console.log(myArray)

//3 Iterate Odd Numbers With a For Loop
// var myArray = [];
// for(var i=1;i<10;i+=2){
//   myArray.push(i)
// }
// console.log(myArray)

//4 Count Backwards With a For Loop
// var myArray = [];
// for(var i=9;i>0;i-=2){
//   myArray.push(i)
// }
// console.log(myArray)

//5 Iterate Through an Array with a For Loop
// var myArr = [ 2, 3, 4, 5, 6];
// var total=0
// for(var i=0;i<myArr.length;i++){
//   total+=myArr[i];
// }
// console.log(total)

//6 Nesting For Loops
// function multiplyAll(arr) {
//     var product = 1;
//     for(var i=0;i<arr.length;i++){
//       for(var j=0;j<arr[i].length;j++){
//         product *=arr[i][j]
//       }
//     }
//     return product;
//   }
//   var result=multiplyAll([[1,2],[3,4],[5,6,7]]);
//   console.log(result)

//7 Iterate with JavaScript Do...While Loops
// var myArray = [];
// var i = 10;
// do{
//   myArray.push(i);
//   console.log(myArray)
//   i++;
// }while(i<11)

//8 Replace Loops using Recursion

//9 Profile Lookup
// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];
// function lookUpProfile(name, prop) {
//   for(var i=0;i<contacts.length;i++){
//       if(contacts[i].firstName===name){
//           return contacts[i][prop] || "No such property"; 
//       }
//   }
//   return 'No sach contact'
// }
// var data=lookUpProfile("Akira", "likes");
// console.log(data)

//10 Generate Random Fractions with JavaScript
// function randomFraction() {
//     return Math.random();
//   }
//   console.log(randomFraction())

//11 Generate Random Whole Numbers with JavaScript
// function randomWholeNum() {
//     return Math.floor(Math.random()*10);
//   }
//   console.log(randomWholeNum())

//12 Generate Random Whole Numbers within a Range
// function randomRange(myMin, myMax) {
//     return Math.floor(Math.random() *(myMax-myMin+1))+myMin
//   }
//   console.log(randomRange(1,10))

//13 Use the parseInt Function
// function convertToInteger(str) {
//     return parseInt(str)
//  }
//  console.log(convertToInteger("56"));

//14 Use the parseInt Function with a Radix
// function convertToInteger(str) {
//     return parseInt(str,2)
// }
// console.log(convertToInteger("10011"));

//15 Use the Conditional (Ternary) Operator
// function checkEqual(a, b) {
//     return a==b?'Equal':'Not Equal';
// }
// console.log(checkEqual(1, 2));

//16 Use Multiple Conditional (Ternary) Operators
// function checkSign(num) {
//     return num==0? 'zero':num>0?'positive':'negative';
//  }
//  console.log(checkSign(10));

//17 Use Recursion to Create a Countdown
// function countdown(n){
//     if(n<1){
//       return [];
//     }
//     var countArray=countdown(n-1);
//     countArray.unshift(n)
//     return countArray;
//   }
//   console.log(countdown(5))

//18 Use Recursion to Create a Range of Numbers
// function rangeOfNumbers(startNum, endNum) {
//     if (endNum - startNum ==0) {
//       return [startNum];
//     } else {
//       var numbers = rangeOfNumbers(startNum, endNum - 1);
//       numbers.push(endNum);
//       return numbers;
//     }
//   }
//   console.log(rangeOfNumbers(1,5))