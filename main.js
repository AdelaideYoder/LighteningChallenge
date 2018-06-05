// _______________________________Lightening Exercise 1 - Week 2--------------------------------------------------

// let experience = ["fun", "challenging", "interesting", "new", "different"];


// for (let i = 0; i < experience.length; i++ ) {
//     console.log (experience[i]);
// }


//________________Lightening Exercise 2 - Week 3 - Monday June 4, 2018____________________________________________

// Exercise: Using Javascript, create a variable to hold your last name. Then, if your last name has 7 or more letters, console log "I can't pronounce this last name". If your last name has less than 7 characters, console log your last name.


// create a variable to hold your last name

//const lastName = "Yoder";

// let name = (lastName) => {
//     if (lastName.length >= 7) {
//     console.log("I can't pronounce this last name");
//     }
//     else if (lastName.length < 7) {
//     console.log(lastName);
// }
// } 

// name("Castelloe"); 
// name("Yoder");

// This is the way Jisie did it______________________________________________
// const lastName = "Yoder";

// if (lastName.length >= 7) {
//     console.log ("I can't pronounce this last name");
// } else {
//     console.log("Last name:", lastName); 
// }



// Challenge: Create a new repository on Github and push the code your wrote up to Github.


//____________________________LIGHTENING EXERCISE___JUNE 5_________________________________

// 1. Write a function that takes two arguments. This function should return the concatenated value of the two arguments.

// const name = function (firstName, lastName) {
//     let fullName = `${firstName} ${lastName}`
//     return fullName
// }


const name = function (firstName, lastName) {
    let thatName =  `${firstName} ${lastName}`;
    return thatName
}



// 2. Call the function with your first name and last name as the two arguments.

let thisName = name ("Adelaide", "Yoder"); 

// 3. Console log the return value.
console.log(thisName);



//----------------------JISIE'S CODE
// const concatenate = function(firstArgument, secondArgument) {
//     return `${firstArgument} ${secondArgument}`
//   }
  
//   console.log(concatenate("Jisie", "David"))