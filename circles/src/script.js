import Circles from './model';
import './styles/style.css'

var svgField = document.getElementById('svg');

svgField.addEventListener('click', function() {
    console.log('click and clup');
})
var circle = new Circles(15);