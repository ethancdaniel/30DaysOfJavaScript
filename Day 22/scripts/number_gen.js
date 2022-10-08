// LC medium nice

const primes = Array(104).fill(true)
for (let i = 2; i < primes.length - 2; i += 2) {
    primes[i] = false
}
for (let i = 3; i < primes.length - 2; i += 2) {
    for (let j = i; i * j < primes.length - 2; j++) {
        if (primes[i*j]) {
            primes[i*j] = false
        }
    }
}

const primeNums = []
for (let i = 0; i < primes.length - 2; i++) {
    if (i > 1 && primes[i]) {
        primeNums.push(i)
    }
}

const wrapper = document.querySelector('.wrapper')
for (let i = 0; i < primes.length - 2; i++) {
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