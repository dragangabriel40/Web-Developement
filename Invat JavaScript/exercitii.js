// 1. Write a JavaScript program to display the current day and time in the following format.Go to the editor
// Sample Output: Today is: Tuesday.
// Current time is: 10 PM: 30 : 38

//2. Write a JavaScript program to print the contents of the current window.

// function printPage() {
//     window.print();
// }


// 3. Write a JavaScript program to get the current date.Go to the editor
// Expected Output:
// mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy

// var time = new Date();
// var month = time.getMonth();
// var day = time.getDay();
// var year = time.getFullYear();

// console.log("Time is" + month + "/ " + day + " /" + year)

// 4 .Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

// var a = 5;
// var b = 6;
// var c = 7;


// var s = (a + b + c) / 2;  //semiperimetru;
// var arie = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));
// console.log(arie);

// Write a JavaScript program to rotate the string 'w3resource' in
// right direction by periodically removing one letter from the
//  end of the string and attaching it to the front.


// Uppercase first letter of the string :

// var myName = "alexandru";

// var upperCaseFirstLetter = myName.slice(0, 1).toUpperCase();

// var lowerCaseName = myName.slice(1, myName.length);

// var upperCaseText = upperCaseFirstLetter + lowerCaseName;

// console.log(upperCaseText)

//Random number generation in JavaScript (Love Calculator)

// var compatibilitate = Math.floor((Math.random() * 100) + 1);

// console.log("Compatibilitatea este " + compatibilitate)


// FibonacciGenerator:

// function fibonacciGenerator(n) {
//     var output = [];
//     if (n === 1) {
//         output = [0];
//     } else if (n === 2) {
//         output = [0, 1];
//     } else {
//         output = [0, 1];
//         for (var i = 2; i < n; i++) {
//             output.push(output[output.length - 2] + output[output.length - 1]);
//         }

//     }
//     return output
// }

// console.log(fibonacciGenerator(7));



// Check for number into a list;
var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function inArray(needle, haystack) {
    var count = haystack.length;
    for (var i = 0; i < count; i++) {
        if (haystack[i] === needle) { return true; }
    }
    return false;
}

console.log(inArray(2, numberList))