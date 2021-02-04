const Modal = {
    open(){
        // Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        // Fechar o modal
        // Remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 5000000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    }, 
]

const Transaction = {
    incomes(){
        // Somar as entradas
    },
    expenses(){
        // Somar as saídas
    },
    total(){
        // Entradas - saídas
    }
}

const DOM = {
    addTransaction(transaction, index){
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction()
    },

    innerHTMLTransaction(){

        const html = `
        
        <td class="description">Luz</td>
        <td class="expense">R$ 5000,00</td>
        <td class="date">23/01/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>
        `

        return html
    }
}

DOM.addTransaction(transactions[0])

46.09