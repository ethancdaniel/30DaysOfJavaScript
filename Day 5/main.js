// Level 2

// 1
import { countries } from './countries.js'
import { webTechs } from './web_techs.js'

// 2
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanPunc = text.replace(/[^a-zA-Z0-9 ]/g, '')
let arr = cleanPunc.split(' ')
console.log(arr);

// 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
shoppingCart.splice(shoppingCart.indexOf('Honey'), 1)
shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea')
console.log(shoppingCart)

// 4
if (countries.includes('Ethiopia')) {
    console.log('ETHIOPIA')
} else {
    countries.push('Ethiopia')
}

// skip 5
// 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

// Level 3

// 1
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages = ages.sort()
console.log(`min: ${ages[0]}, max: ${ages[ages.length - 1]}`)

// 2
if (ages.length % 2 == 1) {
    console.log(ages[Math.floor(ages.length / 2)], ages[Math.floor(ages.length / 2) + 1])
} else {
    console.log(ages[Math.floor(ages.length / 2)])
}
