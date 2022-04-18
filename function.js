/**
 *1 Create a function that will return children, teenagers, young people, old people from the age
 */

// const ageCal = (name, year) =>{

    

//     if (year >= 0 && year < 5 ) {
//         man = 'Babu'
//     } else if (year >= 5 && year < 10 ) {
//             man = 'Balok'
//     }else if (year >= 10 && year < 20 ) {
//             man = 'kishor'
//     }else if (year >= 20 && year < 30 ) {
//             man = 'Balok'
//     }else if (year >= 30 && year < 40 ) {
//             man = 'unkel'
//     }else if (year >= 40 && year < 50 ) {
//             man = 'togboge unkel'
//     }else if (year >= 50 && year < 60 ) {
//             man = 'bura'
//     }else if (year >= 60 && year < 70 ) {
//             man = 'togboge bura'
//     }else if (year >= 70 && year < 80 ) {
//             man = 'complect bura'
//     }
    

//     console.log(`
//          Hi ${name} you are a ${man} manush,
//     `);
// }


/**
 *2 Create a function that will return the area of a rectangle, square, triangle
 */

// const areaCal = (type, val1, val2 = null) => {

//     let shape = '';
//     let area = '';

//     switch (type) {
//         case 'r':
//             shape = 'Recttangle'
//             area = (val1 * val2);
//             break;
    
//         case 's':
//             shape = 'square'
//             area = (val1 * val1);
//             break;
    
//         case 't':
//             shape = 'triangle'
//             area = (.5 * val1 * val2);
//             break;
        
//     }

//     console.log(`
//     There are ${shape} is ${area}
//     `);
// }


/**
 *3 GPA, CGPA, GRADE function for result publishing
 */


// const resultgrade = (marks ) => {

//     let grade;

//     if (marks >= 0 && marks < 33) {
//         grade = 'F';
//     } else if (marks >= 33 && marks < 40) {
//         grade = 'D';
        
//     }else if(marks >= 40 && marks < 50) {
//         grade = 'C';
        
//     }else if(marks >= 50 && marks < 60) {
//         grade = 'B';
        
//     }else if(marks >= 60 && marks < 70) {
//         grade = 'A-';
        
//     }else if(marks >= 70 && marks < 80) {
//         grade = 'A';
        
//     }else if(marks >= 33 && marks < 40) {
//         grade = 'A+';
        
//     }else {
//         grade = 'invalid';
        
//     }

//     return grade;

// }


// const resultgpa = (marks ) => {

//     let gpa;

//     if (marks >= 0 && marks < 33) {
//         gpa = 0;
//     } else if (marks >= 33 && marks < 40) {
//         gpa = 1;
        
//     }else if(marks >= 40 && marks < 50) {
//         gpa = 2;
        
//     }else if(marks >= 50 && marks < 60) {
//         gpa = 3;
        
//     }else if(marks >= 60 && marks < 70) {
//         gpa = 3.5;
        
//     }else if(marks >= 70 && marks < 80) {
//         gpa = 4;
        
//     }else if(marks >= 33 && marks < 40) {
//         gpa = 5;
        
//     }else {
//         gpa = 'invalid';
        
//     }

//     return gpa;

// }


/**
 *4 Create an age calculator function
 */

//  const ageCal = (name, year) =>{
//      let age = 2022 -year

//      console.log(`
//      Hi ${name}, you are ${age} old.
//      `);
//  }

/**
 *5 Create a BMI function for health
 */

//  const bmiCal = (name, weight, height) => {

//     let bmi = weight / (height * height)

//     if (bmi < 18.5) {
//         console.log(`
//         Hi ${name}, apnar obosta akbare sesss.
//         `);
//     } else if (bmi >= 18.5 && bmi < 25) {
//         console.log(`
//         Hi ${name} Apnar obosta sess ,,,,ja paben ura dura khite thakben,,,,,
//         `);
//     }else if (bmi >= 25 && bmi < 30) {
//         console.log(`
//         Hi ${name} Apnar obosta valo,,,,apni mota muti valo dura khite thakben,,,,,
//         `);
//     }else if (bmi >= 30) {
//         console.log(`
//         Hi ${name} Apnar obosta kothin ,,,,apnake khit00 kote thakben,,,,,
//         `);
//     }

//  }


/**
 *6 Create a currency converter function from taka to USD, CAD, POUND, EURO etc
 */

 const currencyConvat = ( amount , currencyname) => {
   
     let rate = '';

     switch (currencyname) {
         case 'USD':
            rate = 86;
             break;
     
             case 'Cad':
            rate = 67;
             break;
     
             case 'NZ':
            rate = 59;
             break;
     
             case 'Eouro':
            rate = 123;
             break;
     
             case 'paound':
            rate = 114;
             break;
     
             case 'real':
            rate = 86;
             break;
     
             
     }


     console.log(`
     ${amount} ${currencyname} = ${amount * rate}
     `);
 }