Obiekty

// tworzenie obiektu

const myObj = {
    name: "Pies",
    speed: 1000,
    print : function() {
        console.log("Lubię walczyć ze złem");
    }
}

// Stworzyliśmy nasz obiekt o nazwie myObj za pomocą prostej pary klamer (tak zwany literał).
// Obiekt taki to zbiór par "klucz" : "wartość".
// Nasz obiekt posiada dwie właściwości - name i height, oraz jedną funkcję (zwaną też metodą), która wypisuje jakiś tekst.
// Zauważ, że przy definiowaniu takiego obiektu właściwości rozdzielamy przecinkiem, a zamiast znaku równości stosujemy dwukropek.

// okresla sie jako property  czyli wartosc
object.property

// funkcja na obiekcie okreslana jest jako metoda
object.method()

// Żeby teraz się do nich odwołać napiszemy:

myObj.name //Pies
myObj.speed //1000

myObj.print(); //"Lubię walczyć ze złem"

// console.log po wszystkich wartosciach
console.log(Object.values(myObj));
console.log(Object.keys(myObj));

// Można powiedzieć, że nasz obiekt myObj to taka jakby tablica dla swoich właściwości. To co odróżnia go od tablicy to to, że w tablicach by odwołać się do jakiejś wartości musimy wiedzieć dokładnie, na którym miejscu (indeksie) ta wartość się znajduje. W obiektach odwołujemy się po nazwie właściwości (po kluczu), więc takiego miejsca znać nie musimy.

// Bardziej rozbudowany obiekt

const myObj = {
    name : "Marcin",
    height : 184,

    pet : {
        name : "Szamson",
        color : "brown",
        speed : 1000,

        collar : {
            color : "red",
            length : "25cm"
        }
    }
}

myObj.name //Marcin
myObj.pet.name //Szamson
myObj.pet.collar.color //red

// 1. dodawanie nowych właściwości

const car = {
    brand : "Mercedes",
    color : "czerwony",
    speed : 150,
    print : function() {
        console.log(car.brand + ' koloru ' + car.color);
    }
}

car.doors = 4;
car.wheels = 4;
car.drive = function() {
    console.log('Jadę sobie żwawo!');
}

car.print();
car.drive();

// 2. this

// Zamiast konkretnej nazwy obiektu, o wiele lepszym rozwiązaniem jest zastosować słowo kluczowe this, które wskazuje na obiekt, który odpalił daną metodę (czyli w większości przypadków obiekt, w którym ta funkcja jest zawarta).

const car = {
    brand : "Mercedes",
    color : "czerwony",
    speed : 150,
    print : function() {
        console.log("Marka: ", this.brand);
        console.log("Kolor: ", this.color);
        console.log("Szybkość: ", this.speed);
    }
}

car.print();

// 3. usuwanie obiektów za pomoca delate

const car = {
    brand : "Mercedes",
    color : "czerwony"
    speed : 150,
    print : function() {
        console.log(this.brand + ' koloru ' + this.color );
    }
}

console.log(car.color); //czerwony
delete car.color;
console.log(car.color); //undefined

// W Javascript nie musimy usuwać całych obiektów. Jeżeli na dany obiekt nie będzie wskazywała żadna zmienna, jego automatycznym usunięciem zajmie się tak zwany Garbage Collector. Jeżeli chciałbyś usunąć cały obiekt, nie musisz tego robić. Wystarczy, że taką zmienną ustawisz na null, co zerwie referencje danej zmiennej z obiektem.

// 4. różne metody odołania sie do obiektu

// Do właściwości i metod obiektów możemy odwoływać się na dwa sposoby - poprzez notację kropki i korzystając z kwadratowych nawiasów:

const ob = {
    name : "Marcin",
    pet : "pies",
    pisz : function() { ... }
}

ob.name
ob.pet
ob.pisz();

ob["name"]
ob["pet"]
ob["pisz"]();

