// function jarvis(){
//     console.log("Hey I am jarvis")
//     for(var a =1 ; a<4 ; a++){
//         console.log(a)
//     }
//     console.log("Bye Bye from Jarvis")
// }
// jarvis()
// function eat(a,b){
//     if(a=="breakfast"){
//         console.log("Bread")
//     }  
//     if(b=='morningTea'){
//         console.log('Coffie or tea')
//     }
//     if(a=="lunch"){
//         console.log("Idli")
//     }
//     if(b=='drink'){
//         console.log('water')
//     }
//     if(a=="dinner"){
//         console.log("Pizza")
//     }  
// }
// eat('breakfast','morningTea')
// eat('lunch','drink')
// eat('dinner','drink')
// function greet(name){
//     var msg="Hey "+name+", Welcome to BI"
//     console.log(msg)
//     //intead of printing this, I want to return the message to the place
//     //from where it was called
// }
// greet("Rahul")

// function square(num){
//     var result=num*num
//     return result
// }
// var s=square(6)
// console.log(s)

// function printNumberLessThanTen(number){
//     for(var a =number ; a<10 ; a++){

//         console.log(a)
//     }
    
// }
// printNumberLessThanTen(9)
// printNumberLessThanTen(90)
// printNumberLessThanTen(-1)


// var x=square(10)+20
// console.log(x)

// var a=10
// var a="rahul"
// console.log(a)

// var a = 10
// function rand(){
//     a="rahul"
//     console.log(a)
// }
//rand()  //calling a rand function
// var newrand=rand //first-class function in js
// console.log('__________________')
// newrand()  //calling rand function
// console.log(a)

// function age(s){
//     console.log(s)
// }
// age(a)

// var a = 10
// function rand(){
//     a="rahul"
//     console.log(a)
// }
// function print(msg){
//     msg()
// }
// print(rand)

// function print1(q,w){
//     q(w)
//     q('5')
// }
// print1(console.log,'13')

// var a=10
// function rand(){
//     a='rahul'
//     console.log(a)
// }
// function print(msg){
//     msg()
// }
// print(rand);

// var a=10
// var rand=function(){
//     a='14'
//     console.log(a)
// }
// function print(msg){
//     msg()
// }
// //print(rand)
// print(function(){
//     a='14'
//     console.log(a)
// })


// var a=10
// var rand=()=>{
//     a='15'
//     console.log(a)
// }
// var print=(msg)=>{
//     msg()
// }
// print(rand)

// print(function(){
//     a='14'
//     console.log(a)
// })

// function getAge(){
//     console.log(1)
//     return 12
//     console.log(13)
// }
// console.log(getAge())

function getAge(){
    for(var i=0;i<10;i=i+2){
        if(i==8){
            
        }
        console.log(i)
    }
    // if(1<10){
    //     return 30;
    // }
    console.log(68)
}
console.log(getAge())

