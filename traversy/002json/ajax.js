document.addEventListener("DOMContentLoaded", function(event){
	document.getElementById('button1').addEventListener('click', loadUser);
	

	function loadUser(){
		
		var xhr = new XMLHttpRequest();

		xhr.open("GET", "user.json", true);

		xhr.onload = function(){
			if(this.status == 200){
				// JSON.parse - służy do parsowania wartosci z json do js
				var userName = JSON.parse(this.responseText);
				var output ="";
				output =+ "<ul>"+
							"<li>ID: "+ userName.id + "</li>"+
							"<li>Name: "+ userName.name + "</li>"+
							"<li>Email: "+ userName.email + "</li>"+
						  "</ul>";
				document.getElementById('text').innerHTML = output;
			

			}else if(this.status == 404){
				console.log('error');
			}
		}

		xhr.send();
	}


	document.getElementById('button2').addEventListener('click', loadUsers);
	function loadUsers(){
		var xhr2 = new XMLHttpRequest();
		xhr2.open("GET", "users.json", true);

		xhr2.onload = function(){

			if(this.status == 200){
				var users = JSON.parse(this.responseText);

				var output2 = "";
				for(var i in users){
					console.log(users[i].name);
				output2 =+ "<ul>"+
							"<li>ID "+users[i].id+"</li>"+
							"<li>Name "+users[i].name+"</li>"+
							"<li>Email: "+users[i].email+"</li>"+
						  "</ul>"	;		
				}


				document.getElementById("text2").innerHTML = output2;

			}else if(this.status == 404){
				document.getElementById("users").innerHTML = "błąd połączenia";
			}
		}
		xhr2.send();

	}
});