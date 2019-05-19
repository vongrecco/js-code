// tworzenie tablic

// 1. wolny i nie polecany
// var array1 = newArray('Wrocław','Bydgoszcz','Toruń','Lublin');


var array2 = ['Wrocław','Bydgoszcz','Toruń','Lublin'];


var array3 = ['Wrocław','Bydgoszcz','Toruń','Lublin','Gorzów Wielkopolski','Zielona Góra','Łódź','Kraków','Warszawa','Opole','Rzeszów','Białystok','Gdańsk','Katowice','Kielce','Olsztyn','Poznań','Szczecin'];

//ilosc wlementow tablicy
console.log(array3.length);


// wyswietla pojedynczy element tablicy
document.getElementById("1").innerHTML = array3[1];

//sortuje tablice alfabetycznie, ma zastosowanie tylko dla stringów!
document.getElementById("2").innerHTML = array3.sort();

//odwraca kolejnosc elementow tablicy
document.getElementById("3").innerHTML = array3.reverse();



var person = [
	{firstName:"John", lastName:"Doe", age:46, bornIn: 1592, die: 1755},
	{firstName:"Mike", lastName:"Monroe", age:34, bornIn: 1455, die: 1755},
	{firstName:"Anna", lastName:"Moore", age:22, bornIn: 1567, die: 1755},
	{firstName:"Tom", lastName:"Hastings", age:23, bornIn: 1499, die: 1755},
	{firstName:"Steven", lastName:"Cook", age:43, bornIn: 1500, die: 1755} 
];

// filter "inventor" przechowuje wszystkie dane tablicy
var sortNumber1 = person.filter(function(inventor) {
	if( inventor.bornIn >= 1500 && inventor.bornIn <= 1599){
		//zwracamy true aby wyswietlic
		return true;
	}
});

// mozna tez to zrobic w jednej lini 

var sortNumber2 = person.filter( inventor => (inventor.bornIn >= 1500 && inventor.bornIn <= 1599));

console.table(sortNumber2);
document.getElementById("4").innerHTML = sortNumber1;


//Metoda map() tworzy nową tablicę zawierającą wyniki wywoływania podanej funkcji dla każdego elementu wywołującej tablicy. Nowa tablica z konkretnymi parametrami

var sortObject = person.map( inventor => (inventor.firstName + ' ' + inventor.lastName));

console.log(sortObject);


// sort, podajemy dwie nazwy dla parametrów, które prrzetrzymują tablice.
var sortByYear = person.sort(function(a,b){
// jesli pierwszy porównywany jest większy to zwraca 1 i tak w koło
	if(a.bornIn > b.bornIn){
// return bierze na początek
		return 1;
	} else{
// else -1 oznacza jako mniejsze i bierze za a
		return -1;
	}
});

console.table(sortByYear);

// jest nazwą funkcji porównującej elementy. Jeżeli parametr zostanie pominięty, tablica będzie posortowana w porządku leksykograficznym (alfabetycznie).


// sortowanie po liczbie, drugi sposob, od najmlodszego do najstarszego
var sortByYear2 = person.sort(function(a, b){
	if( a.age > b.age){
		return 1;	
	} else{
		return -1;
	}

});

console.table(sortByYear2);


///reduce() - Round all the numbers in an array, and display the sum:

// suma wszystkich liczb z tablicy

// poprzednia wartosc/aktualna wartosc/ index w tablicy/ tablica
var addByReturn = [0,1,2,3,4,5,6].reduce( function(previousValue, currentValue, index, array){
	return previousValue+currentValue;
});

console.log(addByReturn);


// drugi przyklad uzycia
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6


// sumowanie roznicy wieku

// wartosc poprzednia / wartosc obecna w parametrach
var addAge = person.reduce(( total, inventor) =>{
	return total + (inventor.die - inventor.bornIn);
// nalezy podac 0 poniewaz w pierwszym wywolaniu nie mamy parametru total!
}, 0);	

console.log(addAge);


// sorotwanie od najstarszego do namlodszego 

var sortAge = person.sort( function(a, b ){
	var lastGuy = a.die - a.bornIn,
		nextGuy = b.die - b.bornIn;

		if( lastGuy > nextGuy){
			return -1;
		}else{
			return 1;
		}
});

console.table(sortAge);

