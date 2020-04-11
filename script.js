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

 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
     console.log(firstName + 'is married!');
 } else {
     console.log(firstName + ' will hopefully marry soon :)')
 }

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