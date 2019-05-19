function getEmailAdress(){

	var emailAdress = document.getElementById("mailAdress").value;



	var getEmail = emailAdress.substring(0, emailAdress.indexOf("@"));
	var getDomain = emailAdress.substring(emailAdress.indexOf("@")+1);


	document.getElementById("mail").value = getEmail;
	document.getElementById("domain").value = getDomain;

}