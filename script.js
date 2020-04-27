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

//  var scoreJohn = (200 + 134 + 105) / 3;
//  var scoreMike = (200 + 134 + 105) / 3;
//  var scoreMary = (200 + 134 + 105) / 3;

//  if (scoreJohn > scoreMike && scoreJohn > scoreMary) { 
//     console.log('John\'s team has a better average score wtih ' + scoreJohn + ' points');
//  }  else if(scoreMike > scoreJohn && scoreMike > scoreMary) {
//     console.log('Mike\'s team has a better average score wtih ' + scoreMike + ' points');
//  } else if (scoreMary > scoreJohn && scoreMary > scoreMike){
//     console.log('Mary\'s team has a better average score wtih ' + scoreMary + ' points');
//  } else if (scoreJohn = scoreMike && scoreJohn > scoreMary) {
//      console.log('John and Mike\'s team tied for most points with ' + scoreMike + ' points');
//  } else if (scoreJohn = scoreMary && scoreJohn > scoreMike) {
//     console.log('John and Mary\'s team tied for most points with ' + scoreJohn + ' points');
// } else if (scoreMary = scoreMike && scoreMary > scoreJohn) {
//     console.log('Mary and Mike\'s team tied for most points with ' + scoreMike + ' points');
// }  else {
//     console.log('The teams tied with an average of ' + scoreMike + ' points');
//  }

/***********************
 * Functions
 */

//  function calculateAge(birthYear) {
//     return 2018 - birthYear;
//  }

//  var ageJohn = calculateAge(1990);
//  var ageMike = calculateAge(1948);
//  var ageJane = calculateAge(1969);
//  console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//    var age = calculateAge(year);
//    var retirement = 65 - age;

//    if (retirement > 0){
//       console.log(firstName +  ' retires in ' + retirement + ' years.');
//    } else {
//       console.log(firstName +  ' is already retired');
//    }
  
// }
// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1948, 'Mike');
// yearsUntilRetirement(1969, 'Jane');

/*******************
 * Function Statments and Expressions
 */

//  var whatDoYouDo = function (job, firstName) {
//     switch(job) {
//        case 'teacher':
//          return firstName + ' teaches kids how to code';
//        case 'driver':
//          return firstName + ' drives a cab in Brooklyn';
//        case 'designer':
//          return firstName + ' designs beautiful websites';
//        default:
//           return firstName + ' does somthing else';
//     }
//  }

//  console.log(whatDoYouDo('teacher', 'John'));

/*********************
 * Arrays
 */

 //Initialize new array
//  var names = ['John', 'Mark', 'Jane'];
//  var years = new Array(1990, 1969, 1948);

//  console.log(names);
//  console.log(names.length);

// //Mutate Array data
//  names[1] = 'Ben';
//  names[names.length] = 'Marry'
//  console.log(names);

//  //Different data types

//  var john = ['John', 'Smith', 1990, 'designer', false];

//  john.push('blue');
//  john.unshift('Mr.');
//  console.log(john);

//  john.pop();
//  john.pop();
//  john.shift();
//  console.log(john);

//  console.log(john.indexOf(1990));

//  var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer'
//  console.log(isDesigner);

/*********************
 * Coding Challenge 3
 */

//  function tipCalculator(bill) {
//     var percentage;
//     if (bill < 50) {
//        percentage = .2;
//     } else if (bill >= 50 && bill < 200) {
//        percentage = .15;
//     } else {
//        percentage = .1;
//     }
//     return percentage * bill;
//  }
//  var bills = [124, 48, 268];
//  var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];
// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];

//  console.log(tips, finalValues);

/*********************
 * Objects and Properties
 */
 
 // Object literal
//  var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher', 
//     isMarried: false 
//  };
//  console.log(john.firstName);
//  console.log(john['lastName']);
//  var x = 'birthYear';
//  console.log(john[x]);

//  john.job = 'designer';
//  john['isMarried'] = true;
//  console.log(john);

//  // new Object syntax
//  var jane = new Object();
//  jane.firstName = 'Jane';
//  jane.birthYear = 1969;
//  jane['lastName'] = 'Smith';
//  console.log(jane);

/************************
 * Objects and Methods
 */

//   var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher', 
//     isMarried: false,
//     calcAge: function() {
//        this.age = 2018 - this.birthYear;
//     }
//  };

// john.calcAge();
// console.log(john);

/************************
 * Coding Challenge 4
 */

//  var john = {
//     fullName: 'John Smith',
//      mass: 78,
//    height: 1.69,
//     calcBMI: function() {
//        this.bmi = this.mass / (this.height * this.height);
//        return this.bmi;
//     }
//  }

//  var mark = {
//    fullName: 'Mark Jones',
//    mass: 78,
//    height: 1.69,
//    calcBMI: function() {
//       this.bmi = this.mass / (this.height * this.height);
//       return this.bmi;
//    }
// }

// john.calcBMI();
// mark.calcBMI();
// console.log(john, mark);

// if (john.bmi > mark.bmi) {
//    console.log(john.fullName + ' has a higher BMI with ' + john.bmi);
// } else if (mark.bmi > john.bmi) {
//    console.log(mark.fullName + ' has a higher BMI with ' + mark.bmi);
// } else {
//    console.log(john.fullName + ' and ' + mark.fullName + ' have the same bmi with ' + mark.bmi);
// }

/**********************
 * Loops and Iteration
 */


