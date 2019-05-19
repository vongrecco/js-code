// typeof pokazuje jaki typ ma dany elelemnt
// typeof a;
const book = {
title : "book",
  autor:' Piter',
  year : 1999,
  getString: function(){
    return "tytuł to " + this.title;
  } 
};
console.log(book.title);
console.log(book.getString());  

// konstruktor

function Auto(marka, model, rok){
	this.marka = marka;
	this.model = model;
	this.rok = rok;
	this.autoInfo = function(){
		return `${this.marka} rok produkcji: ${rok}`;
	}
}

// tworzenie obiektów z konstruktora

auto1 = new Auto('mazda', '3', '2006');
auto2 = new Auto('audi', '4', '2006');

console.log(auto1);
console.log(auto2.autoInfo());

