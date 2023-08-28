import PropTypes from 'prop-types';
import CloseIcon from "../../img/close.svg"
import { useEffect, useState } from 'react';
import Error from "../Error/Error"
import { Form } from "react-router-dom"


const ModalNewExpense = ({info, setModal}) => {

    const [errors, setErrors] = useState([''])
    
    const [allCustomers, setAllCustomers] = useState([])
    const [opacity, setOpacity] = useState('opacity-0')
    const [customer, setCustomer] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')


    useEffect(()=>{

        setOpacity('opacity-95')
        setAllCustomers(info)

        const currentDate = new Date().getTime()-10800000
        const newdate = new Date(currentDate)
        const formattedDate = newdate.toISOString().slice(0, 16)
        setDate(formattedDate)

    },[])


  return (
    
    <div  className={`fixed z-50 bg-black/95 text-white top-0 left-0 right-0 bottom-0 transition-all duration-300 ease-in  ${opacity}`}>
        <div className=" w-full">
            <img 
            className=" w-7 m-10 ms-auto cursor-pointer"
            src={CloseIcon} 
            alt="cerrar modal" 
            onClick={()=>{
                setModal(false)
                setCustomer('')
                setName('')
                setPrice('')
                setCategory()
            }}
            />
        </div>
        <Form 
        className= {` text-lg md:text-2xl w-4/5 md:w-1/3 mx-auto grid gap-6`}
        method='post' 
        action={`/expense/planner/new`}
        onSubmit={(e)=>{

            if([customer,name,price, category, date].includes('')){
                setErrors(['All inputs are required'])
                e.preventDefault()
            }else{
                setErrors([''])
                setModal(false)
            }
            
          }}
        >
            <legend className='border-b-4 border-emerald-500 font-bold text-center text-5xl'>Edit Wallet</legend>
            
            {!errors.includes('') && errors.map((error, i)=> <Error key={i} > {error} </Error>)}

            <div className="grid gap-1">
                <label htmlFor="Customers">Customers</label>

                <select 
                className='text-gray-600 text-center p-2 rounded-md cursor-pointer'
                name='customer'
                value={customer}
                onChange={e => setCustomer(e.target.value)}
                >
                    
                    {allCustomers.length ? (
                    <>
                        <option value="">-- Empty Customer --</option>
                        {allCustomers.map(customer => (
                            <option key={customer.id} value={customer.id}>
                                {customer.name}
                            </option>
                        ))}
                    </>
                    ) : (
                        <option value="">-- No hay clientes --</option>
                    )}

                </select>
            </div>

            <div className=" grid gap-1">
                <label htmlFor="name">Description</label>

                <input 
                className='text-gray-600 text-center p-2 rounded-md cursor-pointer'
                type="text" 
                placeholder="Add a short description" 
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}
                />

            </div>
            <div className="grid gap-1">
                <label htmlFor="price">Income Value or Expense Price</label>

                <input 
                className='text-gray-600 text-center p-2 rounded-md cursor-pointer'
                type="number" 
                placeholder="Example: 300"
                name='cost'
                value={price}
                onChange={e => setPrice(Number(e.target.value))}
                />

            </div>
            <div className="grid gap-1">
                <label htmlFor="category">Category</label>

                <select 
                className='text-gray-600 text-center p-2 rounded-md cursor-pointer'
                name='category'
                value={category}
                onChange={e => setCategory(e.target.value)}
                >
                    <option value="">-- Empty Category --</option>
                    <option value="Incomes">Incomes</option>
                    <option value="Savings">Savings</option>
                    <option value="Food">Food</option>
                    <option value="House">House</option>
                    <option value="Expenses">Expenses</option>
                    <option value="Leisure">Leisure</option>
                    <option value="Health">Health</option>
                    <option value="Subscriptions">Subscriptions</option>

                </select>
            </div>

            <div className="grid gap-1">
                <label htmlFor="date">Date</label>

                <input 
                className='text-gray-600 text-center p-2 rounded-md cursor-pointer'
                type="datetime-local" name="date"
                value={date}
                onChange={e =>setDate(e.target.value)}
                />
            </div>

            <input 
            type="submit" 
            value="Send" 
            className=' border-4 border-emerald-500 rounded-md p-2 hover:border-emerald-500/5 hover:bg-emerald-500/50 cursor-pointer'
            />

        </Form>
    </div>
  )
}


ModalNewExpense.propTypes = {
  info: PropTypes.array.isRequired,
  setModal: PropTypes.func.isRequired
  }

export default ModalNewExpense