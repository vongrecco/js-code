// 1.  jeżeli funkcja oczekuje jakiś parametrów, nie musimy ich do niej przekazywać:

function myF(a, b) {
    console.log(a, b);
}

myF(); //undefined, undefined

// a) W klasycznym JavaScript jeżeli chcielibyśmy ustawić domyślne wartości takich parametrów skorzystalibyśmy z mniej więcej takiej instrukcji:

function myF(a, b) {
    a = (typeof a === "undefined)? 10 : a;
    b = (typeof a === "undefined)? 5 : b;

    console.log(a, b);
}

myF(); //10, 5
myF(12); //12, 5
myF(3,4); //3, 4


// b) W ES6 ustawianie domyślnych wartości dla parametrów jest o wiele prostsze:

function print(txt = "lorem") {
    console.log(txt);
}

print("kot"); //kot
print(); //lorem

// c) Do ustawiania domyślnych parametrów możemy też wykorzystać dodatkowe funkcje:

function randomTen() {
    const min = 1;
    const max = 10;
    return Math.floor(Math.random()*(max-min+1)+min);
}

function print(nr = randomTen()) {
    console.log("Number is : " + nr)
}

print(20); //Numer is 20
print(); //Number is 5

// To miejsce przed deklaracją zmiennej zwie się temporal dead zone (tymczasowa strefa śmierci), bo nie możemy odwoływać się do zmiennej, której jeszcze nie zadeklarowaliśmy (i dobrze!)

// 2.Spread syntax

// Spread syntax, to nowy zapis, który umożliwia rozbijanie iterowanej (takiej po której można robić pętle) wartości na składowe.
// Co to jest ta iterowana wartość? Może nią być string (bo składa się z poszczególnych liter), może to być tablica (bo składa się z elementów), mogą to być kolekcje (po których bardzo często robiliśmy pętle for).

const divs = document.querySelectorAll('div');

//rozbijanie tablicy na poszczególne liczby
const tab = [1,2,3,4];
console.log(...tab);

//kopiowanie tablic
const tab2 = [...tab]; //kopia tablicy tab
tab2 = tab.slice(); //starsza metoda

//łączenie tablic
const tabPart = [3, 4]
const tabFull = [1, 2, ...tabPart, 5, 6]; //1,2,3,4,5,6

//za pomocą call
[].forEach.call(divs, function(div) {
    console.log(div);
})

//za pomocą spread
[...divs].forEach(div => {
    console.log(div);
})

// ex 2

const divs = document.querySelectorAll('div');

//za pomocą call
[].forEach.call(divs, function(div) {
    console.log(div);
})

//za pomocą spread
[...divs].forEach(div => {
    console.log(div);
})

// 3. rest param

// a) Identycznie jak spread syntax wygląda rest parameter.
// Zapis ten umożliwia zbieranie w jedną zmienną (będącą tablicą) wielu parametrów przekazywanych do funkcji:

function myF(...param) {
    console.log(param); //[1, 2, 3, 4, 5]
}

myF(1,2,3,4,5);

