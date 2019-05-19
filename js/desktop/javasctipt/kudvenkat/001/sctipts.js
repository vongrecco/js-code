function addNumbers(){

// http://www.kurshtml.edu.pl/js/parsefloat,global.html

	var firstNumber =  document.getElementById('txtFirstNumber').value;
	if (firstNumber == ""){
		alert("first number jest required");
		return;
	}

	firstNumber = parseFloat(firstNumber);
	if(isNaN (firstNumber) ){
		alert('Wstaw numer w pierwszym inpucie');
		return;
	}

	var secondNumber =  document.getElementById('txtSecondNumber').value;
	if (secondNumber == ""){
		alert("second number jest required");
		return;
	}

	secondNumber = parseFloat(secondNumber);
	if(isNaN (secondNumber) ){
		alert('Wstaw numer w drugim inpucie');
		return;
	}


	document.getElementById('resoult').value = firstNumber + secondNumber;
}

var click = document.getElementById('btnAdd');
click.addEventListener('click', addNumbers)