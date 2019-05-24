var tasks = [];

document.addEventListener('DOMContentLoaded', function (){
	'use strict';
	document.getElementById('klik').addEventListener('click', function (){
			var task = document.getElementById("zadanie").value;
			var iloscZadan = document.getElementById("iloscZadan");
			// var ilosc = task.length;
			// console.log(ilosc);

			iloscZadan.textContent = "ilosc podanych zadan: " + parseInt(tasks.length+ 1) ;
			tasks[tasks.length] = task;

			
			

			console.log(tasks);
	});
});

// var tab = ["ola", "ala", "maja"];

// console.log(tab);
// console.log(tab.length);
// console.log(tab[0]);

// for(i = 0, dlugosc = tab.length; i < dlugosc; i++){
// 	console.log(tab[i]);
// }

