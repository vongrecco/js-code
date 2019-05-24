function textLimit(){
	'use strict';
	var limitedText;

	var orginalText = document.getElementById('comment').value;
	var lastSpace = orginalText.lastIndexOf(' ', 100);
	var limiteText = orginalText.slice(0, lastSpace);
	document.getElementById('count').value = orginalText.length;

	document.getElementById('wynik').value = limiteText;
	return false;
}

function init(){
	'use strict';
	document.getElementById('charVal').onsubmit = textLimit;
	console.trace();

}

window.onload = init;
