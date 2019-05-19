// obiekt protos

const bookProtos = {
	text : function(){
		return "Marka samochodu to "+ this.marka;
	},
	age : function(){
		return "rok produkcji samochodu" + rok;
	}
}

// create object, tworzenie obiektows


// sposób 1

const auto2 = Object.create(bookProtos);
auto2.marka = "Mazda";
auto2.model = "3";
auto2.rok = "2006";

// sposób 2
const auto1 = Object.create(bookProtos, {
	marka: {value: "Audi"},
	model: {value: "a3"},
	rok: {value: "2007"}
});

console.log(auto1);
console.log(auto2);

