function random(){
	rand = Math.floor(Math.random() * 10) + 1;
	document.getElementById('display').innerText = rand;
	console.log(rand);
}

document.getElementById('button').onclick = random;

