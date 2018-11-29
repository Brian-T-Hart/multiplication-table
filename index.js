var boxes = document.getElementById('boxes');
var instructions = document.getElementById('instructions');
var quizBtn = document.getElementById('quiz-button');
var resetBtn = document.getElementById('reset-button');
var review = document.getElementById('review');
var scoreElement = document.getElementById('score');
var submitBtn = document.getElementById('submit-button');
var score = 0;

function createBoxes() {
	for (var i = 1; i <= 10; i++) {

		for (var j = 1; j <=10; j++) {
			var box = document.createElement('INPUT');
			box.setAttribute('type', 'text');
			var boxId = i + 'x' + j;
			box.setAttribute('id', boxId);
			var boxValue = i * j;
			box.setAttribute('value', boxValue);
			box.setAttribute('data-value', boxValue);
			box.classList.add('box');
			boxes.append(box);
		}

	}
}

function startQuiz() {
	var emptyBoxes = document.querySelectorAll('input');

	for (var h = 0; h < emptyBoxes.length; h++) {
		emptyBoxes[h].value = "";
	}

	review.classList.add('hidden');
	instructions.classList.remove('hidden');
	quizBtn.classList.add('hidden');
	submitBtn.classList.remove('hidden');
}

function submit() {
	var answerElements = document.querySelectorAll('.box');
	
	for (var k = 0; k < answerElements.length; k++) {
		var correctAnswer = answerElements[k].getAttribute('data-value');

		if (answerElements[k].value == correctAnswer) {
			score++;
			answerElements[k].classList.add('green');
		}
		else {
			answerElements[k].classList.add('red');
		}
	}

	submitBtn.classList.add('hidden');
	resetBtn.classList.remove('hidden');
	instructions.classList.add('hidden');
	scoreElement.innerHTML = 'Score: ' + score + '%';
}

function reset() {
	window.location.reload();
}

createBoxes();