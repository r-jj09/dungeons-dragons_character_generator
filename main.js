var strength;
var dexterity;
var constitution;
var intelligence;
var wisdom;
var charisma;

function rollStats(stat) {
	var stat = Math.random();
	stat = stat * 20;
	stat = Math.floor(stat) + 1;
	return stat;
}
