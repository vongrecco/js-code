function addNumbers(){

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

	// var firstNumber = parseFloat( document.getElementById('txtFirstNumber').value );
	// var secondNumber = parseFloat( document.getElementById('txtSecondNumber').value );

	document.getElementById('resoult').value = firstNumber + secondNumber;
}
