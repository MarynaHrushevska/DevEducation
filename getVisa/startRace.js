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
    const rndInt = randomIntFromInterval(5, 10);

    race.addEventListener('click', () => {
        raceTable.classList.remove('hide');
        initializationTable.classList.add('hide');
        assignNames(first, participants[0].name);
        assignNames(second, participants[1].name);
        assignNames(third, participants[2].name);
        assignNames(fourth, participants[3].name);
        assignNames(fifth, participants[4].name);
        accCheck(participants[0].balance, rndInt, balance1);
        accCheck(participants[1].balance, rndInt, balance2);
        accCheck(participants[2].balance, rndInt, balance3);
        accCheck(participants[3].balance, rndInt, balance4);
        accCheck(participants[4].balance, rndInt, balance5);
    })    
    function accCheck(data, time, element) {
        const accCheck = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data >= 2000) {
                    resolve('You win');
                } else {
                    reject(new Error('You lose'));
                }
            }, time)
        })  
        accCheck.then(() => {
            element.style.border = '1px solid #ff0';
        }).catch(() => {
            element.style.border = '1px solid #f00';
        });
    } 
    function assignNames(input, data) {
        input.textContent = data;
    }
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min * 1000)
    }
      
}