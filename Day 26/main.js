import { lowerCountries } from './countries.js'

const input = document.querySelector('#searchInput')
const wrapper = document.querySelector('.countries-wrapper')
input.addEventListener('input', updateCountries)
let searchBeginning = true
let listAtoZ = true

const subtitle = document.querySelector('.search-info')
const startWord = document.querySelector('.btn-start')
const anywhereWord = document.querySelector('.btn-anywhere')
const sort = document.querySelector('.btn-sort')
const sortIcon = document.querySelector('.i-sort')

startWord.onclick = () => {
    searchBeginning = true
    if (!startWord.classList.contains('active-btn')) {
        startWord.classList.add('active-btn')
    }
    if (anywhereWord.classList.contains('active-btn')) {
        anywhereWord.classList.remove('active-btn')
    }
    updateCountries()
}
anywhereWord.onclick = () => {
    searchBeginning = false
    if (!anywhereWord.classList.contains('active-btn')) {
        anywhereWord.classList.add('active-btn')
    }
    if (startWord.classList.contains('active-btn')) {
        startWord.classList.remove('active-btn')
    }
    updateCountries()
}
sort.onclick = () => {
    listAtoZ = !listAtoZ
    sortIcon.classList.toggle('fa-arrow-down-a-z')
    sortIcon.classList.toggle('fa-arrow-down-z-a')
    updateCountries()
}

function updateCountries() {
    wrapper.innerHTML = ''
    const txt = input.value.toLowerCase()
    const res = []
    if (searchBeginning) {
        lowerCountries.forEach(e => {
            if (e.startsWith(txt)) {
                res.push(e)
            }
        })
        subtitle.innerHTML = txt == '' ? '' : `There are <span class="search">${res.length}</span> countries that start with <span class="num-results">${input.value}</span>.`
    } else {
        lowerCountries.forEach(e => {
            if (e.includes(txt)) {
                res.push(e)
            }
        })
        subtitle.innerHTML = txt == '' ? '' : `There are <span class="search">${res.length}</span> countries that cointain <span class="num-results">${input.value}</span>.`
    }
    res.sort((a, b) => {
        if (a > b) return listAtoZ ? 1 : -1
        if (a < b) return listAtoZ ? -1 : 1
        return 0
    })

    res.forEach(e => {
        const box = document.createElement('div')
        const countryName = document.createElement('p')
        countryName.textContent = e.toUpperCase()
        box.appendChild(countryName)
        box.classList.add('country')
        wrapper.appendChild(box)
    })
}

// Runs on first load
updateCountries()
const totalCountries = document.querySelector('.country-count')
totalCountries.textContent = `Total number of countries: ${lowerCountries.length}`
startWord.classList.add('active-btn')