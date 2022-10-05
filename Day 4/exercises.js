// Skipped previous exercises because of repetition and simplicity
// Level 3
// 1
const m = {'january': 31, 'february': 28, 'march': 31, 'april': 30, 'may': 31, 'june': 30, 
     'july': 31, 'august': 30, 'september': 31, 'october': 31, 'november': 30, 'december': 31}
const month = prompt("Enter month").toLowerCase()
const year = prompt("Enter year").toLowerCase()
let res
if (!(month in m)) {
    alert('invalid month')
} else {
    if (month == 'february' && year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        res = 29
    } else {
        res = m[month]
    }
}
alert(`${month[0].toUpperCase() + month.substring(1)} has ${res} days in the year ${year}.`)