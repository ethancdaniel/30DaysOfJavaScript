const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Level 1
// 1
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// 3
const {width, height, area, perimeter} = rectangle

// Level 2
// 1-2
let lowSkills = []
for (const {name, scores, skills, age} of users) {
    if (skills.length <= 2) {
        lowSkills.push(name)
    }
}
console.log(lowSkills)

// Level 3
// 2
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, scores] = student
const [,,jsScore, reactScore] = scores

// 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
const convertArrayToObject = students => {
    const res = []
    for (const [name, skills, scores] of students) {
        res.push({name, skills, scores})
    }
    return res
}
console.log(convertArrayToObject(students))

// 4
const studentLong = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}
const newStudent = {name: studentLong.name, age: studentLong.age, skills: {
    frontEnd: [...studentLong.skills.frontEnd, {skill: 'Bootstrap', level: 8}],
    backEnd: [...studentLong.skills.backEnd, {skill: 'Express', level: 9}],
    dataBase: [...studentLong.skills.dataBase, {skill: 'SQL', level: 8}],
    dataScience: [...studentLong.skills.dataScience, 'SQL']}}
console.log(newStudent)