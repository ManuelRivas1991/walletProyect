import PropTypes from 'prop-types';
import CloseIcon from "../../img/close.svg"
import { useEffect, useState } from 'react';
import Error from "../../components/Error/Error"
import { Form } from "react-router-dom"


const ModalForm = ({customer,setModal,payout}) => {

    const [errors, setErrors] = useState([''])
    
    const [opacity, setOpacity] = useState('opacity-0')

    const [id, setId] = useState('')
    const [customerName, setCustomerName] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')


    useEffect(()=>{

        setOpacity('opacity-95')
       
        setId(customer.id)
        setCustomerName(customer.name)
       
        setName(payout.name)
        setPrice(payout.cost)
        setCategory(payout.category)

        const newdate = new Date(payout.date-10800000)
        const formattedDate = newdate.toISOString().slice(0, 16)
        setDate(formattedDate)

   
    },[])


  return (
    
    <div  className={ `transition-all duration-300 ease-in  ${opacity} fixed z-50 bg-black/95 text-white top-0 left-0 right-0 bottom-0 `}>

        <div className=" w-full">
            <img 
            className=" w-7 m-10 ms-auto cursor-pointer"
            src={CloseIcon} 
            alt="cerrar modal" 
            onClick={()=>{
                setModal(false)
                setId('')
                setName('')
                setPrice('')
                setCategory()
            }}
            />
        </div>

        <Form 
        className= {`text-lg md:text-2xl w-4/5 md:w-1/3 mx-auto grid gap-6`}
        method='post' 
        action={`/expense/planner/${customer.id}/edit/${payout.id}`}
        onSubmit={(e)=>{

            if([name,price, category, date].includes('')){
                setErrors(['All inputs are required'])
                e.preventDefault()
            }else{
                setErrors([''])
                setModal(false)
            }
            
          }}
        >
            <legend className='border-b-4 border-emerald-500 font-bold text-center text-5xl'>Edit Expense</legend>

            {!errors.includes('') && errors.map((error, i)=> <Error key={i} > {error} </Error>)}

            <div className="grid gap-1">
                <label htmlFor="Customers">Customer</label>

                <select 
                className='text-gray-600 text-center p-2 rounded-md cursor-pointer'
                name='customer'
                value={id}
                onChange={e => setId(e.target.value)}
                >
                    
                <option value={id}>{customerName}</option>
    
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

            <button 
            type="submit" 
            className=' border-4 border-emerald-500 rounded-md p-2 hover:border-emerald-500/5 hover:bg-emerald-500/50 cursor-pointer'
            >Send</button>
            

        </Form>
    </div>
  )
}


ModalForm.propTypes = {
  customer: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
  payout: PropTypes.object.isRequired
  }

export default ModalForm