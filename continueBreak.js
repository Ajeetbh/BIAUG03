//CONTINUE: skipe the loop 
//BREAK:stop the loop
// for(var a=1;a<4;a++){
//     console.log(a)
// }  //1 2 3

// for(var a=1;a<4;a++){
//     continue;
//     console.log(a)
// } //nothing will be print

// for(var a=1;a<4;a++){
//          console.log(a) 
//          continue;
//     }   1 2 3

// for(var a=1;a<4;a++){
//     console.log(a+1)
//     continue;
//     console.log(a)
// }   2,3,4

// for(var a=1;a<4;a++){
//     if(a==2){
//         continue;
//     }
//     console.log(a)
// }    1,3

// for(var a=1;a<4;a++){
//     if(a==2){
//         console.log(a)
//         continue;
//     }
//     console.log(a)
// }  //1,2,3

// for(var a=1;a<4;a++){
//     if(a==2){
//         console.log(a)
//         a--;
//         continue;
//     }
//     console.log(a)
// }  //1 2 2....

// for(var a=1;a<=4;a++){
//     if(a==4){
//         a--;
//         console.log(a)
//         continue;
//     }
//     console.log(a)
// }    //1 2 3 3....

// for(var a=1;a<4;a++){
//     if(a==2){
//         console.log(a)
//         continue;
//     }
//     console.log(a)
// }  1 2 3


//break

// for(var a=1;a<4;a++){
//     if(a==2){
//         break;
//     }
//     console.log(a);
// } //1

// for(var a=1;a<4;a++){
//     if(a==2){
//         console.log(a)
//         continue;
//     }
//     break;
//     console.log(a);
// }  ans: nothing

// for(var a=1;a<4;a++){
//     if(a==2){
//         console.log(a)
//         continue;
//     }
//     console.log(a);
//     break;
// }  1

// for(var a=1;a<4;a++){
//     if(a==2){
//         console.log(a)
//         break;
//         continue;
//     }
//     console.log(a);
// }  //1 2

// for(var a=1;a<4;a++){
//     if(a==2){
//         break;
//         console.log(a)
//         continue;
//     }
//     console.log(a);
// }  1

// for(var a=1;a<=4;a++){
//     if(a<=1){
//         continue;
//     }
//     if(a==4){
//         break;
//     }
//     console.log(a);
// }  //2 3

// for(var a=1;a<4;a++){
//     if(a==2){
//         break;
//     }
//     for(var b=1;b<4;b++){
//         if(b==2){
//             break;
//         }
//         console.log(b)
//     }
//     console.log(a)
// } 1 1

// for(var a=1;a<4;a++){
//     if(a==2){
//         break;
//     }
//     for(var b=1;b<4;b++){
//         if(b==2){
//             continue;
//         }
//         console.log(b)
//     }
//     console.log(a)
// } //1 3 1

// for(var a=1;a<4;a++){
//     if(a==2){
//         continue;
//     }
//     for(var b=1;b<4;b++){
//         if(b==2){
//             break;
//         }
//         console.log(b)
//     }
//     console.log(a)
// } 1 1 1 3