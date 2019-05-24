// http://kursjs.pl/kurs/super-podstawy/instrukcje-warunkowe.php

function addNumbers(){
    (2 > 6)? console.log('true') : console.log('false')
}

addNumbers();


// switch

var x = 7;

switch(x){
    case 1:
        console.log("jeden");
        break;
    case 2:
        console.log('dwa');
        break;
    case 3:
        console.log('trzy');
        break;
    case 4:
        console.log('cztery');
        break;
    default:
        console.log('nic z tego');
}

// while

var a = 10;

while(a <= 15){
    document.write(a + ' while || ');
    a++;
}

document.write('<br>');
// do while

var b = 3;

do{
    document.write(b + ' do while || ')
    b++;
}while(b < 16);


document.write('<br>');
// for

for(var c = 5; c < 11; c++){
    document.write(c + ' for || ');
}

document.write('<br>');
// pyntla w pętli

var i = 1;
while (i <= 10) { //rozpoczynamy pętlę typu while
    var msg = '';

    for (var x=0; x < i; x++) { //za każdym razem wykonujemy pętlę for
        msg += '.'
    }

    document.write(msg + ' <br> '); //po każdej iteracji pętli while wypisujemy tekst
    i++; //zwiększamy "i"
}

document.write('<br>');
// Pętle wykonywane po tablicach

var tablica = ['tab1', 'tab2', 'tab3', 'tab4'];

for (var f = 0; f < tablica.length; f++){
    document.write(tablica[f] + ' ');
}


//tablice

var myArray = ['Joanna', 'Anna', 'Maria'];

var myArray2 = new Array('Tomek', 'Janek', 'Maria');

//dodaje do tablicy
myArray2.push('Marek');

//dlugosc - length

// ostatni element tablicy

var lastEl = myArray2[myArray2.length - 1];

// pętla po tablicy

var mojaTablica = ['a', 'b', 'c', 'd', 'e', 'f', 'h'];

for (var x = 0; x < mojaTablica.length; x++){
    // console.log( 'Moje imie to:' + x + mojaTablica[x] );
}

// drugi sposób

var mojaTablica2 = ['a', 'b', 'c', 'd', 'e', 'f', 'h'];

mojaTablica2.forEach(function(el,i){
    // console.log('Imie to: ' +i+ mojaTablica2[i]);
});


// wielowymiarwe

var ourTable = [];
ourTable[0] = ['Marcin' , '183'];
ourTable[1] = ['Ania' , '173'];
ourTable[2] = ['Agnieszka' , '170'];
//...itp

// console.log('imię: ' + ourTable[0][0] + ', wzrost: ' + ourTable[0][1]);
// console.log('imię: ' + ourTable[1][0] + ', wzrost: ' + ourTable[1][1]);
// console.log('imię: ' + ourTable[2][0] + ', wzrost: ' + ourTable[2][1]);


// łączenie wyników
var table2 = ['Jan', 'Maja', 'Ola', "zbysio"];
console.log(table2.join(" - "));

// .reverse() - odwraca kolejnosc tablicy
// .sort() - sortowanie tablicy

//tworzymy funkcję do segregacji liczb
function compareNumbers(a, b) {
    return a - b
}

var ourTable = [100, 10, 25, 310, 1200, 400];

console.log('Bez sortowania: ' + ourTable );

ourTable.sort()
console.log( 'ourTable.sort(): ' + ourTable );

ourTable.sort(compareNumbers)
console.log('ourTable.sort(compareNumbers): ' + ourTable);

// Wyliczanie średniej wartości elementów tablicy

var tab1 = [1,22,12,34,2];

function tableAverage(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return (sum / i);
}