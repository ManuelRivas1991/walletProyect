export const generateId = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return random+date
}

export const dateFormat = date =>{
    const newDate = new Date(date)
    const option = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('en-US', option)
}

export const nameMonth = dateMilliseconds =>{
    const date = new Date(dateMilliseconds)
    const options = { month: 'long' }
    const month = date.toLocaleDateString('en-US', options);
    return month
}

export const currenMonth = () =>{
    const date = new Date()
    return nameMonth(date)
  }

export const getYear = dateMilliseconds =>{
    const date = new Date(dateMilliseconds)
    const year = date.getFullYear() 
    return year
}

export const currentYear = () => {
    const year = new Date().getFullYear(); 
    return year;
  }


export const formatAmount = amount =>{
    return amount.toLocaleString('en-US',{
        style: 'currency',
        currency: 'UYU'
    })
}



