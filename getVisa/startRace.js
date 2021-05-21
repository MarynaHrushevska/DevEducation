export default function startRace(participants) {
    console.log(participants);
    const race = document.getElementById('race');
    const initializationTable = document.getElementById('tab1');
    const raceTable = document.getElementById('tab2');
    const first = document.querySelector('.firstP');
    const second = document.querySelector('.secondP');
    const third = document.querySelector('.thirdP');
    const fourth = document.querySelector('.fourthP');
    const fifth = document.querySelector('.fifthP');
    const balance1 = document.querySelector('.balance1');
    const balance2 = document.querySelector('.balance2');
    const balance3 = document.querySelector('.balance3');
    const balance4 = document.querySelector('.balance4');
    const balance5 = document.querySelector('.balance5');
    const age1 = document.querySelector('.age1');
    const age2 = document.querySelector('.age2');
    const age3 = document.querySelector('.age3');
    const age4 = document.querySelector('.age4');
    const age5 = document.querySelector('.age5');
    const documents1 = document.querySelector('.docs1');
    const documents2 = document.querySelector('.docs2');
    const documents3 = document.querySelector('.docs3');
    const documents4 = document.querySelector('.docs4');
    const documents5 = document.querySelector('.docs5');
    const english1 = document.querySelector('.english1');
    const english2 = document.querySelector('.english2');
    const english3 = document.querySelector('.english3');
    const english4 = document.querySelector('.english4');
    const english5 = document.querySelector('.english5');

    race.addEventListener('click', () => {
        raceTable.classList.remove('hide');
        initializationTable.classList.add('hide');
        assignNames(first, participants[0].name);
        assignNames(second, participants[1].name);
        assignNames(third, participants[2].name);
        assignNames(fourth, participants[3].name);
        assignNames(fifth, participants[4].name);

        accCheck(checkAcc, participants[0].balance, randomIntFromInterval(5, 10), balance1);
        accCheck(checkAcc, participants[1].balance, randomIntFromInterval(5, 10), balance2);
        accCheck(checkAcc, participants[2].balance, randomIntFromInterval(5, 10), balance3);
        accCheck(checkAcc, participants[3].balance, randomIntFromInterval(5, 10), balance4);
        accCheck(checkAcc, participants[4].balance, randomIntFromInterval(5, 10), balance5);
        
        accCheck(checkAge, participants[0].age, randomIntFromInterval(1, 3), age1);
        accCheck(checkAge, participants[1].age, randomIntFromInterval(1, 3), age2);
        accCheck(checkAge, participants[2].age, randomIntFromInterval(1, 3), age3);
        accCheck(checkAge, participants[3].age, randomIntFromInterval(1, 3), age4);
        accCheck(checkAge, participants[4].age, randomIntFromInterval(1, 3), age5);

        accCheck(checkDocs, participants[0].documents, randomIntFromInterval(10, 20), documents1);
        accCheck(checkDocs, participants[1].documents, randomIntFromInterval(10, 20), documents2);
        accCheck(checkDocs, participants[2].documents, randomIntFromInterval(10, 20), documents3);
        accCheck(checkDocs, participants[3].documents, randomIntFromInterval(10, 20), documents4);
        accCheck(checkDocs, participants[4].documents, randomIntFromInterval(10, 20), documents5);

        accCheck(checkLang, participants[0].english, randomIntFromInterval(5, 10), english1);
        accCheck(checkLang, participants[1].english, randomIntFromInterval(5, 10), english2);
        accCheck(checkLang, participants[2].english, randomIntFromInterval(5, 10), english3);
        accCheck(checkLang, participants[3].english, randomIntFromInterval(5, 10), english4);
        accCheck(checkLang, participants[4].english, randomIntFromInterval(5, 10), english5);
    })    
    function accCheck(fnc, data, time, element) {
        const accCheck = new Promise((resolve, reject) => {
            setTimeout(() => {
            if (fnc(data)) {
                resolve('You win');
              } else {
                reject(new Error('You lose'));
              }
            }, time)
        })  
        accCheck.then(() => {
            element.style.border = '2px solid #008000';
        }).catch(() => {
            element.style.border = '2px solid #f00';
        });
    }
    function checkAcc(data) {
        if (data >= 2000) {
            return true;
        } else {
            return false;
        }
    }
    function checkAge(data) {
        if (data < 18 || data > 60) {
            return false;
        } else {
            return true;
        }
    }
    function checkDocs(data) {
        if (data === '3') {
            return true; 
        } else {
            return false;
        }
    }
    function checkLang(data) {
        if (data === 'B1' || data === 'B2' || data === 'C1') {
            return true; 
        } else {
            return false;
        }
    }
    function assignNames(input, data) {
        input.textContent = data;
    }
    function randomIntFromInterval(min, max) {
        return (Math.floor(Math.random() * (max - min + 1) + min)) * 1000;
    }
}