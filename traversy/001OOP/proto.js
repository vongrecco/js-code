
// konstruktor

function Auto(marka, model, rok){
	this.marka = marka;
	this.model = model;
	this.rok = rok;
}

// jeśli daną funckję chcemy wywołać tylko do okreśonych obiektów to możemy zastosować prototype

auto1 = new Auto('mazda', '3', '2006');


Auto.prototype.text = function(){
	return "Marka samochodu to "+ this.marka;
}

Auto.prototype.age = function(){
	const age = new Date().getFullYear() - this.rok;
	return age;
}

// zmiana elementu obiektu

Auto.prototype.mod = function(newYear){
	this.age = newYear;
	this.rev = true;
}

// tworzenie obiektów z konstruktora




console.log(auto1.text());
console.log(auto1.age());
console.log(auto1.mod());

