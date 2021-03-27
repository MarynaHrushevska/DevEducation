'use strict';

/*
Application “Guess Number”
Web приложение, при запуске которого пользователю предлагается угадать число от 1 до 100 за 5 попыток. В реализации необходимо предусмотреть вариант настроек диапазона чисел (валидация: не отрицательные, без плавающей точки, минимум = 1, максимум = 200) и количества попыток (валидация: не отрицательные, без плавающей точки, минимум = 1, максимум = 15).
Игра начинается с того, что пользователь видит сообщение: “Привет, я загадал число от min до max вашего диапазона. Попробуй угадать его за x попыток!” И пользователю предлагается использовать свою первую попытку путём ввода первого числа в инпут и нажать кнопку GENERATE.
Примечание: в любой момент времени, пользователь может прекратить игру нажав на кнопку EXIT, после чего игра моментально остановится.
	Со второй попытки для пользователя вводятся подсказки, типа: “Не угадал, но теплее!!! Осталось n попыток” либо “Не угадал, холоднее… Осталось n попыток”.
	Если пользователь угадал число - выводится сообщение “Поздравляю! Ты угадал задуманное число за n попыток”.
	Остальные мелкие доработки - на усмотрение разработчика.

использовать флексы +
выравнивание по центру +
каждый второй инпут должен иметь отличающиийся бордер +
должны быть описаны стили для кнопок disabled +
hover добавить shadow +
инпуты в фокусе должны иметь цвет outline +
*/


// exit button
var exitBtn = document.getElementById('exit-btn');
exitBtn.addEventListener('click', exit);

// General

var firstPart = document.getElementById('screen-one');
var secondPart = document.getElementById('screen-two');
var thirdPart = document.getElementById('screen-three');

// first part

var playBtn = document.getElementById('screen-one__group__play');
var cancelBtn = document.getElementById('screen-one__group__cancel');
var welcomeMessage = document.getElementById('screen-one__message__text');

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

var guessBtn = document.getElementById('screen-two__button');
var chooseRange = document.getElementById('screen-two__header');
var minValue;
var maxValue;
var secretNumber;
var minField = document.getElementById('screen-two__min-value');
var maxField = document.getElementById('screen-two__max-value');

guessBtn.addEventListener('click', () => {
	minValue = Number(minField.value);
	maxValue = Number(maxField.value);
	secretNumber = Math.floor((Math.random() * (maxValue - minValue)) + minValue);

	if (isInteger(minValue) && isInteger(maxValue)) {
		if (isValidate(minValue, maxValue)) {
			thirdPart.classList.remove('hidden');
			secondPart.classList.add('hidden');	
		} else {
			chooseRange.textContent = 'Range from 1 to 200';
		}	
	} else {
		chooseRange.textContent = 'Only integer numbers 😉';
	}
})

// third part 

var generateBtn = document.getElementById('screen-three__button');
var intoMessage = document.getElementById('screen-three__message');
var guessInput = document.getElementById('screen-three__guess');
var attempts = 5;
var counter = 0;

var delta = null;

generateBtn.addEventListener('click', () => {
	var correctAnswer = attempts > 1 ? 'attempts' : 'attempt';
	var guessNumber = Number(document.getElementById('screen-three__guess').value);
	var currentDelta = Math.abs(secretNumber - guessNumber);

	if (!guessNumber) {
		return message('Any guess?😏');
	} 
	if (guessNumber === secretNumber) {
		generateBtn.disabled = true;
		message(`Congratulations! You guessed number in ${++counter} ${correctAnswer}`);
		return;
	} 
	--attempts;
	counter++;

	if (attempts === 0) {
		message('You lose! Try again or come later 👋'); 
		guessInput.value = '';
		generateBtn.disabled = true;  
		return;  
	}

	if (counter === 1) {
		message(`Wrong. ${attempts} ${correctAnswer} left`);
	} else {
		if (delta < currentDelta) {
			message(`Colder. ${attempts} ${correctAnswer} left`);
		}  
		if (delta > currentDelta) {
			message(`Warmer! ${attempts} ${correctAnswer} left`);
		}
		if (delta === currentDelta) {
			message(`Warmer... ${attempts} ${correctAnswer} left`);
		}
	} 
	delta = currentDelta;
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
	thirdPart.classList.add('hidden');
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

