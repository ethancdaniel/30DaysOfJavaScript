import '../data/countries.js'
import { countries } from '../data/countries.js'

const wrapper = document.querySelector('.countries-wrapper')
for (let country of countries) {
    const box = document.createElement('div')
    box.textContent = country.toUpperCase()
    box.classList.add('div-country')
    console.log(box.textContent)
    wrapper.appendChild(box)
}