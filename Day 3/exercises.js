// Level 1

// 1
let firstName = 'Ethan', lastName = 'Daniel', country = 'United States', city = 'San Francisco', age = 22, isMarried = false
console.log(typeof firstName, typeof age, typeof isMarried);

// 2
console.log(10 === '10') // false
console.log(parseInt('9.8') == 10)

// 4-5 (picked 3)
console.log('Question 4')
console.log(4 !== 4); // false
console.log(4 >= 3); // true
console.log(4 === '4') // false

// 6 (picked 2)
console.log('Question 6')
console.log(!(4 === '4')) // true
console.log(!(4 > 3 && 10 < 12)) // false

// 7 (picked minutes and num seconds since Jan 1, 1970)
const date = new Date()
console.log(date.getMinutes())
console.log(date.getTime())

// Level 2

// // 1
// // const base = parseInt(prompt('Enter base of triangle'))
// // const height = parseInt(prompt('Enter height of triangle'))
// alert(`The area of the triangle is ${base * height / 2}.`)

// // 2
// // const a = parseInt(prompt('Enter side a'))
// // const b = parseInt(prompt('Enter side b'))
// // const c = parseInt(prompt('Enter side c'))
// alert(`The perimeter of the triangle is ${a+b+c}`)

// Skipped 3, 4, 5, too similar to 1 and 2
// 6
const p1 = [2, 2]
const p2 = [6, 10]
console.log(`Slope between ${p1} and ${p2}: ${(p2[1] - p1[1]) / (p2[0] - p1[0])}`)

// 13
// const birthYear = prompt('Enter birth year:')
// const currentYear = new Date().getFullYear()
// age = currentYear - birthYear
// if (birthYear - currentYear >= 18) {
//     console.log(`You are ${age}. You are old enough to drive.`)
// } else {
//     console.log(`You are ${age}. You will be allowed to drive in ${18 - age} years.`)
// }

// 15
console.log(date.toISOString().substring(0,10));
console.log([date.getDate().toString().padStart(2, '0'), (date.getMonth() + 1).toString().padStart(2, '0'), date.getFullYear()].join('-'))
console.log([date.getDate().toString().padStart(2, '0'), (date.getMonth() + 1).toString().padStart(2, '0'), date.getFullYear()].join('/'))

// Level 3

// 1
pad = (num) => num.toString().padStart(2, '0')
console.log([pad(date.getDate()), pad((date.getMonth() + 1)), date.getFullYear()].join('-'), [pad(date.getHours()), pad(date.getMinutes())].join(':'))
