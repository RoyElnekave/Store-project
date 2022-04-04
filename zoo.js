// סטרינגים קיימים
let txt1 = "Dog12, CAT3, Lion7, DolphiN11, fish6, ";
let txt2 = "PIG17, bear29, BiRd8, ";
let txt3 = "SNAKE39, donkey14";

// חיבור 3 סטרינגים והפיכה לאות קטנה
function concattoLowerCase (a, b, c){
let NewArray =a.concat(b, c).toLowerCase()
return NewArray}
let NewArray =concattoLowerCase (txt1, txt2, txt3)

// פיצול סטרינגים לפי אות-מספר
let Listname =""
let Listnumber =""
for(i in NewArray){
if(!isNaN(NewArray[i])||NewArray[i]==" ")
Listnumber+=NewArray[i]
else{Listname+=NewArray[i]}}

// הפיכת סטרינג למערך
Listname=Listname.split(",")
Listnumber=Listnumber.split(" ")

// הקמת תפריט בלולאה
let Menu=6
    while(Menu!== 1&&Menu!==2&&Menu!==3&&Menu!== 4&&Menu!== 5 ){
        Menu=Number(prompt(`Welcome to the zoo's database
     Please select an option:
   [1] Animal search by code
   [2] Animal search by name
   [3] Adding new animals
   [4] Deletion of animals from the database
   [5] exit`))}

   // חיפוש חיה באמצעות קוד
     switch(Menu) {case 1:
       let Code = prompt("Enter code")
       alert(Listname[Listnumber.indexOf(Code)]);}


    // חיפוש חיה באמצעות שם
       switch(Menu) {
        case 2:
          let Name = prompt("Enter name")
          for (i in Listname){
          if (Listname[i].includes(Name)){
          console.log(Listname[i]);
          console.log(Listnumber[i])}}}

      // הוספת חיה חדשה 
          switch(Menu) { case 3:
              let Namenew=prompt("Add an animal name") 
             for (i in Listname){
               if (Listname[i]!==Namenew)
               Listname.push(Namenew)
              else {console.log("Mistake");}
              let Namecode=prompt("Add an animal code")
              for (i in Listnumber){
                if (Listnumber[i]!==Namenew)
                Listnumber.push(Namecode)
               else {console.log("Mistake");}
              Listnumber.push(Namecode)
              console.log(Listname);
              console.log( Listnumber);}}}

// הסרת חיה לפי שם / קוד
              switch(Menu) {
                case 4:
                  let DelateName = prompt("Add an animal name to delete") 
                  let numname = Listname.indexOf(DelateName)
                  Listname.splice(numname, 1)
                  Listnumber.splice(numname, 1)
                  let Delatecode = prompt("Or add an animal code to delete") 
                  let numnumber = Listnumber.indexOf(Delatecode)
                  Listname.splice(numnumber, 1)
                  Listnumber.splice(numnumber, 1)
                  console.log(Listname);
              console.log( Listnumber);}

              switch(Menu){
                case 5:
                  br
              }