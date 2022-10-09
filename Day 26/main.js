import { lowerCountries } from './countries.js'

const input = document.querySelector('#searchInput')
const wrapper = document.querySelector('.countries-wrapper')
input.addEventListener('input', updateCountries)
let searchBeginning = true
let listAtoZ = true

const startWord = document.querySelector('.btn-start')
const anywhereWord = document.querySelector('.btn-anywhere')
const sort = document.querySelector('.btn-sort')
const sortIcon = document.querySelector('.i-sort')

startWord.onclick = () => {
    searchBeginning = true
    updateCountries()
}
anywhereWord.onclick = () => {
    searchBeginning = false
    updateCountries()
}
sort.onclick = () => {
    listAtoZ = !listAtoZ
}

function updateCountries() {
    wrapper.innerHTML = ''
    const txt = input.value.toLowerCase()
    console.log(txt)
    const res = []
    if (searchBeginning) {
        lowerCountries.forEach(e => {
            if (e.startsWith(txt)) {
                res.push(e)
            }
        })
    } else {
        lowerCountries.forEach(e => {
            if (e.includes(txt)) {
                res.push(e)
            }
        })
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