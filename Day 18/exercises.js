const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// Level 1
// 1
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    for (let d of data) {
      //console.log(`Name: ${d.name}, Capital: ${d.capital}, Languages: ${[JSON.stringify(d.languages, ['name'])]}, Population: ${d.population}, Area: ${d.area}`)
    }
  })
  .catch(err => console.error(err))

// Level 2
let catNames = []
fetch(catsAPI)
  .then(response => response.json())
  .then(data => {
    for (let item of data) {
      catNames.push(item.name)
    }
  })
  .then(() => {
    console.log(catNames)
  }
  )
  .catch(err => console.error(err))

// Level 3
// 2
fetch(countriesAPI)
  .then(response => response.json())
  .then(data => {
    data = data.sort((a,b) => {
      if (a.population > b.population) return -1
      if (a.population < b.population) return 1
      return 0
    })
    console.log(data.splice(0,10))
  })