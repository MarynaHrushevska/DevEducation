'use strict';
var Calculator = function() {
    this.operations = new MathOperations();
}
Calculator.prototype.initDOMElement = function() {
    this.container = document.getElementById('container');
    this.screen = document.getElementById('screen');
    this.panel = document.getElementById('panel');
    this.engineer = document.getElementById('engineer');
    this.switch = document.getElementById('switch');

    this.divide = document.getElementById('divide');
    this.multiply = document.getElementById('multiply');
    this.subtract = document.getElementById('subtract');
    this.plus = document.getElementById('plus');
    this.equal = document.getElementById('equal');
    this.dot = document.getElementById('dot');
    this.addMinus = document.getElementById('add-minus');

    this.leftBracket = document.getElementById('left-bracket');
    this.rightBracket = document.getElementById('right-bracket');
    this.factorial = document.getElementById('factorial');

    this.tenX = document.getElementById('tenX');
    this.pi = document.getElementById('pi');
    this.exponential = document.getElementById('exponential');

    this.squareNumber = document.getElementById('square');
    this.oneDivideX = document.getElementById('one-divide-x');
    this.mathAbs = document.getElementById('math-abs');

    this.cube = document.getElementById('cube-number');
    this.exp = document.getElementById('exp');
    this.mod = document.getElementById('mod');

    this.powerNumber = document.getElementById('power-number');
    this.ln = document.getElementById('ln');
    this.log = document.getElementById('log');
}
Calculator.prototype.init = function() {
    this.initDOMElement();
    this.panel.addEventListener('click', this.handleClick.bind(this));
    this.engineer.addEventListener('click', this.handleClick.bind(this));
    this.switch.addEventListener('click', this.switchCalcs.bind(this));
}
Calculator.prototype.switchCalcs = function() {
    this.container.classList.toggle('engineer');
}
Calculator.prototype.handleClick = function(event) {
    var button = event.target;
    var isDigit = button.dataset.type === 'digit';
    var isClear = button.dataset.type === 'clear';
    var isDot = button.dataset.type === 'dot';
    var isEqual = button.dataset.type === 'equal';
    var isUnary = button.dataset.type === 'unary';
    var isBinary = button.dataset.type === 'binary';
    var displayResult = button.dataset.type === 'displayResult';

    if (isDot) {
        this.handleDot();
    }
    if (isDigit) {
        if (this.screen.textContent.length > 8) {
            return;
        }
        this.screen.textContent += button.textContent;
    }
    if (isBinary) {
        this.handleBinary(button);
    }
    if (isUnary) {
        this.handleUnary(button);
    }
    if (displayResult) {
        this.handleDisplayResult(button);
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
        if (this.choosenSymbol) {
            this.choosenSymbol.classList.remove('activeOperator');
        }
        this.choosenSymbol = null;
    }
}
Calculator.prototype.handleBinary = function (button) {
    if (this.choosenSymbol) {
        this.choosenSymbol.classList.remove('activeOperator');
    } else {
        this.firstArg = this.screen.textContent;
    }
    this.choosenSymbol = button;
    this.choosenSymbol.classList.add('activeOperator');
    this.screen.textContent = '';
}
Calculator.prototype.handleDisplayResult = function (button) {
    switch (button) {
        case this.pi:
            this.handlePi();
            break;

        case this.exponential:
            this.handleE();
            break;

        default:
            break;
    }
}
Calculator.prototype.handleUnary = function (button) {
    switch (button) {
        case this.factorial:
            this.handleFactorial();
            break;

        case this.squareNumber:
            this.handleSquare();
            break;

        case this.tenX:
            this.handleTenInX();
            break;

        case this.cube:
            this.handleCube();
            break;

        case this.mathAbs:
            this.handleMathAbs();
            break;

        case this.oneDivideX:
            this.handleOneDivideX();
            break;

        case this.log:
            this.handleLog();
            break;

        case this.ln:
            this.handleLn();
            break;

        case this.addMinus:
            this.handleMinus();
            break;
    
        default:
            break;
    }
}
Calculator.prototype.handleDot = function () {
    if (this.screen.textContent.includes('.')) {
        return;
    }
    this.screen.textContent += '.';
    this.screen.textContent = this.screen.textContent;
}
Calculator.prototype.calcResult = function () {
    if (this.choosenSymbol === this.plus) {
        this.screen.textContent = this.operations.sum(this.firstArg, this.secondArg);
    } 
    if (this.choosenSymbol === this.subtract) {
        this.screen.textContent = this.operations.subtract(this.firstArg, this.secondArg);
    } 
    if (this.choosenSymbol === this.multiply) {
        this.screen.textContent = this.operations.multiply(this.firstArg, this.secondArg);
    } 
    if (this.choosenSymbol === this.divide) {
        this.screen.textContent = this.operations.divide(this.firstArg, this.secondArg);
    }   
    if (this.choosenSymbol === this.mod) {
        this.screen.textContent = this.operations.mod(this.firstArg, this.secondArg);
    } 
    if (this.choosenSymbol === this.powerNumber) {
        this.screen.textContent = this.operations.powerOfNumber(this.firstArg, this.secondArg);
    } 
}
Calculator.prototype.handleMinus = function () {
    if (this.screen.textContent === '') {
        return;
    }
    this.firstArg = this.screen.textContent;  
    this.screen.textContent = this.operations.plusMinus(this.firstArg);
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
}
Calculator.prototype.handleTenInX = function () {
    if (this.screen.textContent === '') {
        return;
    } else {
    this.firstArg = this.screen.textContent;
    this.screen.textContent = this.operations.tenInXth(this.firstArg);
    }
}
Calculator.prototype.handleSquare = function () {
    if (this.screen.textContent === '') {
        return;
    } else {
        this.firstArg = this.screen.textContent;
        this.screen.textContent = this.operations.square(this.firstArg);    
    }
}
Calculator.prototype.handleCube = function () {
    if (this.screen.textContent === '') {
        return;
    } else {
        this.firstArg = this.screen.textContent;
        this.screen.textContent = this.operations.cube(this.firstArg);    
    }
}
Calculator.prototype.handleOneDivideX = function () {
    if (this.screen.textContent === '') {
        return;
    } else {
        this.firstArg = this.screen.textContent;
        this.screen.textContent = this.operations.oneXth(this.firstArg);    
    }
}
Calculator.prototype.handleMathAbs = function () {
    if (this.screen.textContent === '') {
        return;
    } else {
        this.firstArg = this.screen.textContent;
        this.screen.textContent = this.operations.abs(this.firstArg);    
    }
}
Calculator.prototype.handleLog = function () {
    if (this.screen.textContent === '') {
        return;
    } else {
        this.firstArg = this.screen.textContent;
        this.screen.textContent = this.operations.logarithm(this.firstArg);  
    }  
}
Calculator.prototype.handleLn = function () {
    if (this.screen.textContent === '') {
        return;
    } else {
        this.firstArg = this.screen.textContent;
        this.screen.textContent = this.operations.naturalLogarithm(this.firstArg);  
    }  
}

Calculator.prototype.deleteNumber = function (pressEvent) {
    if (pressEvent.keyCode === 8) {
        this.screen.textContent = this.screen.textContent.slice(0, -1);
    }  
}