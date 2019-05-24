// 1. tworzenie tablcy
var tablicka = ['jest', 'tekstem', 'stosowanym', 'jako', 'przykładowy', 'wypełniacz', 'przemyśle', 'poligraficznym'];
//2. wyswietlanie ilosci elementów
console.log(tablicka.length);
// 3. Dodanie elementu po
tablicka.push('Nowy Element');
// 4. ostatni element tablicy
console.log(tablicka[tablicka.length-1]);

// 4. wyswietl wszystkie elementy tablicy

for( var i = 0; i < tablicka.length; i++){
	console.log(tablicka[i]);
}

// lub

tablicka.forEach(function(el, i){
	console.log(i + el);
});

// 5. tablice wielo wymiarowe!

var tab = [];

tab[0] = ['Jagna', 22];
tab[1] = ['Bogna', 25];
tab[2] = ['Tania', 24];

document.getElementById('tab1').innerHTML = tab[1] + '<br>';

// 6. łączenie elementów tablicy join

var joinTab = tablicka.join(' + ');
document.getElementById('tab2').innerHTML = joinTab + '<br>';

// 7. odwracanie kolejności elementów reverse()

var reverseTable = tablicka.reverse();
document.getElementById('tab3').innerHTML = reverseTable + '<br>';

// 8 sort!

var toNieTab = ['Jest', 'dostępnych', 'wiele', 'różnych', 'wersji', 'Lorem', 'Ipsum', 'ale', 'większość'];

var sortTab = toNieTab.sort();

var ourTable = [100, 10, 25, 310, 1200, 400];

function compareNumbers(a, b) {
    return a - b
}


ourTable.sort();
document.getElementById('tab4').innerHTML = 'ourTable.sort(): ' + ourTable;

ourTable.sort(compareNumbers);
document.getElementById('tab5').innerHTML = 'ourTable.sort(compareNumbers): ' + ourTable;

function compareNumbersReverse(a, b) {
    return b - a
}

ourTable.sort(compareNumbersReverse);
document.getElementById('tab6').innerHTML = 'ourTable.sort(compareNumbersReverse): ' + ourTable;