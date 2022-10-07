// Level 3

function personAccount() {
  const firstName = 'Ethan'
  const lastName = 'Daniel'
  let incomes = [[2, 'desc1'], [5, 'desc2']]
  let expenses = [[3, 'desc1'], [8, 'desc2']]

  function totalIncome() {
    return incomes.reduce((acc, cur) => acc += cur[0], 0)
  }
  
  function totalExpenses() {
    return expenses.reduce((acc, cur) => acc += cur[0], 0)
  }

  function accountInfo() {
    return `Name: ${firstName} ${lastName}; Income: ${totalIncome()}; Expenses: ${totalExpenses()}`
  }

  function addIncome(num, desc) {
    incomes.push([num, desc])
  }

  function addExpense(num, desc) {
    expenses.push([num, desc])
  }

  function accountBalance() {
    return totalIncome() - totalExpenses()
  }

  return {
    totalIncome:totalIncome(),
    totalExpenses:totalExpenses(),
    accountInfo:accountInfo(),
    addIncome:addIncome(),
    addExpense:addExpense(),
    accountBalance:accountBalance()
  }
}

const x = personAccount()
console.log(x.totalIncome)
console.log(x.totalExpenses)
console.log(x.accountInfo)
