// document.addEventListener('DOMContentLoaded', function(){
	'use strict';

	var mail = document.getElementById('mail');
	// var mailVal = document.getElementById('mail').value;
	// console.log(mail);


	function change(){
		if(document.getElementById('mail').value == ''){
			mail.style.backgroundColor = "red";
			console.log('error');
		}else{
			mail.style.backgroundColor = "blue";
			console.log('mailVal');
		}
	}


	document.getElementById('mail').addEventListener('blur', change);
// });