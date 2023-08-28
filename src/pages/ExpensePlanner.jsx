import { useLoaderData } from "react-router-dom"
import CustomerContainer from "../components/CustomerContainer/CustomerContainer"
import Filters from "../components/Filters/Filters"
import { useEffect, useState } from 'react';
import { currenMonth, currentYear } from "../helpers";
import DisplayWallet from "../components/DisplayWallet/DisplayWallet";
import ModalNewExpense from "../components/Forms/ModalNewExpense";


const ExpensePlanner = () => {
  
    const info = useLoaderData()
    const [filterCategory, setFilterCategory] = useState('') 
    const [filterMonth, setFilterMonth] = useState(currenMonth()) 
    const [filterYear, setFilterYear] = useState(currentYear()) 
    const [allCustomers, setAllCustomers] = useState({
      name: 'Wallet',
      budget: 0,
      expenses: []
    })
    const [modal, setModal] = useState(false)
    

    const styleDivCustomerContainer = ()=>{
      if(info.length>1)return 'md:grid md:gap-4 md:grid-cols-2 md:my-5'
      return 'md:grid md:gap-4 mx-auto md:w-4/5 md:grid-cols-1 my-5'
    }

    useEffect(()=>{
      

      const totalBudget = info.reduce((total, customer) => customer.budget+total, 0)

      const totalExpenses =[]
      for (let i = 0; i < info.length; i++) {
       const array = info[i].expenses;
       totalExpenses.push(...array);
      }
     const obj = {
        name: 'Wallet',
        budget: totalBudget,
        expenses: totalExpenses
      }
     
      
      setAllCustomers(obj)
    },[info])
    
    return (
    <>
        <h1 className=" font-black text-4xl text-emerald-600">Expense Planner</h1>
        <p className="mt-3">Manage your expenses</p>

        <Filters 
        filterCategory={filterCategory} 
        setFilterCategory={setFilterCategory}
        filterMonth={filterMonth}
        setFilterMonth={setFilterMonth}
        filterYear={filterYear}
        setFilterYear={setFilterYear}
        />
         
         <DisplayWallet 
         name={allCustomers.name}
         expenses={allCustomers.expenses}
         filterCategory={filterCategory}
         filterMonth={filterMonth}
         filterYear={filterYear}
         setFilterCategory={setFilterCategory}
         />
      

        {info.length ? (
           <div className={styleDivCustomerContainer()}>
              {info.map(customer =>(
              <CustomerContainer 
              key={customer.id} 
              customer={customer} 
              filterCategory={filterCategory}
              filterMonth={filterMonth}
              filterYear={filterYear}
                />
              ))}
           </div>
        ):(
          <h3 className=" font-black text-center text-3xl my-20"> {"There aren't  Customers"} </h3>
        )
        }
      
        <div className='fixed bottom-5 right-5 md:bottom-10 md:right-10 cursor-pointer'>
          <button type="button" 
            className=" bg-emerald-600 hover:bg-emerald-700 text-white text-6xl font-bold rounded-full leading-4 h-14 px-2 pb-3"
            onClick={()=>setModal(true)} 
              >+</button>
        </div>

        {modal &&

         <ModalNewExpense info={info} setModal={setModal} />

        }
    
            
    </>
  )
}

export default ExpensePlanner