'use strict';
var Calculator = function() {
    this.operations = new MathOperations();
}
Calculator.prototype.initDOMElement = function() {
    this.container = document.getElementById('container');
    this.screen = document.getElementById('screen');
    this.panel = document.getElementById('panel');
    this.clear = document.getElementById('clear');
    this.divide = document.getElementById('divide');
    this.nine = document.getElementById('nine');
    this.eight = document.getElementById('eight');
    this.seven = document.getElementById('seven');
    this.multiply = document.getElementById('multiply');
    this.six = document.getElementById('six');
    this.five = document.getElementById('five');
    this.four = document.getElementById('four');
    this.subtract = document.getElementById('subtract');
    this.three = document.getElementById('three');
    this.two = document.getElementById('two');
    this.one = document.getElementById('one');
    this.plus = document.getElementById('plus');
    this.dot = document.getElementById('dot');
    this.zero = document.getElementById('zero');
    this.equal = document.getElementById('equal');
    this.switch = document.getElementById('switch');
}
Calculator.prototype.init = function() {
    this.initDOMElement();
    this.panel.addEventListener('click', this.handleClick.bind(this));
    this.switch.addEventListener('click', this.switchCalcs.bind(this));
}
Calculator.prototype.switchCalcs = function() {
    this.container.classList.toggle('engineer');
}
Calculator.prototype.handleClick = function(event) {
    var button = event.target;
    var isDigit = button.classList.contains('panel__digit');
    var isSymbol = button.classList.contains('panel__symbol');
    var isClear = button.classList.contains('panel__clear');
    var isDot = button.classList.contains('panel__dot');
    var isEqual = button.classList.contains('panel__equal');

    if (isDot) {
        this.handleDot();
    }
    if (isDigit) {
    // console.log(button, 'button', this.screen.textContent, 'ctx', this.screen.textContent.length, 'length', button.textContent, 'btn.ctx');
        if (this.screen.textContent.length > 8) {
            return;
        }
        this.screen.textContent += button.textContent;
    }
    if (isSymbol) {
        this.handleSymbol(button);
    } 
    if (isClear) {
        this.screen.textContent = '';
        this.firstArg = 0;
        this.secondArg = 0;
    } 
    if (isEqual) {
        this.secondArg = this.screen.textContent;
        this.screen.textContent = '';
        this.calcResult();
        this.choosenSymbol = '';
    }
}
Calculator.prototype.handleSymbol = function (button) {
    console.log('bsjhv')
    this.firstArg = this.screen.textContent;
    this.screen.textContent = '';
    this.choosenSymbol = button.textContent;
    button.classList.add('activeOperator');
    console.log(button, button.textContent);
}
Calculator.prototype.handleDot = function () {
    if (this.screen.textContent.includes('.')) {
        return;
    }
    this.screen.textContent += '.';
    this.screen.textContent = this.screen.textContent;
}
Calculator.prototype.calcResult = function (button) {
    if (this.choosenSymbol === '+') {
        this.screen.textContent = this.operations.sum(this.firstArg, this.secondArg);
        button.classList.remove('activeOperator');

    } 
    if (this.choosenSymbol === '-') {
        this.screen.textContent = this.operations.subtract(this.firstArg, this.secondArg);
        button.classList.remove('activeOperator');

    } 
    if (this.choosenSymbol === 'x') {
        this.screen.textContent = this.operations.multiply(this.firstArg, this.secondArg);
        button.classList.remove('activeOperator');

    } 
    if (this.choosenSymbol === '/') {
        this.screen.textContent = this.operations.divide(this.firstArg, this.secondArg);
        button.classList.remove('activeOperator');
    }    
}
// Calculator.prototype.ctx = function () {
//     this.ctx = this.screen.textContent;
// }
Calculator.prototype.handleMinus = function () {
    if (this.button.classList.contains('plus-minus')) {
        console.log('huy')
        this.screen.textContent = this.operations.plusMinus(this.firstArg);
    }
}