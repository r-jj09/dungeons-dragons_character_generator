var strength = 0;
var dexterity = 0;
var constitution = 0;
var intelligence = 0;
var wisdom = 0;
var charisma = 0;

$(".container").on("click", ".roll", (event) => {
	// Update stats and HTML elements
	strength = rollStats();
	dexterity = rollStats();
	constitution = rollStats();
	intelligence = rollStats();
	wisdom = rollStats();
	charisma = rollStats();

	// Update HTML elements
	document.getElementById("str").textContent = strength;
	document.getElementById("dex").textContent = dexterity;
	document.getElementById("cons").textContent = constitution;
	document.getElementById("inte").textContent = intelligence;
	document.getElementById("wis").textContent = wisdom;
	document.getElementById("charism").textContent = charisma;
});

function rollStats(stat) {
	var stat = Math.random();
	stat = stat * 20;
	stat = Math.floor(stat) + 1;
	return stat;
}
