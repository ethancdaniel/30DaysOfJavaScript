import { countries_data } from './countries_data.js'
import { Chart, registerables } from './node_modules/chart.js/dist/chart.mjs'

Chart.register(...registerables)
let chart

const populationBtn = document.querySelector('button.population')
populationBtn.onclick = mostPopulatedCountries
const languageBtn = document.querySelector('button.languages')
languageBtn.onclick = mostCommonLanguages
const graphTitle = document.querySelector('.graph-title')
function mostPopulatedCountries() {
    graphTitle.textContent = '10 Most Populated Countries in the World'
    const res = countries_data.sort((a, b) => {
        if (a.population > b.population) return -1
        if (a.population < b.population) return 1
        return 0
    })
    const resArr = []
    for (let item of res) {
        resArr.push([item.name, item.population])
    }
    console.log(resArr)
    createGraph(resArr)
}

function mostCommonLanguages() {
    graphTitle.textContent = '10 Most Spoken Languages in the World'
    const res = countries_data.reduce((acc, i) => {
        i.languages.forEach(item => {
            acc[item] = acc[item] + 1 || 1
        })
        return acc
    }, {})
    let resArr = []
    for (let key of Object.keys(res)) {
        resArr.push([key, res[key]])
    }
    resArr = resArr.sort((a, b) => {
        if (a[1] > b[1]) return -1
        if (a[1] < b[1]) return 1
        if (a[0] > b[0]) return -1
        if (a[0] < b[0]) return 1
        return 0
    })
    createGraph(resArr)
}

function createGraph(data) {
    if (chart) chart.destroy()
    data = data.splice(0,10)
    const ctx = document.getElementById('chart').getContext('2d')
    const labels = []
    const values = []
    
    data.forEach(e => {
        labels.push(e[0])
        values.push(e[1])
    })
    Chart.defaults.font.family = 'Montserrat'
    Chart.defaults.font.size = 14
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{    
                backgroundColor: '#F7A072',
                data: values,
            }]
        },
        options: {  
            indexAxis: 'y',
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })
}