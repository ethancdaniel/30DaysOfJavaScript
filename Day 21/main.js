// Level 3: Mini-project

const year = document.querySelector('span')
const dateTime = document.querySelector('#date-time')
const cycleColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

dateTime.textContent = 
window.setInterval(a => {
    c = year.style.color
    while (c == year.style.color) {
        c = cycleColors[Math.floor(Math.random() * cycleColors.length)]
    }
    year.style.color = c
    dateTime.textContent = new Date().toUTCString()
    dateBG = dateTime.style.background
    while (dateBG == dateTime.style.background) {
        dateBG = cycleColors[Math.floor(Math.random() * cycleColors.length)]
    }
    dateTime.style.background = dateBG
}, 1000)

const completed = document.querySelectorAll('.completed')
const ongoing = document.querySelectorAll('.ongoing')
const coming = document.querySelectorAll('.coming')

completed.forEach(e => {
    console.log(e.textContent)
    e.style.background = 'green'
});
ongoing.forEach(e => {
    e.style.background = 'yellow'
});
coming.forEach(e => {
    e.style.background = 'red'
});