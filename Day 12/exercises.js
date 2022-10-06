// Level 1
// 2
let sentence = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
let pattern = /-?[0-9]+/g
let res = sentence.match(pattern)
res = res.map((n) => parseInt(n))
console.log(res)
console.log(`distance between furthest particles: ${Math.max(...res) - Math.min(...res)}`)

// Level 2
// 1
const tenMostFrequentWords = str => {
  const pattern = /[A-Za-z]+/g
  const matches = str.match(pattern)
  const countWords = matches.reduce((map, b) => {
    map[b] = map[b] + 1 || 1
    return map
  }, {})
  const arr = []
  for (const key of Object.keys(countWords)) {
    const elem = [key, countWords[key]]
    arr.push(elem)
  }
  arr.sort((a,b) => {
    if (a[1] > b[1]) return -1
    if (a[1] < b[1]) return 1
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    return 0
  })
  return arr.splice(0,10)
}
const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph))

// Level 3
// 1
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(txt) {
  pattern = /[^a-zA-Z0-9 ]/g
  return txt.replace(pattern, '')
}
console.log(cleanText(sentence))