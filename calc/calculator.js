'use strict';
var Calculator = function() {
    this.operations = new MathOperations();
}
Calculator.prototype.initDOMElement = function() {
    // general 
    this.container = document.getElementById('container');
    this.screen = document.getElementById('screen');
    this.panel = document.getElementById('panel');
    this.engineer = document.getElementById('engineer');
    this.clear = document.getElementById('clear');
    this.switch = document.getElementById('switch');
    // symbols
    this.divide = document.getElementById('divide');
    this.multiply = document.getElementById('multiply');
    this.subtract = document.getElementById('subtract');
    this.plus = document.getElementById('plus');
    this.equal = document.getElementById('equal');
    this.dot = document.getElementById('dot');
    // digits
    this.nine = document.getElementById('nine');
    this.eight = document.getElementById('eight');
    this.seven = document.getElementById('seven');
    this.six = document.getElementById('six');
    this.five = document.getElementById('five');
    this.four = document.getElementById('four');
    this.three = document.getElementById('three');
    this.two = document.getElementById('two');
    this.one = document.getElementById('one');
    this.zero = document.getElementById('zero');
    // engineer
    this.pi = document.getElementById('pi');
    this.factorial = document.getElementById('factorial');
    this.exponential = document.getElementById('exponential');
    this.tenX = document.getElementById('ten');
    this.squareNumber = document.getElementById('square');
}
Calculator.prototype.init = function() {
    this.initDOMElement();
    this.panel.addEventListener('click', this.handleClick.bind(this));
    this.engineer.addEventListener('click', this.handleClick.bind(this));
    this.switch.addEventListener('click', this.switchCalcs.bind(this));
    window.addEventListener('keynown', function(e) {
        console.log(2);
        if (eve.keyCode === 46) {
            console.log(1)
            this.screen.textContent.pop();
        } 
    });
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
    var isEngineer = button.classList.contains('panel__engineer');

    if (isEngineer) {
        if (button === pi) {
            this.handlePi();
        }
        if (button === exponential) {
            this.handleE();
        }
        if (button === factorial) {
            console.log(2);
            this.handleFactorial();
        }
        if (button === squareNumber) {
            console.log(3);
        }
        // if (button === ) {
        //     console.log(1);
        //     this.handleTenInX();
        // }
    }
    if (isDot) {
        this.handleDot();
    }
    if (isDigit) {
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
        this.choosenSymbol = '';
        this.firstArg = 0;
        this.secondArg = 0;
    } 
    if (isEqual) {
        this.secondArg = this.screen.textContent;
        this.screen.textContent = '';
        this.calcResult();
        this.choosenSymbol = '';
    }
    // this.handlePi();
    // console.log(button, 'button'); 
    // console.log(this.button, 'this button'); 
    // console.log(this.screen.textContent, 'ctx'); 
    // console.log(this.screen.textContent.length, 'length');
    // console.log(button.textContent, 'btn.ctx');
    // console.log(this.choosenSymbol, 'chosenSymbol');
}
Calculator.prototype.handleSymbol = function (button) {
    this.firstArg = this.screen.textContent;
    this.screen.textContent = '';
    this.choosenSymbol = button.textContent;
    console.log(button, button.textContent);
}
Calculator.prototype.handleDot = function () {
    if (this.screen.textContent.includes('.')) {
        return;
    }
    this.screen.textContent += '.';
    this.screen.textContent = this.screen.textContent;
}
Calculator.prototype.calcResult = function () {
    if (this.choosenSymbol === '+') {
        this.screen.textContent = this.operations.sum(this.firstArg, this.secondArg);
    } 
    if (this.choosenSymbol === '-') {
        this.screen.textContent = this.operations.subtract(this.firstArg, this.secondArg);
    } 
    if (this.choosenSymbol === 'x') {
        this.screen.textContent = this.operations.multiply(this.firstArg, this.secondArg);
    } 
    if (this.choosenSymbol === '/') {
        this.screen.textContent = this.operations.divide(this.firstArg, this.secondArg);
    }    
}
Calculator.prototype.handleMinus = function () {
    if (this.button.classList.contains('plus-minus')) {
        console.log('huy')
        this.screen.textContent = this.operations.plusMinus(this.firstArg);
    }
}
Calculator.prototype.handlePi = function () {
    this.screen.textContent = this.operations.pi();
}
Calculator.prototype.handleE = function () {
    this.screen.textContent = this.operations.exponenta();
}
Calculator.prototype.handleFactorial = function () {
    if (this.screen.textContent === '') {
        return;
    }
    this.firstArg = this.screen.textContent;
    this.screen.textContent = this.operations.factorial(this.firstArg);
    console.log(this.firstArg)
}
// Calculator.prototype.deleteNumber = function (pressEvent) {
//     console.log(2)
//     if (pressEvent.keyCode === 46) {
//         console.log(1)
//         this.screen.textContent = this.screen.textContent.pop();
//     }  
// }
Calculator.prototype.handleTenInX = function () {
    this.firstArg = this.screen.textContent;
    this.screen.textContent = this.operations.tenInXth(this.firstArg);
}