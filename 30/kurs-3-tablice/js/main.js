var tablica =['Ala', 'ma', 'kota', 6, 7];


// console.log(tablica[2]);

tablica.push('Pusz');




console.log(tablica);

console.log(tablica.length);

console.log(tablica[tablica.length-1]);

var a = document.getElementById('val1');


for (var b = 0; b <= tablica.length; b++){
	console.log(b+': ' + tablica[b]);
}

///

tablica.forEach(function(el, i){
	console.log('Imię numer ' +i+ ': ' +el);
});

// i == numer petli
// el == wartosci z tablicy

///Tablice wielowymiarowe

var aTable = [];

aTable[0] = ["olag", 23];
aTable[1] = ['maciej', 32];
aTable[2] = ['kris', 22];

console.log('imię: ' + aTable[0][0] + ', wzrost: ' + aTable[0][1]);
console.log('imię: ' + aTable[1][0] + ', wzrost: ' + aTable[1][1]);
console.log('imię: ' + aTable[2][0] + ', wzrost: ' + aTable[2][1]);

// łączenie

var bTable = ['Ala', 'ma', 'kota', 6, 7];

document.getElementById('val1').innerHTML = bTable.join(', ');

//odwrocenie tablicy

var cTable = [1,2,3,4,5,6,7,8,9];

document.getElementById('val2').innerHTML = cTable.reverse();

//sort 


var dTable = [100, 10, 25, 310, 1200, 400];

document.getElementById('val3').innerHTML = 'Tablica nieposortowana to: '+ dTable;

document.getElementById('val4').innerHTML = 'Tablica posortowana tylko sort(): '+ dTable.sort();

document.getElementById('val5').innerHTML = 'Tablica posortowana tylko sort(): '+ dTable.sort();

function numbCompare(a,b){
	return a - b;
}

document.getElementById('val5').innerHTML = 'Tablica posortowana za pomocą funkcji: ' + dTable.sort(numbCompare);


// sednia wartosc z tablicy

var eTable = [5,4,4,5,3,5,6,5,5];

function addTable(){
	var sum = 0;
	for(var i = 0; i <= eTable.length; i++){
		tabSum =+ eTable[i];
	}

	return (tabSum / i);
}







































