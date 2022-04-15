/* ======================= toggle Style Switcher =================== */
const STYLE_SWITCHER_TOGGLE = document.querySelector('.style-switcher-toggler');
STYLE_SWITCHER_TOGGLE.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle('open');
})
// Hide Style Swither on Scroll
window.addEventListener('scroll', () => {
    if(document.querySelector('.style-switcher').classList.contains('open')) {
        document.querySelector('.style-switcher').classList.remove('open')
    }
})
/* ======================= Theme Colors =================== */
const ALTERNATE_STYLE = document.querySelectorAll('.alternate-style')
function setActiveStyle(color) {
    ALTERNATE_STYLE.forEach((style) => {
        if(color === style.getAttribute('title')) {
            style.removeAttribute('disabled');
        } else { 
            style.setAttribute('disabled', 'true'); 
        }
    })
}
// fa-moon
/* ======================= Theme Light And Dark Mode =================== */
const DAY_NIGHT = document.querySelector('.day-night');
DAY_NIGHT.addEventListener('click', () => {
    DAY_NIGHT.querySelector('i').classList.toggle('fa-sun');
    DAY_NIGHT.querySelector('i').classList.toggle('fa-moon')
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if(document.body.classList.contains('dark')) {
        DAY_NIGHT.querySelector('i').classList.add('fa-sun')
    } else {
        DAY_NIGHT.querySelector('i').classList.add('fa-moon')
    }
})
