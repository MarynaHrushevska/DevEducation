// 'use strict';
import generateQuote from './generateQuote';
import generateData from './generateData';
import addCandidate from './addCandidate';
import initRace from './initRace';

window.addEventListener('DOMContentLoaded', () => {
    generateQuote();
    generateData();
    addCandidate();
    initRace();
})