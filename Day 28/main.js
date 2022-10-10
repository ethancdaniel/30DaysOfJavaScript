const form = document.querySelector('form')
form.elements['submit'].onclick = addPlayer
const wrapper = document.querySelector('.player-wrapper')

function addPlayer() {
    const player = document.createElement('div')
    const name = document.createElement('p')
    const country = document.createElement('p')
    const playerScore = document.createElement('p')

    name.textContent = form.elements['fname'].value + form.elements['lname'].value
    country.textContent = form.elements['country'].value
    playerScore.textContent = form.elements['score'].value

    player.appendChild(name)
    player.appendChild(country)
    player.append(playerScore)

    const buttonDiv = document.createElement('div')
    const delBtn = document.createElement('button')
    const incBtn = document.createElement('button')
    const decBtn = document.createElement('button')

    delBtn.onclick = trashPlayer
    incBtn.onclick = incScore
    decBtn.onclick = decScore

    delBtn.textContent = 'trash'
    incBtn.textContent = '+5'
    decBtn.textContent = '-5'

    buttonDiv.appendChild(delBtn)
    buttonDiv.appendChild(incBtn)
    buttonDiv.appendChild(decBtn)

    player.classList.add('player-container')

    player.appendChild(buttonDiv)
    wrapper.append(player)
    form.reset()
}

function trashPlayer() {
    const playerContainer = this.firstChild.parentElement.parentElement.parentElement
    playerContainer.remove()
}

function incScore() {
    const playerContainer = this.firstChild.parentElement.parentElement.parentElement
    const curScore = playerContainer.children[2]
    curScore.textContent = parseInt(curScore.textContent) + 5
}

function decScore() {
    const playerContainer = this.firstChild.parentElement.parentElement.parentElement
    const curScore = playerContainer.children[2]
    curScore.textContent = parseInt(curScore.textContent) - 5

}