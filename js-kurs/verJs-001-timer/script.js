
function setDate(){
	var hourHand = document.querySelector('.hour-hand'),
		minutesHand = document.querySelector('.min-hand'),
		secondsHand = document.querySelector('.sek-hand');
	var date = new Date();
	// console.log(date);

	var getHours = date.getHours();
	var hourDegree = ((getHours/12) *360) + 90;
	hourHand.style.transform = 'rotate('+hourDegree+'deg)';

	var getMinutes = date.getMinutes();
	var minutesDegree = ((getMinutes/60) *360) + 90;
	minutesHand.style.transform = 'rotate('+minutesDegree+'deg)';

	var getSeconds = date.getSeconds();
	var secondDegrees = ((getSeconds / 60) * 360) + 90;
	secondsHand.style.transform = 'rotate('+secondDegrees+'deg)';

	console.log(minutesDegree);
}

setInterval(setDate, 1000);