function isNotEmpty(pole){
	if(pole.value == ""){
		style(pole, false);
		return false;
	}else{
		style(pole, true);
		return true;
	}
}

function isNumber(pole){
	if(isNaN(pole.value)){
		style(pole, false);
		return false;
	}else{
		style(pole, true);
		return true;
	}
}

function isChecked(pole){
	if(pole.checked == false){
		style(pole, false);
		return false;
	}else{
		style(pole, true);
		return true;
	}
}

function isSelected(pole){
	var radio = document.getElementByName(pole);
	for(var i=0; i<radio.length; i++){
		if(radio[i].checked == true){
			document.getElementById("i" + pole).innerHTML = "";
			return true;
		}
	}
	document.getElementById("i" + pole).innerHTML = "Ta wartość musi być liczbą!";
	return false;
}

function style(pole, status){
	if(status){
		document.getElementById("i"+pole.id).innerHTML = "";
		pole.className = "ok";
	}else{
		document.getElementById("i"+pole.id).innerHTML = "Uzupełnij to pole!";
		pole.className = "blad";
	}
}

function onSubmit(form){
	if(
		isNotEmpty(form.pers) //&&
		//isNumber(form.nrklienta) &&
		//isNotEmpty(form.email) &&
		//isNotEmpty(form.usluga) &&
		//isSelected("ocena") &&
		//isNotEmpty(form.komentarz) &&
		//isChecked(form.zgoda)
	){
			return true;
	}else{
		return false;
	}
}

window.onload = Init;

function Init(){
	var pers = document.getElementById("pers");
	pers.onblur = function(){
		isNotEmpty(this);
	}
	
	var nrklienta = document.getElementById("nrklienta");
	nrklienta.onblur = function(){
		isNumber(this);
	}
	
	var email = document.getElementById("email");
	email.onblur = function(){
		isNotEmpty(this);
	}
	
	var usluga = document.getElementById("usluga");
	usluga.onblur = function(){
		isNotEmpty(this);
	}
	
	var komentarz = document.getElementById("komentarz");
	komentarz.onblur = function(){
		isNotEmpty(this);
	}
	
	var zgoda = document.getElementById("zgoda");
	zgoda.click = function(){
		isChecked(this);
	}
	
	document.forms["opinia"].onsubmit = function(){
		return onSubmit(this);
	}
}