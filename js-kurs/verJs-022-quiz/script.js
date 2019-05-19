let currentQuestion = 0;
let score = 0;
let totQuestions = questions.length;

let container = document.getElementById('quizContainer');
let questionEl = document.getElementById('question');
let opt1 = document.getElementById('opt1');
let opt2 = document.getElementById('opt2');
let opt3 = document.getElementById('opt3');
let opt4 = document.getElementById('opt4');
let nextButton = document.getElementById('nextButton');
let resultCont = document.getElementById('result');

function loadQuestion(questonIndex){
	let q = questions[questonIndex];
	questionEl.textContent = (questonIndex + 1) + ". " + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}

// function square(number) {
//    return number * number;
//    console.log('number');
// }

// square();