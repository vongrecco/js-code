for(var x = 0; x <= 121; x++){
	document.write(x +", ");
}

var potega = prompt("Wybierz potęgę liczby 2:");
var wynik = 1;

for(var i=0; i<potega; i++){
	wynik *= 2;
}

alert(potega + " potęga liczby 2 to: " + wynik);