var secondHand = document.querySelector('.sek-hand'),
    minsHand = document.querySelector('.min-hand'),
    hourHand = document.querySelector('.hour-hand'); 

function setDate(){

  var now = new Date();



  var seconds = now.getSeconds();
  var secondDegrees = (( seconds / 60) * 360) + 90;
  secondHand.style.transform = 'rotate('+secondDegrees+'deg)';


  var minutes = now.getMinutes();
  var minutesDegree = ((minutes / 60 ) * 360) + 90;
  minsHand.style.transform = 'rotate('+minutesDegree+'deg)'; 


  var hour = now.getHours();
  var hourDegree = ((hour / 12 ) * 360) + 90;
  hourHand.style.transform = 'rotate('+hourDegree+'deg)'; 

}

setInterval(setDate, 1000);

