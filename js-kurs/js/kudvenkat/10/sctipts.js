// Operatory porównania
// == Jest równe. 1==0 wynik fałsz
// === Jest idealnie równe (zgodność wartości i typów). 1==="1" wynik fałsz
// != Nie jest równe. 1!=0 wynik prawda
// > Jest większe. 1>0 wynik prawda
// < Jest mniejsze. 1<0 wynik fałsz
// >= Jest większe lub równe. 1>=0 wynik prawda
// <= Jest mniejsze lub równe. 1<=0 wynik fałsz

// Napisz program, który będzie porównywał zmienną w formacie liczbowym i zmienną
// w formacie tekstowym. Wprowadzone wartości i wynik powinny zostać wyświetlone
// na stronie WWW.

var a = 10; 
var b = '10';
var c = parseInt(b);
console.log(b);

console.log(a==c);