// Q U E R R Y  S E L E C T O R

let $form = document.querySelector("#form");
const $cross = document.querySelector("#cross");
const $dot = document.querySelector("#dot");

let P1First = "";

// L I S T E N E R

$cross.addEventListener("click", () => {
	$cross.classList.remove("btngrey2");
	$cross.classList.add("btngrey1");
	$dot.classList.remove("btngrey1");
	$dot.classList.add("btngrey2");

	P1First = "X";
});
$dot.addEventListener("click", () => {
	$dot.classList.remove("btngrey2");
	$dot.classList.add("btngrey1");
	$cross.classList.remove("btngrey1");
	$cross.classList.add("btngrey2");

	P1First = "O";
});

$form.addEventListener("click", (e) => {
	e.preventDefault();
});
