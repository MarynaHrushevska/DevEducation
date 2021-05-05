'use strict';

window.addEventListener('DOMContentLoaded', () => {
    init();
})

function init () {
    const photos = document.getElementById('photos');
    const mainPhoto = document.getElementById('mainPhoto');
    const gallery = document.querySelectorAll('.gallery__slider-photo');
    const showAll = document.getElementById('showAll')
    const showAllPopup = document.getElementById('showAllPopup')
    const closeShowAllPopup = document.getElementById('closeShowAllPopup')

    for (let i of gallery) {
        i.addEventListener('mouseover', () => {
            i.classList.add('smooth');
        })
        i.addEventListener('mouseout', () => {
            i.classList.remove('smooth');
        })
    }

    showAll.addEventListener('click', () => {
        showAllPopup.classList.remove('hideShowAllPopup');
    })
    photos.addEventListener('click', displayPhoto);
    closeShowAllPopup.addEventListener('click', () => {
        showAllPopup.classList.add('hideShowAllPopup');
    })
    function displayPhoto (event) {
        const image = event.target;
        const isPhoto = image.dataset.type === 'photo';
        if (!isPhoto) return;

        mainPhoto.src = event.target.src;
    }
}

module.exports = { init };