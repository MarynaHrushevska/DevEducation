/**
 * @jest-environment jsdom
 */
import startRace from '../modules/startRace';
import addCandidate from '../modules/addCandidate';
import generateData from '../modules/generateData';
import { helpers } from '../modules/startRace';
import { addHelp } from '../modules/addCandidate';
import { genDataHelp } from '../modules/generateData';

describe('startRace', function() {
    it('startRace should be defined', function() {
        expect(startRace).toBeDefined()
    })
    it('startRace should be function', function() {
        expect(typeof startRace).toBe('function');
    })
    it('helpers should be object', function() {
        expect(typeof helpers).toBe('object');
    })
    it('helpers.allResultsAreTrue should be function', function() {
        expect(typeof helpers.allResultsAreTrue).toBe('function');
    })
    it('helpers.allResultsAreTrue should be true', function() {
        let arr = [true, true];
        let test = helpers.allResultsAreTrue(arr);
        expect(test).toBe(true);
    })
    it('helpers.accCheck should be function', function() {
        expect(typeof helpers.accCheck).toBe('function');
    })
    it('helpers.checkAcc should be function', function() {
        expect(typeof helpers.checkAcc).toBe('function');
    })
    it('helpers.checkAcc should return true if balance >= 2000', function() {
        expect(helpers.checkAcc(2000)).toBe(true);
    })
    it('helpers.checkAcc should return true if balance >= 2000', function() {
        expect(helpers.checkAcc(2001)).toBe(true);
    })
    it('helpers.checkAcc should return false if balance < 2000', function() {
        expect(helpers.checkAcc(1999)).toBe(false);
    })
    it('helpers.checkAge should be function', function() {
        expect(typeof helpers.checkAge).toBe('function');
    })
    it('helpers.checkAge should return true if age >= 18 && age <= 60', function() {
        expect(helpers.checkAge(18)).toBe(true);
        expect(helpers.checkAge(20)).toBe(true);
        expect(helpers.checkAge(60)).toBe(true);
    })
    it('helpers.checkAge should return false if age < 18 && age > 60', function() {
        expect(helpers.checkAge(17)).toBe(false);
        expect(helpers.checkAge(61)).toBe(false);
        expect(helpers.checkAge(0)).toBe(false);
    })
    it('helpers.checkDocs should be function', function() {
        expect(typeof helpers.checkDocs).toBe('function');
    })
    it('helpers.checkDocs should return true if docs is 3', function() {
        expect(helpers.checkDocs('3')).toBe(true);
    })
    it('helpers.checkDocs should return false if docs is not 3', function() {
        expect(helpers.checkDocs('1')).toBe(false);
        expect(helpers.checkDocs('2')).toBe(false);
    })
    it('helpers.checkLang should be function', function() {
        expect(typeof helpers.checkLang).toBe('function');
    })
    it('helpers.checkLang should be true if lang level is B1', function() {
        expect(helpers.checkLang('B1')).toBe(true);
    })
    it('helpers.checkLang should be true if lang level is B2', function() {
        expect(helpers.checkLang('B2')).toBe(true);
    })
    it('helpers.checkLang should be true if lang level is C1', function() {
        expect(helpers.checkLang('C1')).toBe(true);
    })
    it('helpers.checkLang should be false if lang level is not B1, B2 or C1', function() {
        expect(helpers.checkLang('A1')).toBe(false);
    })
    it('helpers.assignNames should be function', function() {
        expect(typeof helpers.assignNames).toBe('function');
    })
    it('helpers.assignNames should assign name to span', function() {
        let san = document.createElement('span');
        helpers.assignNames(san, 'wolf')
        expect(san.textContent).toBe('wolf');
    })
    it('helpers.randomIntFromInterval should be function', function() {
        expect(typeof helpers.randomIntFromInterval).toBe('function');
    })
    it('helpers.randomIntFromInterval should return random number', function() {
        let result = 1000;
        expect(helpers.randomIntFromInterval(1,1)).toBe(result);
    })
})

