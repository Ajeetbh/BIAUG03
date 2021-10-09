//BASIC JAVASCRIPT--String
//1. Declare String Variables
// let myFirstName='Ajeet'
// let myLastName='Bharti'
// console.log(myFirstName)
// console.log(myLastName)

//2. Escaping Literal Quotes in Strings
// var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
// console.log(myStr)

//3. Quoting Strings with Single Quotes
// var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
// console.log(myStr)

//4 Escape Sequences in Strings
// var myStr="FirstLine\n\t\\SecondLine\nThirdLine"; 
// console.log(myStr)

//5. Concatenating Strings with Plus Operator
// var myStr="This is the start. "+"This is the end.";
// console.log(myStr) 

//6. Concatenating Strings with the Plus Equals Operator
// var myStr= "This is the first sentence. ";
// myStr += "This is the second sentence.";
// console.log(myStr)

//7 Constructing Strings with Variables
// var myName='Ajeet Kumar Bhari';
// var myStr='My name is'+myName+'I am well!';
// console.log(myStr)

//8 Appending Variables to Strings
// var someAdjective='Hi Hello Good';
// var myStr = "Learning to code is ";
// myStr += someAdjective
// console.log(myStr)

//9 Find the Length of a String
// var lastNameLength = 0;
// var lastName = "Lovelace";
// lastNameLength = lastName.length;
// console.log(lastNameLength)

//10 Use Bracket Notation to Find the First Character in a String
// var firstLetterOfLastName = "";
// var lastName = "Lovelace";
// firstLetterOfLastName = lastName[0]; 
// console.log(firstLetterOfLastName)

//11  Understand String Immutability
// var myStr = "Jello World";
// myStr[0] = "H";
// console.log(myStr)

//12 Use Bracket Notation to Find the Nth Character in a String
// var lastName = "Lovelace";
// var thirdLetterOfLastName = lastName[2]; 
// console.log(thirdLetterOfLastName)

//13 Use Bracket Notation to Find the Last Character in a String
// var lastName = "Lovelace";
// var lastLetterOfLastName = lastName[lastName.length-1]; 
// console.log(lastLetterOfLastName)

//14 Use Bracket Notation to Find the Nth-to-Last Character in a String
// var lastName = "Lovelace";
// var secondToLastLetterOfLastName = lastName[lastName.length-2]; 
// console.log(secondToLastLetterOfLastName)

// 15 Word Blanks
// var myNoun = "dog";
// var myAdjective = "big";
// var myVerb = "ran";
// var myAdverb = "quickly";
// var wordBlanks = "The "+" "+myAdjective+" "+myNoun+" "+myVerb+" "+myAdverb+"."; 
// console.log(wordBlanks)


//BASIC JAVASCRIPT OBJECT

//1. Build JavaScript Objects
// var myDog = {
//     name:'Monty',
//     legs:4,
//     tails:1,
//     friends:['men','police']
//  };
// console.log(myDog)

//2.Accessing Object Properties with Dot Notation
// var testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };
//   var hatValue = testObj.hat;      
//   var shirtValue = testObj.shirt; 
//   console.log(hatValue)
//   console.log(shirtValue) 

//3 Accessing Object Properties with Bracket Notation
// var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };
//   var entreeValue = testObj['an entree'];  
//   var drinkValue = testObj['the drink'];   
//   console.log(entreeValue)
//   console.log(drinkValue)

//4 Accessing Object Properties with Variables
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
//   var playerNumber=16;       
//   var player = testObj[playerNumber];   
//   console.log(player)

//5 Updating Object Properties
// var myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog['name']='Happy Coder'
//   console.log(myDog)

//6 Add New Properties to a JavaScript Object
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.bark='woof'
//   console.log(myDog)
  
//7 Delete Properties from a JavaScript Object
// var myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };
//   delete myDog.tails
//   console.log(myDog)


var n=[3,5,2,4,1]
var odd=[]
var even=[]
var len=n.length
var l=0, r=len-1
for(let i=0;i<len;i++){
    if(n[i]%2!=0){
       odd+=n[i]
    }
    // if(n[i]%2==0){
    //       even+=n[i]
    // }
    odd.sort(function(a,b){return b-a});
    return odd;
}
console.log(odd)