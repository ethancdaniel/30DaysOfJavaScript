const multiples = {'moon': 0.166, 'mercury': 0.38, 'venus': 0.91, 'earth': 1, 'mars': 0.38, 'jupiter': 2.34, 'saturn': 1.06, 'uranus': 0.92, 'neptune': 1.19, 'pluto': 0.06 }

const calcWeightBtn = document.querySelector('#calc-weight')
calcWeightBtn.onclick = calcWeight;
function calcWeight() {
    const wrapper = document.querySelector('.flex-container')
    wrapper.innerHTML = ''
    const select = document.querySelector('select').value
    const mass = document.querySelector('input').value
    if (select == 'none') {
        const p = document.createElement('p')
        p.textContent = 'Mass is required.'
        wrapper.appendChild(p)
        return 
    }
    const multiple = multiples[select]
    const newtons = multiple * mass * 9.81
    console.log(newtons.toFixed(3))

    const img = document.createElement('img')
    img.src = `images/${select}.png`
    img.style.width = '250px'
    img.style.paddingTop = '20px'
    const p = document.createElement('p')
    p.textContent = `The weight of the object on ${select[0].toUpperCase() + select.substring(1)} is ${newtons.toFixed(3)} Newtons.`
    wrapper.appendChild(img)
    wrapper.appendChild(p)
}