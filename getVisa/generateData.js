export default function generateData() {
    const nameInput = document.getElementById('name');
    const balanceInput = document.getElementById('balance');
    const ageInput = document.getElementById('age');
    const documentsInput = document.getElementById('documents');
    const englishLevelInput = document.getElementById('englishLevel');
    const name = document.getElementById('generate-name');
    const balance = document.getElementById('generate-balance');
    const age = document.getElementById('generate-age');
    const documents = document.getElementById('generate-documents');
    const englishLevel = document.getElementById('generate-englishLevel');
    const generateAll = document.getElementById('generateAll');

    let random;

    const names = ['Marina', 'Slava', 'Artem', 'Ruslan', 'Dima', 'Nastya', 'Natasha', 'Danya', 'Lesya', 'Alex'];
    const english = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    name.addEventListener('click' , () => {
        randName(nameInput, names);
    })
    balance.addEventListener('click' , () => {
        randBalance(balanceInput);
    })
    age.addEventListener('click' , () => {
        randAge(ageInput);
    })
    documents.addEventListener('click' , () => {
        randDocs(documentsInput);
    })
    englishLevel.addEventListener('click' , () => {
        randEnglishLevel(englishLevelInput, english);
    })
    generateAll.addEventListener('click', () => {
        randName(nameInput, names);
        randBalance(balanceInput);
        randAge(ageInput);
        randDocs(documentsInput);
        randEnglishLevel(englishLevelInput, english);
    })
    function randName(element, names) {
        random = Math.floor(Math.random() * 10);
        element.value = names[random];
    }
    function randBalance(element) {
        random = Math.ceil(Math.random() * 4000);
        element.value = random;
    }
    function randAge(element) {
        random = Math.ceil(Math.random() * 123);
        element.value = random;
    }
    function randDocs(element) {
        random = Math.floor(Math.random() * 3 + 1);
        element.value = random;
    }
    function randEnglishLevel(element, levels) {
        random = Math.floor(Math.random() * 6);
        element.value = levels[random];
    }
}