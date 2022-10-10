const form = document.querySelector('form')
form.onsubmit = (e) => {
    e.preventDefault()
    // Send form to server here
    Array.from(form.elements).forEach(e => {
        console.log(e.value)
    })
    return false
}
console.log('hello')