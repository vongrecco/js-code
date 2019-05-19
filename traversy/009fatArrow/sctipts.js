// funkcja strzałkowa

// Funkcja strzałkowa ma dwie charakterystyczne cechy. Skraca zapis funkcji, oraz zmienia kontekst this.

// 1. Zapis

const myF = function(a, b) {
    return a + b
}

// a)Zamiast słowa function pojawiła się charakterystyczna "gruba strzałka"

const myF = (a, b) => { return a + b }

// b) Jeżeli funkcja wymaga tylko jednego parametru, wtedy mogę pominąć nawiasy:

const myF = function(a) { return a * a }

const myF = a => { return a * a }

// c)Jeżeli funkcja ma tylko jedną instrukcję (powyżej tylko ta z return) to mogę pominąć klamry:

const myF = function(a) { console.log( a * a ) }

const myF = a => console.log( a * a );

// d)Jeżeli jedyną instrukcją funkcji jest ta zwracająca, możemy pominąć słowo return:

const myF = function(a) { return a * a }

const myF = a => a * a

// e)Gdy funkcja nie ma atrybutów, lub ma ich więcej, nawiasy muszę podawać:

const myF = function(a, b) { return a * b }
const myF = (a, b) => a * b

const myF = function() { return "ala ma kota" }
const myF = () => "ala ma kota"

// f)Jeżeli funkcja ma więcej instrukcji, wtedy muszę użyć klamer:

const myF = function(a, b) {
    const ret = a * b;
    console.log( ret );
    return ret;
}

const myF = (a, b) => {
    const ret = a * b;
    console.log( ret );
    return ret;
}

// g)Jeżeli jedyną instrukcją jest zwracanie literału obiektu, wtedy zachodzi konflikt między redukcją klamer (co powyżej), a klamrami obiektu. W takim przypadku zwracany obiekt trzeba objąć nawiasami:

const returnObj = name => ({ team : name, score : 0 })

// h) () zamiast pominięcia nawiasów albo {} oznacza, że zapis nie musi byc jedno liniowy, moze byc z enterem

const fn = (item, item2) => (
	`Podany argument to ${item} oraz ${item2} `
)

// 3.Poza skróceniem zapisu wyrażeń funkcyjnych, najczęściej funkcje strzałkowe pojawiają się tam, gdzie używaliśmy funkcji anonimowych czyli przy wszelakich eventach, sortach, forEach, fetch itp.

// 1)

const tabUsers = [
    { name : 'Marcin', age: 18 },
    { name : 'Ania', age: 16 },
    { name : 'Agnieszka', age: 16}
];
const tabNr = [1, 2, 3];

//poprzednio
tabUsers.forEach(function(el) {
    console.log(el.name.toUpperCase());
});

//teraz
tabUsers.forEach(el => console.log(el.name.toUpperCase()));

// b)

//Tworzymy nową tablicę z liczbami 2x większymi

//poprzednio
const tab2 = tabNr.map(function(el) {
    return el * 2;
});

//teraz
const tab2 = tabNr.map(el => el * 2);

// c)

//sprawdzamy czy niektórzy użytkownicy są pełnoletni

//poprzednio
const isSomeOfAge = tabUsers.some(function(el) {
    return el.age > 18
});

//teraz
const isSomeOfAge = tabUsers.some(el => el.age > 18);

// d)

//sprawdzam czy ostatnia litera imienia to "a" (nędzne założenie że to kobiece imię, co jest nieprawdą...)

//poprzednio
const woman = tabUsers.filter(function(el) {
    return el.charAt(el.length-1) === 'a';
});

//teraz
const woman = tabUsers.filter(el => el.charAt(el.length-1) === 'a');

// 3.Zmiana kontekstu dla this

// Najważniejszą sprawą w funkcji strzałkowej jest to, że w odróżnieniu od klasycznych funkcj nie tworzy ona wiązania this.

// this zazwyczaj wskazuje na obiekt, który daną metodę wywołał (czyli znajduje się przed kropką

// zwykly this wskazuje element/obiekt na którym dane zdarzenie sie wywołało, 
// nowy this wskazuje na element/obiekt z zakresu wyżej, dziedziczy z obiektu wyzej

//przyklad

const ob = {
    name : "Batman",

    btn() {
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', () => {
            //normalnie this wskazywało by na kliknięty btn
            //dzięki zastosowaniu funkcji strzałkowej, pod this
            //trafił zewnętrzny kontekst, czyli nasz obiekt ob

            console.log(this.name); //Batman
        });
    }
}

ob.btn();

// Kiedy więc stosować funkcję strzałkową a kiedy nie?

// Jeżeli w danej funkcji nie używamy this, wtedy śmiało używajmy skróconego zapisu (jeżeli oczywiście nam pasuje, bo nic na siłę).

// Na pewno też przy funkcjach wyższego rzędu (forEach, map, filter, sort itp) będzie to dobry wybór.

// Nigdy natomiast nie stosujmy strzałki przy tworzeniu metod danego obiektu czy metod prototypu (chyba że nie odwołują się do this):