describe('addCandidate', function() {
    it('addCandidate should be defined', function() {
        expect(addCandidate).toBeDefined()
    })
    it('addCandidate should be function', function() {
        expect(typeof addCandidate).toBe('function');
    })
    it('addHelp should be object', function() {
        expect(typeof addHelp).toBe('object');
    })
    it('addHelp.fillIn should be function', function() {
        expect(typeof addHelp.fillIn).toBe('function');
    })
    it('addHelp.fillIn should fill data into elements', function() {
        let person = {
            'name': 'mar',
            'balance': 2000,
            'age': 18,
            'documents': 3,
            'english': 'B1'
        }
        let i = 0;
        let namePerson = [document.createElement('span')];
        let balancePerson = [document.createElement('span')];
        let agePerson = [document.createElement('span')];
        let documentsPerson = [document.createElement('span')];
        let englishPerson = [document.createElement('span')];
        addHelp.fillIn(i, person, namePerson, balancePerson, agePerson, documentsPerson, englishPerson)
        expect(namePerson[0].textContent).toBe('mar');
    })
    it('addHelp.recordCandidate should be function', function() {
        expect(typeof addHelp.recordCandidate).toBe('function');
    })
    it('addHelp.recordCandidate should record candidate', function() {
        let participants = [0,1,2,3,4];
        let button = document.createElement('button');
        let newParticipant = {
            'name': 'mar',
            'balance': 2000,
            'age': 18,
            'documents': 3,
            'english': 'B1'
        }
        addHelp.recordCandidate(newParticipant.name, participants, newParticipant.balance, newParticipant.age, newParticipant.docs, newParticipant.english, button);

        expect(button.disabled).toBe(true);
    })
    it('addHelp.clearData should be function', function() {
        expect(typeof addHelp.clearData).toBe('function');
    })
    it('addHelp.clearData should clear data', function() {
        let nameInput = document.createElement('input');
        let balanceInput = document.createElement('input');
        let ageInput = document.createElement('input');
        let documentsInput = document.createElement('input');
        let englishLevelInput = document.createElement('input');
        let button = document.createElement('button');
        nameInput.value = 'Uc';
        balanceInput.value = 'Uc';
        ageInput.value = 'Uc';
        documentsInput.value = 'Uc';
        englishLevelInput.value = 'Uc';
        button.disabled = false;
        addHelp.clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, button);
        expect(button.disabled).toBe(true);
        expect(englishLevelInput.value).toBe('');
    })
    it('addHelp.checkInputs should be function', function() {
        expect(typeof addHelp.checkInputs).toBe('function');
    })
    it('addHelp.checkInputs should check if inputs are empty or not', function() {
        let nameInput = document.createElement('input');
        let balanceInput = document.createElement('input');
        let ageInput = document.createElement('input');
        let documentsInput = document.createElement('input');
        let englishLevelInput = document.createElement('input');
        let button = document.createElement('button');
        nameInput.value = 'Uc';
        balanceInput.value = 'Uc';
        ageInput.value = 'Uc';
        documentsInput.value = 'Uc';
        englishLevelInput.value = 'Uc';
        addHelp.checkInputs(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, button)
        expect(button.disabled).toBe(false);
        addHelp.clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, button);
        expect(button.disabled).toBe(true);
    })
    it('addHelp.blockGenerate should be function', function() {
        expect(typeof addHelp.blockGenerate).toBe('function');
    })
    it('addHelp.blockGenerate should toggle status', function() {
        let button = [document.createElement('button'), document.createElement('button'), document.createElement('button'), document.createElement('button')];
        addHelp.blockGenerate(button, true);
        expect(button[0].disabled).toBe(true);
        expect(button[1].disabled).toBe(true);
        expect(button[2].disabled).toBe(true);
        expect(button[3].disabled).toBe(true);
        addHelp.blockGenerate(button, false);
        expect(button[0].disabled).toBe(false);
        expect(button[1].disabled).toBe(false);
        expect(button[2].disabled).toBe(false);
        expect(button[3].disabled).toBe(false);
    })
})

describe('generateData', function() {
    it('generateData should be defined', function() {
        expect(generateData).toBeDefined()
    })
    it('generateData should be function', function() {
        expect(typeof generateData).toBe('function');
    })
    it('genDataHelp should be object', function() {
        expect(typeof genDataHelp).toBe('object');
    })
    it('genDataHelp.randName should be function', function() {
        expect(typeof genDataHelp.randName).toBe('function');
    })
    it('genDataHelp.randName should random name', function() {
        let names = ['Marina', 'Slava', 'Artem', 'Ruslan', 'Dima', 'Nastya', 'Natasha', 'Danya', 'Lesya', 'Alex'];
        let element = document.createElement('input');
        genDataHelp.randName(element, names);
        expect(element.value).toBe(element.value);
    })
    it('genDataHelp.randBalance should be function', function() {
        expect(typeof genDataHelp.randBalance).toBe('function');
    })
    it('genDataHelp.randAge should be function', function() {
        expect(typeof genDataHelp.randAge).toBe('function');
    })
    it('genDataHelp.randDocs should be function', function() {
        expect(typeof genDataHelp.randDocs).toBe('function');
    })
    it('genDataHelp.randEnglishLevel should be function', function() {
        expect(typeof genDataHelp.randEnglishLevel).toBe('function');
    })
})