// Druga metoda, może rzadziej stosowana czasami bardzo się przydaje. Musisz wiedzieć, że w nazwach kluczy mogą wystąpić znaki niedopuszczalne w nazwach zmiennych. Oznacza to, że nie możemy w takich sytuacjach zastosować notacji kropkowej, bo wyrzuci to błąd składni:

const calendar = {
    "2018-11-11" : {
        name : "Narodowe Święto Niepodległości"
    },
    "2018-12-24" : [
        name : "Wigilia Bożego Narodzenia"
    ],
    ...
}

calendar.2018-11-11 //oczywisty błąd bo odejmujemy od 2018 coś tam
calendar["2018-11-11"] //poprawnie

// Pętla for in

// W Javascript istnieje pętla for in, która służy do iterowania po obiektach. Jej zastosowanie ma następującą postać:



const car = {
    brand : "Mercedes",
    color : "czerwony",
    speed : 150,
    print : function() {
        console.log("Marka: ", this.brand);
        console.log("Kolor: ", this.color);
        console.log("Szybkość: ", this.speed);
    }
}

for (const i in car) {
    console.log(i); //brand, color, speed, print
}

// Jak widzisz robiąc iteracje pod zmienną i podstawiane są kolejne klucze. By pobrać ich wartość zastosujemy kwadratowe nawiasy

for (const i in car) {
    console.log("Klucz: ", i);
    console.log("Wartość: ", car[i]);
}


///////////////////////////////////////////////////////////////////////////////////////

// 5. _proto_ - struktura obiektów

// __proto__ to właściwość, która wskazuje na prototyp, na którym opiera się dany obiekt.
// Każdy obiekt w JavaScript zbudowany jest na bazie jakiegoś prototypu - czyli obiektu wzorca, który zawiera metody i właściwości, które dany obiekt może wykorzystywać. Nawet jak robisz pojedynczą instancję (jeden obiekt - tak jak robiliśmy powyżej) to jest ona połączona z jakimś obiektem wzorca za pomocą właśnie __proto__.

// Jeżeli wywołujemy jakąś metodę lub właściwość danego obiektu, Javascript początkowo szuka ich bezpośrednio w instancji danego obiektu. Jeżeli ich tam nie znajdzie, za pomocą właściwości __proto__ (która istnieje w każdym obiekcie) przechodzi do prototypu obiektu - czyli obiektu, który opisuje ogólnie wygląd obiektów danego typu (np. Array, String, Date itp.). Szuka w takim obiekcie-prototypie danej metody.

// Skoro prototyp jest obiektem, to także ma swoje __proto__. Jeżeli JavaScript nie znajdzie w tym prototypie szukanej metody, korzystając z jego __proto__ dalej przechodzi do nadrzędnego prototypu i tak pnie się w górę, aż dojdzie do najwyższego prototypu - rodzica wszelkich obiektów - Object, na bazie którego zbudowane są wszelkie obiekty w JavaScript. Prototyp Object właściwości __proto__ już nie ma, więc JavaScript nie ma gdzie iść w górę.


// 6. tworznie klas obiektow

// Aby utworzyć kilka podobnych obiektów posłużymy się klasą obiektu

// W nowych wersjach JS została wprowadzona nakładka na mechanizm konstruktorów, która upodabnia go do klasycznych klas. Pamiętaj jednak, że jest to tylko nakładka, inny zapis tego samego.

// Stwórzmy przykładowy konstruktor, na bazie którego stworzymy nowe obiekty:

function Car(brand, color) {
    this.age = 0;
    this.brand = brand;
    this.color = color;

    this.print = function() {
        console.log(this.brand + ' koloru ' + this.color );
    }
}

// Jak widzisz konstruktor to zwykła funkcja, pisana z dużej litery. Ta duża litera to tylko konwencja nazewnicza mówiąca nam, że na bazie tej funkcji będą w przyszłości tworzone nowe obiekty i raczej nie powinniśmy tej funkcji używać do czegoś innego. Wszystkie właściwości i metody, które mają się pojawić w obiektach tworzonych na bazie tego konstruktora musimy zapisywać z użyciem słowa kluczowego this - co pokazuje powyższy kod.

