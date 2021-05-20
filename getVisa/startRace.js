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

    race.addEventListener('click', () => {
        raceTable.classList.remove('hide');
        initializationTable.classList.add('hide');
        assignNames(first, participants[0].name);
        assignNames(second, participants[1].name);
        assignNames(third, participants[2].name);
        assignNames(fourth, participants[3].name);
        assignNames(fifth, participants[4].name);
    })
    function assignNames(input, data) {
        input.textContent = data;
    }
    
}