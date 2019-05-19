
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

const Magazine = function(title, author, year, month){

// call()
// With the call() method, you can write a method that can be used on different objects.
	Auto.call(this,title, author, year);
	this.month = month;
}

// Inherit prototype
Magazine.prototype = Object.create(Auto.prototype);

//magazine object

const mag = new Magazine("title mag", "Autor Piter", '2012', "Siepien");

//zmiana konstruktora na magazine

Magazine.prototype.constructor = Magazine;

console.log(mag.text());
console.log(mag);


