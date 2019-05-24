function calculate(){
	'use scrict';

	var total;

	var howMany = document.getElementById('howMany').value,
		price = document.getElementById('price').value,
		tax = document.getElementById('tax').value,
		discount = document.getElementById('discount').value;
	
		total = document.getElementById('total').value;

	total = howMany * price;

	tax /= 100;
	tax++;
	total *= tax;

	total -= discount;

	totalFix = total.toFixed();

	document.getElementById('total').value = totalFix;
	console.log(howMany);
	console.trace();
	return false;
}

// calcForm.onsubmit = calculate;

function init(){
	'use scrict';
	var calcForm = document.getElementById('calcForm');
	calcForm.onsubmit = calculate;
}

window.onload = init;