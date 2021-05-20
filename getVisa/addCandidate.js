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
    race.disabled = true;
    addCandidate.disabled = true;
    let increment = 1;
    let newParticipant = {};
    let newPerson;

    for (let a of inputs) {
        a.addEventListener('change', () => {
            checkInputs();
        })
    }
    addCandidate.addEventListener('click', () => {
        if (participants.length === 4) {
            addCandidate.disabled = true;
            generateAll.disabled = true;
            race.disabled = false;
            blockGenerate(generateButton, true);
        }
        newPerson = recordCandidate(nameInput.value, balanceInput.value, ageInput.value, documentsInput.value, englishLevelInput.value, addCandidate);
        participants.push(newPerson);
        fillIn(increment, tableData, tableId, newPerson);
        increment++;
        console.log(participants);

        clearData();
    })
    clear.addEventListener('click', () => {
        participants = [];
        clearData();
        generateAll.disabled = false;
        blockGenerate(generateButton, false);
        for (let d of tableData) {
            d.textContent = '';
        }
        increment = 1;
    })
    function fillIn(inc, data, index, person) {
        let dataValue; 
        let dataIdValue;
        for (let td of data) { 
            for (let tdId of index) {
                dataValue = td.dataset.table;
                dataIdValue = tdId.dataset.id;
                
                if (dataIdValue === inc.toString()) {
                    if (dataValue === 'namePerson') {
                        tdId.textContent = person.name;
                    }
                    if (dataValue === 'balance') {
                        td.textContent = person.balance; 
                    }
                    if (dataValue === 'age') {
                        td.textContent = person.age; 
                    }
                    if (dataValue === 'documents') {
                        td.textContent = person.documents; 
                    }
                    if (dataValue === 'english') {
                        td.textContent = person.english; 
                    }
                }
            }
        } 
    }
    function recordCandidate(name, balance, age, docs, english, element) {
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
    }
    function clearData() {
        nameInput.value = ''; 
        balanceInput.value = ''; 
        ageInput.value = ''; 
        documentsInput.value = ''; 
        englishLevelInput.value = '';
        addCandidate.disabled = true;
    }
    function checkInputs() {
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
    }
    function blockGenerate(element, status) {
        for (let btn of element) {
            btn.disabled = status;
        }
    }  
} 