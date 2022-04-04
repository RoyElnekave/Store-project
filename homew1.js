

// string
// indexOf
// trim
// includes
// replaceAll

// array
// pop
// shift
// unshift
// push
// slice
// splice
// join


// 1 IndexOf string
   let string = "Banna, Apple, Mango, Malon, Oreng"
  let indexo = prompt("enter tag")
   for (let i = 0; i < string.length; i++) {
         if (string[i] == indexo[0]) {
  console.log(i);}}
        
//2 Trim string
 let string2 = "   Banna, Apple, Mango, Malon, Oreng     "
 let count = 0
 let newe= ""
 for (let a = 0; string2[a] == " "; a++) {
     count+=1  }
 for (let p = count; p < string2.length; p++) {
    newe+= string2[p] } 

   let counter = 0
   let newString = "";
   for (let i = newe.length - 1; i >= 0; i--) { 
       newString += newe[i]}
      
  for (let v = 0; newString[v] == " "; v++) {
     counter++  }
     let lustring=""
 for (let n = counter; n < newString.length; n++) {
     lustring+= newString[n] 
   counter++}

    let over = ""
    for (let z =lustring.length - 1; z >= 0; z--) { 
     over += lustring[z]}
     console.log(over);  

//3 Includes string
  let stringinclud = "Banna, Apple, Mango, Malon, Oreng"
  let includes = "apple"
  let num = false
  for (let e = 0; e < stringinclud.length; e++) {
     if (stringinclud[e] == includes[0] && stringinclud[e+1] == includes[1] && stringinclud[e+2] == includes[2] && stringinclud[e+3] == includes[03] && stringinclud[e+4] == includes[4]) 
   num = true ;}
  console.log(num);

//4 ReplaceAll
   let stringindex = "Banna Apple Mango Malon Oreng"
   let indexof = prompt("Enter a word to replace from: "+ stringindex)
 let newword = prompt("Enter a new word")
   let num =0
   let newString = ""
   for (let i = 0; i < stringindex.length; i++) {
       if (stringindex[i] = indexof[0] && stringindex[i+1] == indexof[1] && stringindex[i+2] == indexof[2] && stringindex[i+3] == indexof[3]&& stringindex[i+4] == indexof[4]){
   num+=i}} 
 for (let i = 0; i < num; i++) {
    newString +=stringindex[i]}
 for (let q = 0; q <newword.length; q++) {
     newString += newword[q]}
 for (let e = num+newword.length; e < stringindex.length; e++) {
     newString+=stringindex[e]}
 alert(newString);

//5 pop
 let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 delete array[array.length-1]
     alert(array);

// 6 Shift
 let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 delete array[0]
     alert(array);

//7 Unshift
 let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
 let promp = prompt("enter array")
 array=[...array,...[promp]] 
 alert(array)

//8 push
 let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 let promp = prompt("enter array")
 array=[...[promp], ...array] 
 alert(array)

//9 Slice
 let array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 let starte= Number(prompt("where to start cutting?"))
      let stope= Number(prompt("up to where to cut?"))
     while ( stope<num) {
         delete array[stope]
 stope=stope+1}
     let go=0
     while (go<starte){
     delete array[go]
 go=go+1}
    alert(array); 

//10 Splice
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

//11 join
 let string = ""
 let sign = prompt("Add separt sign")
 array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 for (let i = 0; i < array.length; i++) {
  string+= array[i]+sign}
 console.log(string);