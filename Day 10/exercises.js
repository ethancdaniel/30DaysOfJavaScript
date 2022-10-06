// Level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1
let s = new Set()
// 2
for (let i = 0; i < 11; i++) {
    s.add(i)

}
console.log(s)
// 3
s.delete(5)

// 4
s.clear()

// 5
s = new Set(a)
const m = new Map()
countries.forEach((elem) => {
    m[elem] = elem.length
})
console.log(m)

// Level 2
// 1-3
const aUb = new Set([...a, ...b])
const B = new Set(b)
const aIb = new Set(a.filter((elem) => B.has(elem)))
const aWb = new Set(a.filter((elem) => !B.has(elem)))
console.log(aUb)
console.log(aIb)
console.log(aWb)