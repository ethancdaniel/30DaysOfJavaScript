// LC medium nice
const btn = document.querySelector('button')
btn.onclick = genNumbers
function genNumbers() {
    console.log('hi')
    const wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ''
    const input = document.querySelector('input')
    let count = parseInt(input.value)
    if (!count) {
        return
    }
    const primes = Array(count).fill(true)
    for (let i = 2; i < primes.length; i += 2) {    
        primes[i] = false
    }
    for (let i = 3; i < primes.length; i += 2) {
        for (let j = i; i * j < primes.length; j++) {
            if (primes[i*j]) {
                primes[i*j] = false
            }
        }
    }

    const primeNums = []
    for (let i = 0; i < primes.length; i++) {
        if (i > 1 && primes[i]) {
            primeNums.push(i)
        }
    }

    for (let i = 0; i < primes.length; i++) {
        const box = document.createElement('div')
        box.textContent = i
        box.classList.add('div-num')
        if (primes[i]) {
            box.classList.add('prime')
        } else if (i % 2 == 0) {
            box.classList.add('even')
        } else {
            box.classList.add('odd')
        }
        wrapper.appendChild(box)
    }
}