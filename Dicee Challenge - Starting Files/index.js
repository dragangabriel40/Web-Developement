var randomNumer1 = Math.floor(Math.random() * 6) + 1;

var randomDicePhoto1 = "dice" + randomNumer1 + ".png";

var randomSourceImage1 = "images/" + randomDicePhoto1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomSourceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDicePhoto2 = "dice" + randomNumber2 + ".png";

var randomSourceImage2 = "images/" + randomDicePhoto2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomSourceImage2);




if (randomNumer1 < randomNumber2) {
    document.getElementById("winner").innerHTML = "Player 2 castiga"

} else if (randomNumer1 > randomNumber2) {
    document.getElementById("winner").innerHTML = "Player 1 castiga"
} else {
    document.getElementById("winner").innerHTML = "Remiza"
}
