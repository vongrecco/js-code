// tworzenie obiektow

var myObject = {
    name: "Marcin",
    height: 184,
    print : function() {
        console.log(this.name)
    }
}

myObject.print(); //wypisze w konsoli "Marcin"
console.log(myObject.height); //wypisze 184


//usuwanie wlasciwosci obiektow

var object = {
    a: "litera",
    b: "dwa",
    c: "trzy" 
}

delete object.a;

console.log(object.a);
console.log(object.b);


// instrukcja Prototype

function SuperObjectClass() {
        this.name = 'Marcin';
        this.height = 183
}

//dodaję właściwość i metodę do prototypu
SuperObjectClass.prototype.weight = 73;
SuperObjectClass.prototype.showInfo = function () {
    alert(this.name + ' ma ' + this.height + 'cm wzrostu.')
}



var myObject = new SuperObjectClass();
myObject.showInfo();
console.log(myObject.weight); //wypisze sie 73