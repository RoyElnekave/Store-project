// תרגיל א
let Number2 = Number(prompt("Add a number"))
let string = ""
let Sum = 0;
for (let i = 1; i <= Number2; i++) {
string+= [i]
Sum+= i}
let array =[...string]
console.log(Sum);

 // תרגיל ב
 function reverseString(str) {
     let splitString = str.split("");
     let reverseArray = splitString.reverse();
     let joinArray = reverseArray.join(""); 
     return joinArray; }
 reverseString("fun to learn programming");

 // תרגיל ג
   let Array = [2,8,1,[5,3,2],7,[9,14,2]]
   let NewArray= Array.flat()
   let Sum2 = 0;
 for (i in NewArray) {
     Sum += NewArray[i];}
     console.log(Sum2);