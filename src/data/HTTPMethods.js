export async function getInfo(){

    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()

   return result
  
}

export async function getCustomer(id){

    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await response.json()

   return result
  
}

export async function postInfo(data){
    try {
        const response = await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function newExpense(data, id){
    try {
        const getCustomer = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
        const customer = await getCustomer.json()
        const expenses = customer.expenses
        expenses.push(data)

        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                "expenses": expenses

            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await response.json()
  

    } catch (error) {
        console.log(error)
    }
}

export async function editExpense(data, id){
    try {
        const getCustomer = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
        const customer = await getCustomer.json()
        
        const  expenses = customer.expenses.map(expense => expense.id === data.id ? data : expense)
     
  
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PATCH',
            body: JSON.stringify({
                "expenses": expenses

            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await response.json()
  

    } catch (error) {
        console.log(error)
    }
}
export async function deleteExpense(customerId, expenseId){
    try {
        const getCustomer = await fetch(`${import.meta.env.VITE_API_URL}/${customerId}`)
        const customer = await getCustomer.json()
        
        const  expenses = customer.expenses.filter(expense => expense.id !== expenseId)
  
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${customerId}`,{
            method: 'PATCH',
            body: JSON.stringify({
                "expenses": expenses

            }),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await response.json()
  

    } catch (error) {
        console.log(error)
    }
}

export async function editCustomer(data, id){
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PATCH',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await response.json()
    } catch (error) {
        console.log(error)
    }
}

export async function deleteCustomer(id){

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE'
        })
        await response.json()
    } catch (error) {
        console.log(error)
    }
}

