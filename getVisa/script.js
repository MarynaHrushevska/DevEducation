// 'use strict';
import generateQuote from './generateQuote';
import generateData from './generateData';
import addCandidate from './addCandidate';

window.addEventListener('DOMContentLoaded', () => {
    generateQuote();
    generateData();
    addCandidate();
})