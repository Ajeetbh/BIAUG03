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

// function f(i){
//     //base condition
//     if(i<=1){
//         return 1
//     }
//     return i*f(i-1)*f(i-2)
// }
// var result=f(4)
// console.log(result) //48





// 2. function triangleSum(num,sum=0){
//     if(num<=0){
//         return sum;
//     }
//     return triangleSum(num-1,sum+num)
// }
// var result=triangleSum(3)
// console.log(result)

// 3.  function checkSort(arr,l){
//     if(l==0 || l==1){
//         return 1;
//     }
//     if(arr[l-1]<arr[l-2]){
//         return 0;
//     }
//     return checkSort(arr,l-1)
// }
// let arr = [2,3,6,9];
// let l = arr.length;
// //console.log(l)
// if (checkSort(arr, l) == 1)
//     console.log("True");
// else
//     console.log("False");

// 3.  function checkSort(arr,l,x){
//     // if(l==0 || l==1){
//     //     return 1;
//     // }
//     if(arr[l-1]==x){
//         return 1;
//     }
//     return checkSort(arr,l-1,x)
// }
// let arr = [2,3,6,9];
// let l = arr.length;
// let x=3;
// //console.log(l)
// if (checkSort(arr, l ,x) == 1)
//     console.log("True");
// else
//     console.log("False");

//4
// function search(arr,l,r,x){
//     if(r<l){
//         return -1;
//     }
//     if(arr[l]==x){
//         return l;
//     }
//     if(arr[r]==x)
//     {
//         return r;
//     }
//     return search(arr,l+1,r-1,x)
// }
// let arr = [2,3,6,9,10];
// let n = arr.length;
// let x=3;
// if (search(arr,0,n-1,x)!= -1)
//     console.log("True");
// else
//     console.log("False");

//5
// function search(arr,l,r,x){
//     if(r<l){
//         return -1;
//     }
//     if(arr[l]==x){
//         return l;
//     }
//     if(arr[r]==x)
//     {
//         return r;
//     }
//     return search(arr,l+1,r-1,x)
// }
// let arr = [2,3,6,9,10];
// let n = arr.length;
// let x=90;
// var index=search(arr,0,n-1,x);
// if(index != -1){
//     console.log(`${index}`)
// }
// else{
//     console.log(-1)
// }

//9
// function reverseArray(arr,n){
//     if(n == 0){
//        return [];
//     }
//     return [arr[n-1]].concat(reverseArray(arr,--n));
//   }
//   console.log(reverseArray([3,6,2,7,8],5));
  
//8
function palindrome(arr,l,r)
    {
        if (l>=r) {
            return 1;
        }
        if (arr[l] == arr[r]) {
            return palindrome(arr,l+1,r-1);
        }
        else {
            return 0;
        }
    }
    let arr=[1,2,3,2,1];
    let n = arr.length;
    if (palindrome(arr, 0, n-1) == 1)
        console.log("true");
    else
        console.log("false");