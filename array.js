//var data=[] //empty array
// var data=[1,2,3,4,5,6,7]
// console.log(data.length)
//index: start from 0
//data: 0 to 6    for last=length-1
// console.log(data[6])  //7

// console.log(data[30]) //undefined

//console.log(data[200]==undefined)  //true
// var data1=new Array()
// console.log(data1.length)

//var data=['rahul','kumar',12,false,null,undefined,{}]
//console.log(data.length)
// data[7]='node'
// console.log(data.length)//8
// console.log(data)
// data[10]='node'
// console.log(data.length) //11
// console.log(data[10])
// console.log(data)  ['rahul','kumar',12,false,null,undefined,{},<3 empty items>,'node']

// data.length=2
// console.log(data)  //rahul kumar
// data.length=20
// console.log(data)  //update the data
//                    //rahul,kumar,<18 empty items>
// console.log(data.length)  //20

// var x=[1,2,5]
// console.log(x.length)
// var y=[3,4]
// console.log(y.length)
// var z=x+y
// console.log(z.length)

//STACK
// var stack=[1,2,3,4,5]
// stack.push(12)
// console.log(stack)  //add the data at end
// stack.pop()
// console.log(stack)   //delete the data form end

// stack.unshift(15)  // add 15 to begning of array
// console.log(stack)
// stack.shift()
// console.log(stack) // delete form begining
 
// console.log(stack.indexOf(3)) //4
// console.log(stack.indexOf(40)) //-1
//  1. find the index of Array
//  2. to know whether the given element in there in array or not

//QUEUE
//var queue=['ajeet','ashitha','jayesh','kailash','ayyappa']
//insert tha data in queue-from rear(back,end)--push
//delete the data form queue- from the front(begning)--shift
// queue.push('milten')
// queue.shift()
// console.log(queue) //[ 'ashitha', 'jayesh', 'kailash', 'ayyappa', 'milten' ]


//Splice
//delete the range of element from the array
var mark=[1,12,14,17,18,0]
//mark.splice(0,3) //0 is the index,3 number from 0th index will be deleted
// console.log(mark) //[17,18,0]
// mark.splice(3,1)
// console.log(mark) //[1,12,14,18,0]
 
var age=[19,18,10]
//age.splice(index,0,ele1,ele2,ele3..)
// age.splice(0,0,1,2,3)
// console.log(age)  //[1,2,3,19,18,10]
// age.splice(1,0,1,2,3) //[19,1,2,3,18,10]
// age.splice(2,0,1,2,3) //[19,18,1,2,3,10]
// age.splice(4,0,1,2,3)//[19,18,10,1,2,3]
// age.splice(6,0,1,2,3)// [19,18,1,2,3]

// age.splice(1,1,1,2)//[19,1,2,10]
// console.log(age);
// age.splice(1,3,1,2)//
// console.log(age)//[19,1,2]
// age.splice(0,3,1,2)//[1,2]
// console.log(age)

//SLICE
// var age=[1,2,3,4,5,11,6,7,8,9,0]
// var newAge=age.slice(2,5) //start from index 2 to 4
// console.log(newAge)//[3,4,5]
// var newAge=age.splice(2,3) [1,2,11,6,7,8,9,0]
 
//Sorting
//var age=[10,1,3,2,5,4,7,9,6]
// age.sort()
// console.log(age)

// console.log('10'<'2')

 var age=[10,1,3,2,5,4,7,9,6]
// age.sort(function(a,b){
//     if(a>b){
//         return 1
//     }
//     if(a<b){
//         return -1
//     }
// })//passing a function to a function is called callback function

age.sort((a,b)=>a-b) // arrow function
console.log(age)