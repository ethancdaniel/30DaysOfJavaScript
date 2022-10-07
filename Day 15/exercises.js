// Level 1-2
// 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  makeNoise() {
    console.log('*animal noises*')
  }
}

// 2
class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4)
  }

  makeNoise() {
    console.log('woof')
  }
}

const dog = new Dog('a', 4, 'black')
dog.makeNoise()
const an = new Animal('a', 3, 'red', 2)
an.makeNoise()

// Level 3
// 1
class Statistics {
  constructor(data) {
    this.data = data.sort()
  }
  count() {
    return this.data.length
  }
  sum() {
    return this.data.reduce((total, b) => total += b)
  }
  min() {
    return this.data[0]
  }
  max() {
    return this.data[this.data.length - 1]
  }
  range() {
    return this.max() - this.min()
  }
  mean() {
    return this.sum() / this.count()
  }
  median() {
    if (this.count() % 2 == 0) {
      const i = Math.floor(this.data.length / 2)
      return (this.data[i] + this.data[i+1]) / 2
    }
    return this.data[Math.floor(this.data.length / 2)]
  }
  mode() {
    const a = this._calcFreqArr()
    return a.sort((a,b) => {
      if (a[0] > b[0]) return -1
      if (a[0] < b[0]) return 1
      return 0
    })[0]
  }
  var() {
    const mean = this.mean()
    let total = 0
    this.data.forEach(elem => {
      total += (elem - mean) ** 2
    })
    total /= this.count()
    return total
  }
  std() {
    return Math.sqrt(this.var())
  }
  freqDist() {
    let a = this._calcFreqArr()
    a = a.sort((a, b) => {
      if (a[0] > b[0]) return -1
      if (a[0] < b[0]) return 1
      return 0
    })
    const count = a.reduce((acc, b) => {
      acc = acc + b[0]
      return acc
    }, 0)
    for (let item of a) {
      item[0] = item[0] * (100 / count) 
    }
    return a
  }
  _calcFreqArr() {
    const freqMap = this.data.reduce((acc, n) => {
      acc[n] = (acc[n] || 0) + 1
      return acc
    }, {})
    let a = []
    for (const key of Object.keys(freqMap)) {
      a.push([freqMap[key], key])
    }
    return a
  }
}

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5[(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log('Frequency Distribution: ',statistics.freqDist()) // 
