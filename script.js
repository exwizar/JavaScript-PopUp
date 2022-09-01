let openPopUp = document.querySelector('.open-pop-up'),
    closePopUp = document. querySelector('.popup-interface_close'),
    popUp = document.querySelector('.popup');

openPopUp.addEventListener('click', () => {
    popUp.style.display = 'block'
})

closePopUp.addEventListener('click', () => {
    popUp.style.display = 'none'
})