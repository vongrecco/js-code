function objVal(){
	'use scrict';
	var total;

	var promien = document.getElementById('promien').value;
	promien = Math.abs(promien);

	total = (4/3) * Math.PI * Math.pow(promien, 3);

	total = total.toFixed(4);

	document.getElementById('obk').value = total;
	return false;
}


// calcForm.onsubmit = calculate;

function init(){
	'use scrict';
	var calcForm = document.getElementById('calcForm');
	calcForm.onsubmit = objVal;
}

window.onload = init;