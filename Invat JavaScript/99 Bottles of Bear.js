var bottlesOfBear = 99;


function calculate() {
    for (let bottlesOfBear = 99; bottlesOfBear >= 1; bottlesOfBear--) {
        console.log(bottlesOfBear + " bottles of beer on the wall, " + bottlesOfBear + " bottles of beer." +
            " Take one down and pass it around, " + (bottlesOfBear - 1) + " bottles of beer on the wall.")

    }
}
calculate();



// function calculate() {
//     while (bottlesOfBear != 0) {
//         console.log(bottlesOfBear + " bottles of beer on the wall, " + bottlesOfBear + "bottles of beer." +
//             " Take one down and pass it around, " + (bottlesOfBear - 1) + " bottles of beer on the wall.")
//         bottlesOfBear--;
//     }
// }

// calculate()


// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     }
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
//     numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }


