'use strict';

/*
Application “Guess Number”
Web приложение, при запуске которого пользователю предлагается угадать число от 1 до 100 за 5 попыток. В реализации необходимо предусмотреть вариант настроек диапазона чисел (валидация: не отрицательные, без плавающей точки, минимум = 1, максимум = 200) и количества попыток (валидация: не отрицательные, без плавающей точки, минимум = 1, максимум = 15).
Игра начинается с того, что пользователь видит сообщение: “Привет, я загадал число от min до max вашего диапазона. Попробуй угадать его за x попыток!” И пользователю предлагается использовать свою первую попытку путём ввода первого числа в инпут и нажать кнопку GENERATE.
Примечание: в любой момент времени, пользователь может прекратить игру нажав на кнопку EXIT, после чего игра моментально остановится.
	Со второй попытки для пользователя вводятся подсказки, типа: “Не угадал, но теплее!!! Осталось n попыток” либо “Не угадал, холоднее… Осталось n попыток”.
	Если пользователь угадал число - выводится сообщение “Поздравляю! Ты угадал задуманное число за n попыток”.
	Остальные мелкие доработки - на усмотрение разработчика.
*/

// exit button
var exitBtn = document.querySelector('.exit-btn');
exitBtn.addEventListener('click', exit);

// General

var firstPart = document.querySelector('.part-1');
var secondPart = document.querySelector('.part-2');
var guessGame = document.querySelector('.part-3');

// first part

var playBtn = document.querySelector('.play');
var cancelBtn = document.querySelector('.cancel');
var welcomeMessage = document.querySelector('.welcome-message');

playBtn.addEventListener('click', () => {
	firstPart.classList.add('hidden');
	secondPart.classList.remove('hidden');
})
cancelBtn.addEventListener('click', () => {
	welcomeMessage.textContent = 'Bye!';
	playBtn.disabled = true;
	cancelBtn.disabled = true;
})

// second part

var guessBtn = document.querySelector('.guess-btn');
var chooseRange = document.querySelector('.choose-range');
var minValue;
var maxValue;
var secretNumber;
var minField = document.querySelector('.min-value');
var maxField = document.querySelector('.max-value');

guessBtn.addEventListener('click', () => {
	minValue = Number(document.querySelector('.min-value').value);
	maxValue = Number(document.querySelector('.max-value').value);
	secretNumber = Math.floor((Math.random() * (maxValue - minValue)) + minValue);

	if (isInteger(minValue) && isInteger(maxValue)) {
		if (isValidate(minValue, maxValue)) {
			guessGame.classList.remove('hidden');
			secondPart.classList.add('hidden');	
		} else {
			chooseRange.textContent = 'Range from 1 to 200';
		}	
	} else {
		chooseRange.textContent = 'Only integer numbers 😉';
	}
})

// third part 

var generateBtn = document.querySelector('.generate-btn');
var intoMessage = document.querySelector('.tries-message');
var attempts = 4;
var counter = 0;
var guessInput = document.querySelector('.guess-number');

generateBtn.addEventListener('click', () => {
	var correctAnswer = attempts > 1 ? 'attempts' : 'attempt';
	var guessNumber = Number(document.querySelector('.guess-number').value);
	console.log(secretNumber);

	if (!guessNumber) {
		message('Any guess?😏')
	} else if (guessNumber === secretNumber) {
		message(`Congratulations! You guessed the intended number in ${++counter} attempts`);
		generateBtn.disabled = true;
	} else if (guessNumber > secretNumber) {
		if (attempts > 0) {
			message(`Too high, only ${attempts} ${correctAnswer} left 😬`);
			--attempts;
			counter++;
		} else {
			message('You lose! Try again or come later 👋');
			generateBtn.disabled = true;
		}
	} else if (guessNumber < secretNumber) {
		if (attempts > 0) {
			message(`Too low, only ${attempts} ${correctAnswer} left 🙁`);
			--attempts;
			counter++;
		} else {
			message('You lose! Try again or come later 👋'); 
			guessInput.value = '';
			generateBtn.disabled = true;    

		}
	}
	console.log('click');
})

// Functions

function isValidate (minValue, maxValue) {
	if (minValue <= 0 || 
		maxValue > 200 || 
		minValue >= maxValue) {
		return false;
	} 
	return true;
}
function exit() {
	firstPart.classList.remove('hidden');
	secondPart.classList.add('hidden');
	guessGame.classList.add('hidden');
	playBtn.disabled = false;
	cancelBtn.disabled = false;
	welcomeMessage.textContent = "Hi! Do you want to play? I will pick a number from your range, and you will guess it in 5 attempts! Let's start?";
	message.textContent = '';
	minField.value = '';
	maxField.value = '';
}
function message(messi) {
	intoMessage.textContent = messi;
}
function isInteger(num) {
	return (num ^ 0) === num;
}

