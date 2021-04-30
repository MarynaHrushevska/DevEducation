import { Model } from './model';
import { View } from './view';
import { Controller } from './controller';
import './styles/style.css'

var init = function () {
    var model = new Model();
    var view = new View();
    var controller = new Controller();

    controller.play();
}
init();
// var svgField = document.getElementById('svg');

// svgField.addEventListener('click', function() {
//     console.log('click and clup');
// })
// var circle = new Circles(15);