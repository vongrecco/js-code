// 1. usprawnienia w obiektach

var ob = {
    name : name,
    pet : pet
}

// es6

const ob = {
    name,
    pet
}

//ES5
var ob = {
    name : "Marcin",
    pet : "Szamson",
    printName : function() {
        console.log("Nazywam się: " + this.name);
    }
}

//ES6
const ob = {
    name : "Marcin",
    pet : "Szamson",
    printName() {
        console.log(`Nazywam się: ${this.name}`);
    }
}

// b) Do właściwości i metod obiektu możesz odwoływać się przez notację kropki ale też za pomocą nawiasów kwadratowych:

ob.name;
ob['name'];

ob.printName();
ob['printName']();


// Ma to zastosowanie w przypadkach, gdy nazwy kluczy nie są prawidłowymi zmiennymi

const ob = {
    name : "Marcin",
    pet : "Szamson"
}

ob['print the name'] = function() {
    console.log("Nazywam się: " + this.name);
}

ob['my surname'] = "Nowak";

ob.print the name; //oczywisty błąd
ob['print the name']();

ob['my surname']; //Nowak


// ex 2 

const ob = {
    name : "Marcin",
    pet : "Szamson",
    ['my surname'] = "Nowak",
    ['print the name']() {
        console.log("Nazywam się: " + this.name);
    }
}

// 3. object.assign()

// Metoda Object.assign(ob1, ob2...) kopiuje wszystkie przeliczalne właściwości z jednego lub więcej obiektów do obiektu docelowego. Kopiowanie rozpoczyna się od obiektów z prawej strony (końcowe parametry) i idzie w lewą stronę.

// Jeżeli obiekt po lewej stronie ma już daną właściwość, zostanie ona nadpisana wartością obiektu po prawej stronie.

