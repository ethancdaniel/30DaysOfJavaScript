// Level 1

localStorage.setItem('firstName', 'Ethan')
localStorage.setItem('city', 'san francisco')

// Level 2
const student = {
  'firstName': 'A',
  'lastName': 'B',
  'skills': ['HTML', 'CSS', 'JS'],
  'enrolled': false
}
localStorage.setItem('student1', JSON.stringify(student))