// Level 1
// 1
const firstP = document.querySelector('p')
firstP.textContent = 'hi'

// 2
const aaaP = document.querySelector('aaa')

// 3
const nodeList = document.querySelectorAll('p')

// 4
nodeList.forEach(item => {
  console.log(item.textContent)
})

// 5
nodeList[3].textContent = 'Fourth Paragraph'

// Level 2
// 1
nodeList[0].style.color = 'red'
nodeList[1].style.fontSize = '24px'
nodeList[2].style.fontFamily = 'sans-serif'

// 2
for (let i = 0; i < nodeList.length; i++) {
  if (i % 2 == 0) {
    nodeList[i].style.color = 'green'
  } else {
    nodeList[i].style.color = 'red'
  }
}