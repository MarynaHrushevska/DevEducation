export default function addCandidate(participants) {
    const nameInput = document.getElementById('name');
    const balanceInput = document.getElementById('balance');
    const ageInput = document.getElementById('age');
    const documentsInput = document.getElementById('documents');
    const englishLevelInput = document.getElementById('englishLevel');
    const addCandidate = document.getElementById('addCandidate');
    const race = document.getElementById('race');
    const generateAll = document.getElementById('generateAll');
    const clear = document.getElementById('clear');
    const generateButton = document.querySelectorAll('.form-button');
    const tableData = document.querySelectorAll('[data-table]');
    const tableId = document.querySelectorAll('[data-id]');
    const inputs = document.querySelectorAll('.main__input');
    const sun = document.getElementById('sun');
    const initializationTable = document.getElementById('tab1');
    const raceTable = document.getElementById('tab2');
    const nowon = document.querySelector('.noWin');
    const winner = document.querySelectorAll('.general__race-winner');

    const namePerson = document.querySelectorAll('.namePerson');
    const balancePerson = document.querySelectorAll('.balancePerson');
    const agePerson = document.querySelectorAll('.agePerson');
    const documentsPerson = document.querySelectorAll('.documentsPerson');
    const englishPerson = document.querySelectorAll('.englishPerson');
    const circle = document.querySelectorAll('.general__race-participant');
    // console.log(circle)

    race.disabled = true;
    addCandidate.disabled = true;
    let increment = 1;
    // let newParticipant = {};
    let newPerson;
    let i = 0;

    sun.addEventListener('dblclick', () => {
        raceTable.classList.add('hide');
        initializationTable.classList.remove('hide');

        participants = [];
        addHelp.clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, addCandidate);
        generateAll.disabled = false;
        addHelp.blockGenerate(generateButton, false);
        for (let d of tableData) {
            d.textContent = '';
        }
        increment = 1;
        i = 0;
        nowon.classList.add('hide');
        circle.forEach((cir) => {
            cir.style.border = '2px solid rgb(255, 169, 248)';
        })
    })
    for (let a of inputs) {
        a.addEventListener('change', () => {
            addHelp.checkInputs(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, addCandidate);
        })
    }
    addCandidate.addEventListener('click', () => {
        if (participants.length === 4) {
            addCandidate.disabled = true;
            generateAll.disabled = true;
            race.disabled = false;
            addHelp.blockGenerate(generateButton, true);
        }
        newPerson = addHelp.recordCandidate(nameInput.value, participants, balanceInput.value, ageInput.value, documentsInput.value, englishLevelInput.value, addCandidate);
        participants.push(newPerson);
        addHelp.fillIn(i++, newPerson, namePerson, balancePerson, agePerson, documentsPerson, englishPerson);
        increment++;
        addHelp.clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, addCandidate);
        winner.forEach((win) => {
            win.textContent = '';
        })
    })
    clear.addEventListener('click', () => {
        participants = [];
        addHelp.clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, addCandidate);
        generateAll.disabled = false;
        addHelp.blockGenerate(generateButton, false);
        for (let d of tableData) {
            d.textContent = '';
        }
        increment = 0;
    })
    for (let generate of generateButton) {
        generate.addEventListener('click', () => {
            addHelp.checkInputs(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, addCandidate);
        })
    }
}
export const addHelp = {
    fillIn(i, person, namePerson, balancePerson, agePerson, documentsPerson, englishPerson) {
        namePerson[i].textContent = person.name;
        balancePerson[i].textContent = person.balance;
        agePerson[i].textContent = person.age;
        documentsPerson[i].textContent = person.documents;
        englishPerson[i].textContent = person.english;
    },
    recordCandidate(name,participants, balance, age, docs, english, element) {
        let newParticipant = {};
        if (participants.length === 5) {
            element.disabled = true;
            return;
        }
        newParticipant = {
            'name': name,
            'balance': balance,
            'age': age,
            'documents': docs,
            'english': english
        }
        element.disabled = true;
        return newParticipant;
    },
    clearData(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, addCandidate) {
        nameInput.value = ''; 
        balanceInput.value = ''; 
        ageInput.value = ''; 
        documentsInput.value = ''; 
        englishLevelInput.value = '';
        addCandidate.disabled = true;
    },
    checkInputs(nameInput, balanceInput, ageInput, documentsInput, englishLevelInput, addCandidate) {
        if (nameInput.value !== '' && 
            balanceInput.value !== '' && 
            ageInput.value !== '' && 
            documentsInput.value !== '' && 
            englishLevelInput.value !== ''
            ) {
                addCandidate.disabled = false;
        } else {
            addCandidate.disabled = true;
        }
    },
    blockGenerate(element, status) {
        for (let btn of element) {
            btn.disabled = status;
        }
    }  
}
