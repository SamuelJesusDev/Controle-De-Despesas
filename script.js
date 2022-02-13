const transactionUl = document.querySelector('#transactions')

const dummyTransactions =[
{id: 1, name: 'Bolo de brigadeiro', amount: -20},
{id: 2, name: 'Salário', amount: 300},
{id: 3, name: 'Torta de frango', amount: -10},
{id: 4, name: 'Violão', amount: 150},

]

const addTransactionIntoDom = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithouOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `${transaction.name} <span> ${operator} R$ ${amountWithouOperator}</span><button class="delete-bnt"`
    
    transactionUl.append(li)
}

const updateBalanceValues = () =>{
    const transactionAmounts = dummyTransactions.map(transaction => transaction.amount)
    const total = transactionAmonts.reduce((accumulator, transaction) => accumulator + transaction, 0).toFixed(2)
}
const init = () => {
    dummyTransactions.forEach(addTransactionIntoDom)
    updateBalanceValues()
}
init()