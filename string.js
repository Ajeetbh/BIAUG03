// var firstName='Ajeet'
// var lastName="Kumar"
// console.log("Hello "+firstName+" "+lastName)

//string literals
//console.log(`Hello ${firstName} ${lastName}`)

/*Hello,
Ajeet Kumar
 */
//console.log(`Hello, \n${firstName} ${lastName}`)

//length of string
// var len=firstName.length
// console.log(len)

//access the specific char from string
//index
//we access the specific character via square bracket
// console.log(firstName[2])

//if i want last character of string  =length-1
// let str='Ajeet'
// let len=str.length;
// for(let i=0;i<len;i++){
//     console.log(str[i])
// }

// number to string and string number
// var num=10
// var nums=num.toString()
// var num1=parseInt(nums)
// console.log(nums)
// console.log(num1)

// if('a'<'b'){
//     console.log('a is smaller than b')
// }
// if('a'<'B'){
//     console.log('a is smaller than B')
// }else{
//     console.log('a is greater than B')
// }

// var str='Ajeet'
// console.log(str.toUpperCase())

//this is find to character of string
// var str='JavaScript String Type';
// console.log(str.charAt(5))
// for(let i=0;i<str.length;i++){
//    console.log(str.charAt(i))
// }

//STRING MANIPULATION
// 1.concatenating string=concatenate two or more string using .concate methode
// let firstName='Ajeet';
// let fullName=firstName.concat(' '+'Bharti')
// console.log(fullName)  //Ajeet Bharti

//2. Extracting substring= extract substring from string
// syntax: substr(startIndex,[length])
// let str='JavaScript String'
// console.log(str.substr(0,10))  //JavaScript
// console.log(str.substr(11,6))  //String
// console.log(str.substr(5,3))  //cri

//3.Locating Substring=to locate a substring in string Using indexOf() method
// string.indexOf(substring,[fromIndex])
// let str='This is a string'
// console.log(str.indexOf('is'))  //2
// console.log(str.indexOf('is',3))  //5
// console.log(str.indexOf('s'))   //3
// console.log(str.indexOf('s',9)) // 10

//4. Remoivg white spaces: using trim() method
// let str='    Ajeet   '
// let str1=str.trim()
// console.log(str1)

//5. Comparing String=to compare two string using localeCompare() method
// if first come before second then return -1
//if first come after second then return 1
// if both are equal then return 0
// console.log('A'.localeCompare('B'))  //-1
// console.log('B'.localeCompare('B')) //0
// console.log('C'.localeCompare('B')) //1

// trimStart()=methd to remove the whitespaces from the begining of string
// let str='   Ajeet  '
// let s=str.trimStart()
// console.log(s)

//PADDING=pad or fill up the spaces
//padStart()
// let str='1234'.padStart(8,'o')
// console.log(str) //00001234
// let s='abc'.padStart(5)
// console.log(s) //_ _abc
//padEnd
// let str='1234'.padEnd(8,'*')
// console.log(str) //1234****
// let s='abc'.padEnd(5)
// console.log(s) //abc_ _

//CONCAT=concat() method concating a string  and return new strimg
// 1. concate string
// let greeting='Ajeet'
// let msg=greeting.concat(' ','Bharti')
// console.log(msg) Ajeet Bharti

//2. concatenating of array of string
// let color=['blue','red','green']
// let result=' '.concat(...color)
// console.log(result)  blueredgreen

//3 concatenating non-string argument 
// let str=' '.concat(1,2,3)
// console.log(str) //123

//Split()=accept two optional parameter seperator and limit
//syntax: split([separator,[,limit]])
//1. splitting string into two word
// let str='Ajeet bharti'
// let str1=str.split(' ');
// console.log(str1) //[ 'Ajeet', 'bharti' ]

//2 Returning a limit no of substring
// let str='Ajeet Kumar Bharti'
// let s=str.split(' ',2)
// console.log(s)  //[ 'Ajeet', 'bharti' ]

//3 splitting a string using regular exprression
// let paragraph='Good morning! How are you? this is john.'
// let s=paragraph.split(!?.)
// console.log(s)

//indexOf=it return index of the first occurence of substring
// index=str.indexOf(substr,[,fromIndex])
//indexOf is case sensitive if substing are not present then return -1
// let str='finding substring in string'
// let index=str.indexOf('str')
// console.log(index)

//lastIndexOf()=this method locate last occurence of substring in string
//1. using lastIndexOf()
// let str = 'JavaScript';
// let index = str.lastIndexOf('a');
// console.log(index); //3
// let str = 'JavaScript';
// let index = str.lastIndexOf('a',2);
// console.log(index); //1

//2. lastIndexOf() and cae sensitive
// let str = 'Hello, World!';
// let substr = 'L';
// let index = str.lastIndexOf(substr);
// console.log(index); // -1

//substring()=this method to extract a substring from a string
// str.substring(startIndex  [,endIndex])
//1. extarcting a substring from begning
// let str = 'JavaScript Substring';
// let substring = str.substring(0,10);
// console.log(substring);  //JavaScript

//2. extracting a substring to end of string
// let str = 'JavaScript Substring';
// let substring = str.substring(11);
// console.log(substring);  //Substring

//3. extracting domain form email
// let email = 'john.doe@gmail.com';
// let domain = email.substring(email.indexOf('@') + 1);
// console.log(domain); // gmail.com

//slice()=to get the local part of the string
// let email = 'john@example.com'
// let localPart = email.slice(0,email.indexOf('@'));
// console.log(localPart); //john

//includes()=to check if string contain another string
//string.includes(searchString [,position])
let email = 'admin@example.com';
console.log(email.includes('@')); //true
let str = 'JavaScript String';
console.log(str.includes('Script'));//true
let str1 = 'JavaScript String';
console.log(str1.includes('script'));//false


