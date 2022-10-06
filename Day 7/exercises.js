const printArray = arr => {
    for (elem of arr) {
        console.log(elem)
    }
}
a = [1,2,3,4,5]
printArray(a)

const sevenRandoms = () => {
    res = []
    for (let i = 0; i < 7; i++) {
        res.push(Math.floor(Math.random() * 10))
    }
    return res
}

function isUnique(arr) {
    s = new Set(arr)
    return arr.length == s.length
}