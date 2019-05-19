var tablica = new Array("one", "two", "three");

tablica[0] = "nieone";
tablica[0] = 1;
console.log(tablica[0]);

tablica.unshift("przedzero");
tablica.push("four");
for (var i = 0; i < tablica.length; i++){
	document.write(tablica[i] + ", ");
}