
// צרו מערך מספרים.
// 1. הוסיפו מספר בהתחלה ובסוף.
// 2. נתון מערך [7,4,2] - הוסיפו את המערך למערך הקיים.
// 3. קלטו מספר והדפיסו האם נמצא בתוך המערך.
// 4. קלטו מספר ומיקום, הכניסו למערך את המספר במיקום.


// כתבו קוד שמדמה את התנהגות ה-splice
// הגדירו מערך, משתנה start, משתנה delCount ו-2-3 ערכים שיכנסו במקום אלו שנמחקו.

let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.push(11)
console.log(array);

 array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
array.unshift(0)
console.log(array);

array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let array2= [7, 4, 2]
array.concat(array2)

array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num =Number(prompt("enter mumber"))
array.includes(num)

array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let num2 =Number(prompt("enter mumber"))
let map = Number(prompt("enter Location"))
array.splice(map, 0, num2)
console.log(array);

array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let val=Number(prompt("How many values ​​to add?"))
let num7 = Number(prompt("Where to paste"))
      let num8 = Number(prompt("How many values to delete after pasting?"))
      let num9 = []
     for (let i = 0; i < val; i++) {
       let prome = prompt("Enter a values " )  
       num9=[...num9,...[prome]] }
let num15 = (num7+val)
let newArray = [];
let y = 0
let index = 0;
for (let i = 0; i < num15; i++){
   if (i == num7){
       for (let y = 0; y < num7; y++) {
           newArray[index++] = num9[y]; } }
   newArray[index++] = array[i];}
for (let o = 0; o < num8; o++) {
 delete newArray[num15]
 num15=num15+1}
console.log(newArray);

//
 