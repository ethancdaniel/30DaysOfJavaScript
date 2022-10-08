document.body.addEventListener('keypress', e => {
    const wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = ''
    let keyPressedTitle = e.key
    if (keyPressedTitle == ' ') keyPressedTitle = 'spacebar'
    keyPressedTitle = keyPressedTitle[0].toUpperCase() + keyPressedTitle.substring(1)
    const keycode = e.code

    const youPressed = document.createElement('div')
    const key = document.createElement('span')
    key.textContent = keyPressedTitle
    youPressed.classList.add('pressed-div')
    youPressed.innerHTML = 'You pressed '
    youPressed.appendChild(key)

    wrapper.appendChild(youPressed)
})