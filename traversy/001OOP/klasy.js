// klasy

// a) słowo kluczowe class + nazwa klasy
// b) wewnątrz podajemy metody
// c) tworzenie nowego obiketu klay

	class City{
		constructor(){}
	}

// tworzenie nowego obietu/instancji obiektu, pojawiło się w es6 porzednio było to trudniejsze
// wywołując klasę do stworzenia nowe instacji wywołalismy konstruktor, nawet jeśli jest pusty
	const city = new City();


	class City{
		constructor(name, capital){
			this.name = name;
			this.capital = capital;
		}
	}

	const poland = new City('Polska', 'Warsawa');


// metoda to właściwość w obiekcie przechowywująca funkcję

// prototyp - to specjalny obiekt przechowujący w klasie inne metody/właściwości

// obiekt.prototype - w console log pokazuje się jako proto

// dziedziczenie klas 

class Bird extends Animal {
    constructor(name) {
    	// super wywołuje konstruktor z kotórego pobieramy name
        super(name);
        this.type = "bird";
    }
    eat() {
        const text = super.eat();
        return text + " - exactly seed!";
    }
    fly() {
        return "I can fly";
    }
}

// Pojawiła nam się kolejna nowa instrukcja - extends, która mówi nam, że dana klasa rozszerza inną klasę.

// Nasza klasa rozszerza zarówno konstruktor jak i metodę eat. Zauważ, że w obydwu tych funkcjach pojawiła nam się instrukcja super()

/// konstruktor

class Book{
	constructor(title, author, year){
		this.title = title;
		this.author = author;
		this.year = year;
	}

	age(){
		return "data wydania to" + year;
	}

	title(){
		return "Tytuł to "+ title;
	}

	static topBookStore(){
		return "Wzgórze własność";
	}
}

const book1 = new Book("js", "Piter", "2018");

console.log(book1);
console.log(Book.topBookStore());

//tworzenie subklasy 

class Magazine extends Book{
	constructor(title, author, year, month){
		super(title, author, year);
		this.month = month;
	}
}

const mag = new Book("js", "Piter", "2018", "sierpien");

console.log(mag);