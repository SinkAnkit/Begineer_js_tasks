var randomnumber1 = Math.floor(1+(Math.random()*6));
var randomnumber2 = Math.floor(1+(Math.random()*6));
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomnumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomnumber2 + ".png");
if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if ( randomnumber2 > randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML="Draw";
}

