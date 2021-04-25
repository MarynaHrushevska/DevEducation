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

    this.divide = document.getElementById('divide');
    this.multiply = document.getElementById('multiply');
    this.subtract = document.getElementById('subtract');
    this.plus = document.getElementById('plus');
    this.equal = document.getElementById('equal');
    this.dot = document.getElementById('dot');
    this.addMinus = document.getElementById('add-minus');

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
    window.addEventListener('keynown', function(e) {
        if (e.keyCode === 46) {
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
        if (button === this.pi) {
            this.handlePi();
        }
        if (button === this.exponential) {
            this.handleE();
        }
        if (button === this.factorial) {
            this.handleFactorial();
        }
        if (button === this.squareNumber) {
            this.handleSquare();
        }
        if (button === this.tenX) {
            this.handleTenInX();
        }
        if (button === this.cube) {
            this.handleCube();
        }
        if (button === this.mathAbs) {
            this.handleMathAbs();
        }
        if (button === this.oneDivideX) {
            this.handleOneDivideX();
        }
        if (button === this.log) {
            this.handleLog();
        }
        if (button === this.ln) {
            this.handleLn();
        }
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
        if (button === this.addMinus) {
            this.handleMinus();
        } else {
            this.handleSymbol(button);
        }
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
}
Calculator.prototype.handleSymbol = function (button) {
    this.firstArg = this.screen.textContent;
    this.screen.textContent = '';
    this.choosenSymbol = button.textContent;
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
    if (this.choosenSymbol === 'mod') {
        this.screen.textContent = this.operations.mod(this.firstArg, this.secondArg);
    } 
}
Calculator.prototype.handleMinus = function () {
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
// Calculator.prototype.deleteNumber = function (pressEvent) {
//     console.log(2)
//     if (pressEvent.keyCode === 46) {
//         console.log(1)
//         this.screen.textContent = this.screen.textContent.pop();
//     }  
// }
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
// Calculator.prototype.handleMod = function () {
//     if (this.screen.textContent === '' || this.screen.textContent === 0) {
//         return;
//     } else {
//         this.firstArg = this.screen.textContent;
//         this.screen.textContent = this.operations.mod(this.firstArg, this.secondArg);  
//     }  
// }