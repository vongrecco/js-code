const table = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let addBtn = document.querySelector('.addNumber');
const randomNumbers =[];
let counter = 1;

addBtn.addEventListener('click', function(){
	if(counter <= 6 ){
		counter++;
		let randomNumber = Math.floor(Math.random()*20+1);
		randomNumbers.push(randomNumber);
		for(number in randomNumbers){
			if(randomNumbers[number] === randomNumber){
				console.table(randomNumbers);
				randomNumbers.slice(number, 1);
			}else{
				console.table(randomNumbers);
			}
			
		}
	}else{
		console.log('maksymalnie 6 numerów');
		addBtn.disabled = true;
	}
});


