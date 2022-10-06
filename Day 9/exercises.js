import { countries } from './countries_data.js'
// Level 1
const smallCountries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// 3
smallCountries.forEach((country) => console.log(country))

// 6
const upperCountries = smallCountries.map((c) => c.toUpperCase())
// 8
const squares = numbers.map((n) => n * n)
// 11
const noLand = smallCountries.filter((c) => !c.includes('land'))
// 15
const validProducts = products.filter((p) => typeof p.price == 'number')
// 17
const sum = numbers.reduce((sum, n) => sum = sum + n, 0)
// 23
const first = smallCountries.find((s) => s.length == 6)
console.log(first)
// 24
const firstIndex = smallCountries.findIndex((s) => s.length == 6)
// 26
const russiaIndex = smallCountries.findIndex((s) => s == 'Russia')
console.log(russiaIndex)

// Level 2
// 1
const totalProducts = products.filter((p) => typeof p.price == 'number').reduce((s, item) => s = s + item.price, 0)
console.log(totalProducts)

// 4
const m = {}
const numInitials = smallCountries.forEach((item) => {
    console.log(item[0])
    m[item[0]] = m[item[0]] + 1 || 1
})
console.log(m)

// Level 3
// 1
console.log(countries.sort((a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
}))

// 3 
function mostPopulatedCountries(arr, len) {
    return arr.sort((a, b) => {
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    }).slice(0, 10)
}

console.log(mostPopulatedCountries(countries, 10))