// Aby teraz utworzyć nowe obiekty na bazie tego konstruktora skorzystamy ze słowa kluczowego new:

//tworzymy 2 obiekty na bazie konstruktora

const car1 = new Car("Fiat", "czerwony");
car1.print(); //Fiat koloru czerwony

const car2 = new Car("BMW", "czarny");
car2.print(); //BMW koloru czarny

// 6. tworzenie właściwości konstruktora obiektu


// 7. konstruktor



// konstruktor 

// Aby utworzyć kilka podobnych obiektów posłużymy się klasą obiektu. Czym jest klasa? To rodzaj foremki, wydmuszki, która opisuje nam jak będą wyglądać i jak będą się zachowywać tworzone na jej podstawie nowe obiekty.


function Car(brand, color){
  this.age = 0;
  this.brand = brand;
  this.color = color;
  
  this.print = function(){
    console.log(this.brand + " koloru " + this.color);
  }
}

// Jak widzisz konstruktor to zwykła funkcja, pisana z dużej litery. Ta duża litera to tylko konwencja nazewnicza mówiąca nam, że na bazie tej funkcji będą w przyszłości tworzone nowe obiekty i raczej nie powinniśmy tej funkcji używać do czegoś innego. Wszystkie właściwości i metody, które mają się pojawić w obiektach tworzonych na bazie tego konstruktora musimy zapisywać z użyciem słowa kluczowego this - co pokazuje powyższy kod.

// Nowe obiekty na bazie tego konstruktora skorzystamy ze słowa kluczowego new:

const car1 = new Car("Fiat", "Czerwony");
car1.print();



// Właściwości, które chcemy by były podawane przy tworzeniu obiektu podawane są jako parametry konstruktora. Cała reszta właściwości ustawiana jest po prostu na sztywno.
// Wszystkie właściwości, które chcemy by stały się właściwościami przyszłych obiektów musimy podawać z wykorzystaniem słowa this. Zmiennie dodatkowe służące do pomniejszych wyliczeń tworzymy klasycznie za pomocą let, const czy var. To samo będzie się tyczyło metod.

function Car(name, age, speed) {
    this.name = name;
    this.age = age;

    var risk = "small";
    if (age > 8 && age <= 15) {
        risk = "average";
    } else if (age > 15) {
        risk = "big"
    }

    this.status = risk;
}

const car1 = new Car("Fiat", 10, 120);
console.log(car1); {name: "Fiat", age: 10, status : "average"}


// Jak widzisz, nasza funkcja-konstruktor ma automatycznie dodaną przez Javascript właściwość prototype. Właściwość ta wskazuje na obiekt, który stanie się w przyszłości prototypem obiektów tworzonych na bazie naszego konstruktora.

// I teraz właśnie wkracza na ring słowo kluczowe new. Jeżeli za jego pomocą utworzymy nowy obiekt, JavaScript po pierwsze ustawi takiemu obiektowi prototyp biorąc go właśnie z właściwości prototype naszego konstruktora (na ten obiekt będą wskazywać __proto__ nowych obiektów), a dodatkowo zmieni kontekst słowa this, które od tego momentu będzie wskazywać na daną instancję obiektu, a nie na obiekt globalny window.



/// DODAWANIE ELEMETOW DO PROTOTYPE

Jak widzisz, nasza funkcja-konstruktor ma automatycznie dodaną przez Javascript właściwość prototype. Właściwość ta wskazuje na obiekt, który stanie się w przyszłości prototypem obiektów tworzonych na bazie naszego konstruktora.

