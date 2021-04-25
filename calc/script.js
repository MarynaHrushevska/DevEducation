'use strict';
window.addEventListener('DOMContentLoaded', function () {
    var calculator = new Calculator();
    calculator.init();

    window.addEventListener('keyup', function (e) {
        calculator.deleteNumber(e);
    })
});
