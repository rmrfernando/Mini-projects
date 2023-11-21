let num2 = Math.round(Math.floor() * 6);

let click = document.querySelector(".heading");
document.getElementById("heading").addEventListener("click", randomDiceRoll);

function randomDiceRoll() {
	let num1 = Math.round(Math.floor() * 6);

	if (num1 == 0) {
		document.querySelector(".img1").setAttribute("src", "images/dice1.png");
	} else if (num1 == 1) {
		document.querySelector(".img1").setAttribute("src", "images/dice2.png");
	} else if (num1 == 2) {
		document.querySelector(".img1").setAttribute("src", "images/dice3.png");
	} else if (num1 == 3) {
		document.querySelector(".img1").setAttribute("src", "images/dice4.png");
	} else if (num1 == 4) {
		document.querySelector(".img1").setAttribute("src", "images/dice5.png");
	} else {
		document.querySelector(".img1").setAttribute("src", "images/dice6.png");
	}
}