I teraz właśnie wkracza na ring słowo kluczowe new. Jeżeli za jego pomocą utworzymy nowy obiekt, JavaScript po pierwsze ustawi takiemu obiektowi prototyp biorąc go właśnie z właściwości prototype naszego konstruktora (na ten obiekt będą wskazywać __proto__ nowych obiektów), a dodatkowo zmieni kontekst słowa this, które od tego momentu będzie wskazywać na daną instancję obiektu, a nie na obiekt globalny window.



// dodawanie nowych prototypow

function Hero(name, age, power) {
    this.name = name;
    this.age = age;
    this.power = power;
}

//właściwości i metody
Hero.prototype.kind = "human";
Hero.prototype.fly = function() {
    return "Latam sobie w koło";
}
Hero.prototype.sayHello = function() {
    return "Nazywam się " + this.name + " i jestem superbohaterem";
}
Hero.prototype.saySomething = function() {
    var greeting = this.sayHello();
    return greeting + " a poza tym lubię walczyć z nieprawością...";
}

const hero = new Hero("Superman", 30, "Ultra Instynkt");
hero.saySomething();



// Właściwość __proto__ jest ogólnie trochę kontrowersyjną właściwością. Mimo tego, że nie występuje w specyfikacji większość przeglądarek i tak zaimplementowało tą właściwość. Dla zapewnienia kompatybilności z przeglądarkami została wprowadzana do specyfikacji w EcmaScript 2015. Jest kilkanaście takich momentów w dziejach JavaScript i CSS, gdzie ewolucja poszła inną drogą niż chcieli autorzy (np. @media, html outline itp). W oryginalnej specyfikacji właściwość __proto__ widnieje pod nazwą [[Prototype]].
// W dzisiejszych czasach najbezpieczniej odwoływać się do prototypu za pomocą metody Object.getPrototypeOf(obj) zamiast bezpośrednio poprzez __proto__



/// zaawansowane THIS


// Na początku tego rozdziału poznaliśmy tworzenie własnych obiektów oraz słowo kluczowe this, które wskazuje na dany obiekt.
// W większości przypadków tak właśnie jest, ale tak naprawdę this wskazuje na obiekt, który w danym momencie wywołał daną metodę, czyli znalazł się duż przed kropką podczas wywołania:

// dwa sposoby aby to przeskoczyć

// a) wstawiamy this.obiekt pod zmienną a potem ją wykorzystujemy wewnątrz:

// ex1:

const ob = {
    name : "Marcin",
    printDelay : function() {
        const self = this;

        setTimeout(function() {
            console.log(this); //window
            console.log(self.name); //Marcin
        }, 2000);
    }
}

ob.printDelay();

// b) bind() - Drugim sposobem jest skorzystanie z instrukcji bind(newThis, *params), za pomocą której możemy przekazać nowy kontekst dla this, które jest w danej funkcji:

const ob = {
    name : "Marcin",
    printDelay : function() {
        setTimeout(function() {
            console.log(this); //ob
            console.log(this.name); //Marcin
        }.bind(this), 2000);
    }
}

ob.printDelay();

// c) funkcja strzałkowa, w niej nie jest zmieniana zawartosc this



//////////////////////////////////////////////////////////////

// Jak to zrobić? Wystarczyłoby w naszym konstruktorze Dog odpalić kod tamtej funkcji Animal, zmieniając jej tylko odpowiednio this by wskazywało na Dog...

// Call i apply
// Użyjemy do tego metody call(this*, parametr1*, parametr2*...)

// Metoda call, która jest dostępna dla każdej funkcji i służy do wołania danej funkcji.

// W pierwszym jej parametrze możemy przekazać obiekt, jaki zostanie podstawiony pod this wewnątrz funkcji:

const ob = {
    name : "Marcin",
    print : function() {
        console.log("Mam na imię " + this.name);
    }
}

ob.print(); //Mam na imię Marcin



const ob2 = {
    name : "Włodzimierz"
}
ob.print.call(ob2); //Mam na imię Włodzimierz

ob.print.call({name : "Patryk"}); //Mam na imię Patryk