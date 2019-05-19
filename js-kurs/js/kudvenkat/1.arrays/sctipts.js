var myArray = ['Anna', 'Zuzanna', 'Monika'];

myArray.push('Kasia');
// myArray.pop();
// myArray.shift('Magda');
myArray.unshift('Ola');
myArray.splice();


document.getElementById("container").innerHTML = myArray;
document.write(myArray.length);

var person = {firstName:"John", lastName:"Doe", age:46};
document.getElementById("container2").innerHTML = person['age'];

// pętla w tablicy :)

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("container3").innerHTML = text;

// pytntla w tablicy 2, literacja wszystkich wartosci

var numbers = [1,2,3,4,5,6,6,12];

for ( i=0; i < numbers.length; i++){
	// console.log(numbers[i]);
}

// zmniejszenie długości tablicy

var numbers = [1,2,3,4,5,6,6,12,1,2,2,2,2,1,1];

if(numbers.length > 6){
	numbers.length = 6;
}

for ( i = 0; i < numbers.length ; i++ ){
	console.log(numbers[i]);
}

// http://www.w3schools.com/js/js_array_methods.asp
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/length