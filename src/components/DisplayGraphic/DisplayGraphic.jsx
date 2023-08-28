import PropTypes from 'prop-types';
import expensesIcon from "../../img/expenses_icon.svg";
import foodIcon from "../../img/food_icon.svg";
import healthIcon from "../../img/health_icon.svg";
import houseIcon from "../../img/house_icon.svg";
import leisureIcon from "../../img/leisure_icon.svg";
import subscriptionsIcon from "../../img/subscriptions_icon.svg";
import savingsIcon from "../../img/savings_icon.svg";
import { useEffect, useState } from 'react';

const dictionaryIcons = {
  Expenses : expensesIcon,
  Food: foodIcon,
  Health: healthIcon,
  House: houseIcon,
  Leisure:leisureIcon,
  Subscriptions: subscriptionsIcon,
  Savings:savingsIcon
  
}

const progressBarStyle = [

  'bg-red-500 md:w-full',
  'bg-orange-400 md:w-11/12',
  'bg-yellow-400 md:w-10/12',
  'bg-lime-400 md:w-9/12',
  'bg-emerald-400 md:w-8/12'
  
]

const savingsBarStyle = [

  'bg-emerald-400 md:w-full',
  'bg-lime-400 md:w-11/12',
  'bg-yellow-400 md:w-10/12',
  'bg-orange-400 md:w-9/12',
  'bg-red-500 md:w-8/12',
  
]

const DisplayGraphic = ({wallet, setFilterCategory}) => {
  const [spentwallet, setSpentwallet] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [food, setFood] = useState(0)
  const [house, setHouse] = useState(0)
  const [health, setHealth] = useState(0)
  const [leisure, setLeisure] = useState(0)
  const [subscriptions, setSubscriptions] = useState(0)
  const [savings, setSavings] = useState(0)
  const [expenseRanking, setExpenseRanking] = useState([])
  const [percentages, setPercentages] = useState({
          Subscriptions: 0,
          Leisure: 0,
          Expenses : 0,
          House: 0,
          Food: 0,
          Savings: 0,
          Health: 0
  })

  useEffect(() => {
    const result = ()=>{

      const filteredWallet = wallet.filter(expense => expense.category !== 'Incomes')
      const total = filteredWallet.reduce((total, expense) => expense.cost+total, 0)
      return total

    }
    setSpentwallet(result())
  
  }, [wallet])
  


  useEffect(() => {   

    const result = category=>{
       const filteredWallet = wallet.filter(expense => expense.category === category && expense.category !== 'Incomes')
       const total = filteredWallet.reduce((total, expense) => expense.cost+total, 0)
       return total
     }
    
    setExpenses(result('Expenses'))
    setFood(result('Food'))
    setHealth(result('Health'))
    setHouse(result('House'))
    setLeisure(result('Leisure'))
    setSubscriptions(result('Subscriptions'))
    setSavings(result('Savings'))
    


    const categories = [ 

          {Subscriptions: subscriptions},
          {Leisure: leisure},
          {Expenses : expenses},
          {House: house},
          {Food: food},
          {Savings: savings},
          {Health: health}
    
        ]  


    const compare = (a, b) => {
      if(Object.values(a)[0]<Object.values(b)[0]) return 1
      if(Object.values(a)[0]>Object.values(b)[0])return -1
      return 0
    }

    const final = categories.sort( compare )
    if(spentwallet>0){
      setExpenseRanking(final.slice(0, 5))
    }else{
      setExpenseRanking([])
    }
    
  

}, [expenses,food,health,house,leisure,subscriptions,savings,wallet,spentwallet])

useEffect(() => {

  const incomes = ()=>{

    const filteredWallet = wallet.filter(expense => expense.category === 'Incomes')
    const total = filteredWallet.reduce((total, expense) => expense.cost+total, 0)
    return total

  }

  const newPercentage = category =>{

    const filteredWallet = wallet.filter(expense => expense.category === category)
    const total = filteredWallet.reduce((total, expense) => expense.cost+total, 0)
    const result = ((total / incomes())*100).toFixed(2)
    if(result>0){
      return result
    }else{
      return 0
    }
    

  }
  

  const obj =  {
    Subscriptions: newPercentage('Subscriptions'),
    Leisure: newPercentage('Leisure'),
    Expenses : newPercentage('Expenses'),
    House: newPercentage('House'),
    Food: newPercentage('Food'),
    Savings: newPercentage('Savings'),
    Health: newPercentage('Health')
  }

  setPercentages(obj)
  
}, [wallet])

  
  return (
    <div className="bg-white shadow-md rounded-md px-5 py-5 text-center">
      

      {expenseRanking.length ?(
      <>
        <h2 className=" font-black mb-5 text-2xl uppercase"> Top 5ive </h2>

        <div className='flex'>

          <div className='space-y-1 w-2/12'>

              {expenseRanking.map((rank, index) =>(

                <img 
                key={index} 
                src={dictionaryIcons[Object.keys(rank)[0]]} 
                alt="Icon Payout" className='h-10 m-auto cursor-pointer'
                onClick={()=>setFilterCategory(Object.keys(rank)[0])}
                />
        
              ))}



          </div>

          <div className=' text-white flex flex-col w-10/12 text-xl '>
            
             {expenseRanking.map((rank, index) =>(

                <div  
                key={index} 
                className={Object.keys(rank)[0]!=='Savings' ? `rounded-md my-auto cursor-pointer ${progressBarStyle[index]}`: `rounded-md my-auto cursor-pointer ${savingsBarStyle[index]}`}
                onClick={()=>setFilterCategory(Object.keys(rank)[0])}
                >
                  {index+1}# {Object.keys(rank)[0]} <span className=' font-bold'>{percentages[Object.keys(rank)[0]]}%</span>
                </div>

              ))}
            

          </div>

        </div>
      </>):(

         <div className='h-full flex justify-center items-center'>
            <h2 className=" font-black mb-5 text-2xl"> {"There aren't expenses to rank"} </h2>
         </div>
        
      )
     }

    </div>
    
  )
}

DisplayGraphic.propTypes = {
  wallet:PropTypes.array.isRequired,
  setFilterCategory: PropTypes.func.isRequired
  }

export default DisplayGraphic