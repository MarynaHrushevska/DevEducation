'use strict';
var generateBtn = document.querySelector('.gen-btn');
var resetBtn = document.querySelector('.reset-btn');
var message = document.querySelector('.message-text');
var minValue = document.querySelector('.min-nmb');
var maxValue = document.querySelector('.max-nmb');
var min;
var max;
var allNumbers = [];
var isGenerated = false;

generateBtn.addEventListener('click', function() {
    if (!isGenerated) {    
        min = Number(minValue.value);
        max = Number(maxValue.value);
        var delta = max - min;

        if (min === 0) {
            message.textContent = 'Set min number';
            return;
        } 
        if (max === 0) {
            message.textContent = 'Set max number';
            return;
        } 
        if (min >= max || min < 0 && max < 0) {
            message.textContent = 'Something went wrong... check your numbers';
            return;     
        }
        if (!isInteger(min) || !isInteger(max)) {
            message.textContent = 'Only integer numbers';
            return; 
        } 
        for (var i = 0; i <= delta; i++) {
            allNumbers[i] = min + i;
        }
        isGenerated = true;
    }

    if (allNumbers.length === 0) {
        message.textContent = `Generated number: Elements are over`;
        generateBtn.disabled = true;
        return;
    }

    var randomNumber = random(0, allNumbers.length);
    var arrayElement = allNumbers[randomNumber];
        
    message.textContent = `Generated number: ${arrayElement}`;
    allNumbers.splice(randomNumber, 1);
})

resetBtn.addEventListener('click', function() {
    minValue.value = '';
    maxValue.value = '';
    message.textContent = 'Choose range';
    allNumbers = [ ];
    isGenerated = false;
    generateBtn.disabled = false;
})

function random(min, max) {
    var delta = max - min;
    var randomNumber = Math.floor((Math.random() * delta) + min);
    return randomNumber;
}
function isInteger(num) {
	return (num ^ 0) === num;
}