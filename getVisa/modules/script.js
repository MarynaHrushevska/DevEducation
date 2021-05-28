// 'use strict';
import generateQuote from '../modules/generateQuote';
import generateData from '../modules/generateData';
import addCandidate from '../modules/addCandidate';
import initRace from '../modules/initRace';
import startRace from '../modules/startRace';

const storage = {
    participants: []
};

window.addEventListener('DOMContentLoaded', () => {
    generateQuote();
    generateData();
    addCandidate(storage.participants);
    initRace();
    startRace(storage.participants);
})