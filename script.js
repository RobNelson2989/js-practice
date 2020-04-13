// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

/****************************
 * Variable mutation and type coercion
 */

// var firstName = 'John';
// var age = 28;

// // Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last Name?');
// 





// /**********************
//  * Basic operators
//  */
// var year, yearJohn, yearMark;
// var now = 2018;
// ageJohn = 28;
// ageMark = 33;

// // Math Operators
// var yearJohn = now - ageJohn;
// var yearMark = now - ageMark;

// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 2);


// // Logical Operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);


/**********************
 * Operator Precedence
 */

//  var now = 2018;
//  var yearJohn = 1989;
//  var fullAge = 18;

//  // Multiple operators
//  var isFullAge = now -yearJohn >= fullAge; //true
//  console.log(isFullAge);

//  // Grouping
//  var ageJohn = now -yearJohn;
//  var ageMark = 35;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

//  // Multiple assignments

//  var x, y;
//  x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
//  console.log(x, y);


//  // More Operators
//  x *= 2;
//  console.log(x);

/**********************
 * Coding Challenge 1
 */

//  var massJohn = 86; //kg
//  var heightJohn = 1.8; //meters
 
//  var massMark = 98; //kg
//  var heightMark = 1.9; //meters
 
//  var bmiJohn = massJohn / (heightJohn *= 2);
//  var bmiMark = massMark / (heightMark *= 2);

//  var ismarkHeavier = bmiMark > bmiJohn;
//  console.log(bmiJohn, bmiMark)

//  console.log('Does Mark have a higher BMI than john?', ismarkHeavier);
 
/***********************
 * If / else statments
 */

//  var firstName = 'John';
//  var civilStatus = 'single';

//  if (civilStatus === 'married') {
//      console.log(firstName + 'is married!');
//  } else {
//      console.log(firstName + ' will hopefully marry soon :)')
//  }

//  var isMarried = true;
// if (isMarried) {
//     console.log(firstName + 'is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)')
// }


//  var massJohn = 86; //kg
//  var heightJohn = 1.8; //meters
 
//  var massMark = 98; //kg
//  var heightMark = 1.9; //meters
 
//  var bmiJohn = massJohn / (heightJohn *= 2);
//  var bmiMark = massMark / (heightMark *= 2);

// if (bmiMark > bmiJohn) {
//     console.log('Mark\'s BMI is higher than John\'s ');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s ');
// }



/******************
 * Boolean Logic
 */

//  var firstNamr = 'John';
//  var age = 25;

// if (age < 13) {
//      console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20 ) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// }else {
//     console.log(firstName + ' is a man.');
//  }




/******************
 * The Ternary Operator and Switch Statements
 */

//  var firsName = 'John';
//  var age = 14;

//  // Ternary Operator
//  age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // Switch Statment
// var job = 'teacher';
// switch(job) {
//     case 'teacher':
//         console.log(firstName + ' teaches kids how to code');
//         break;
//     case 'driver': 
//         console.log(firstName + ' drives uber');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites');
//         break;
//     default:
//         console.log(firstName + ' does something else');
// }

/*********************
 * Truthy and Falsy values and equality operators
 */

 // falsy values: undefined, null, 0, '', Nan
 // truthy values: not falsy values

//  var height;

//  height = 0;
//  if (height || height === 0) {
//      console.log('Variable is defined');
//  } else {
//     console.log('Variable has not been defined');
//  }

/*********************
 * Coding Challege 2
 */

 var scoreJohn = (200 + 134 + 105) / 3;
 var scoreMike = (200 + 134 + 105) / 3;
 var scoreMary = (200 + 134 + 105) / 3;

 if (scoreJohn > scoreMike && scoreJohn > scoreMary) { 
    console.log('John\'s team has a better average score wtih ' + scoreJohn + ' points');
 }  else if(scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log('Mike\'s team has a better average score wtih ' + scoreMike + ' points');
 } else if (scoreMary > scoreJohn && scoreMary > scoreMike){
    console.log('Mary\'s team has a better average score wtih ' + scoreMary + ' points');
 } else if (scoreJohn = scoreMike && scoreJohn > scoreMary) {
     console.log('John and Mike\'s team tied for most points with ' + scoreMike + ' points');
 } else if (scoreJohn = scoreMary && scoreJohn > scoreMike) {
    console.log('John and Mary\'s team tied for most points with ' + scoreJohn + ' points');
} else if (scoreMary = scoreMike && scoreMary > scoreJohn) {
    console.log('Mary and Mike\'s team tied for most points with ' + scoreMike + ' points');
}  else {
    console.log('The teams tied with an average of ' + scoreMike + ' points');
 }