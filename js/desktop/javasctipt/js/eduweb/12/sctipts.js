function isNotEmpty(pole){
if(pole.value == ""){
		document.getElementById("i" + pole.id).innerHtml="Uzupełnij te pole";
		pole.class("blad");
		return false;
	}
	else{
		document.getElementById("i" + pole.id).innerHtml="";
		pole.class("ok");
		return true;
	}
}

function isNumber(pole){
	if(isNotEmpty){
		if(isNaN(pole)){
			document.getElementById("i" + pole.id).innerHtml="to musi być liczba";
			pole.class("blad");
			return false;
		}else{
			document.getElementById("i" + pole.id).innerHtml="";
			pole.class("ok");
			return true;
		}
	} else{
		return false;
	}
}

function isChecked(pole){
	if(pole.checked){
		document.getElementById("i" + pole.id).innerHtml="Uzupełnij te pole";
		pole.class("blad");
		return false;	
	}
	else{
		document.getElementById("i" + pole.id).innerHtml="";
		pole.class("ok");
		return true;	
	}
}
// isNotEmpty();