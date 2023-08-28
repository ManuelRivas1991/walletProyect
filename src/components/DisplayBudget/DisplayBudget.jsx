import PropTypes from 'prop-types';
import { formatAmount } from '../../helpers';
import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';


const DisplayBudget = ({name, expenses}) => {



const [available, setAvailable] = useState(0)
const [spent, setSpent] = useState(0)
const [percentage, setPercentage] = useState(0)
const [colorCircularProgressbar, setColorCircularProgressbar] = useState('#6B7280')
const [colorText, setColorText] = useState('text-gray-500')

useEffect(()=>{
  
  const walletBudget = expenses.filter(expen => expen.category === 'Incomes')

  const walletSpent = expenses.filter(expen => expen.category !== 'Incomes')

  const budget = walletBudget.reduce((total, expen) => expen.cost+total, 0)
  const totalSpent = walletSpent.reduce((total, expen) => expen.cost+total, 0)

  const totalAvailable = budget- totalSpent

  //Calculate the percentage spent
  const newPercentage =(((budget - totalAvailable) / budget)*100).toFixed(2)

 

    if(newPercentage>0){
      
      if(newPercentage>100){
        setPercentage(100)
      }else{
        setPercentage(newPercentage)
      }
      
      if(newPercentage>=0 && newPercentage<60){
        setColorCircularProgressbar('#34D399')
        setColorText('text-emerald-500 ')
      }
      if(newPercentage>=60 && newPercentage<80){
        setColorCircularProgressbar('#F59E0B')
        setColorText('text-amber-500 ')
      }
      if(newPercentage>=80){
        setColorCircularProgressbar('#EF4444')
        setColorText('text-red-500 ')
      }

    }else{
      setPercentage(0)
      setColorCircularProgressbar('#6B7280')
      setColorText('text-gray-500 ')
    }
    


  setAvailable(totalAvailable)
  setSpent(budget-totalAvailable)

},[expenses])


  return (
    <div className="bg-white shadow-md rounded-md px-5 py-10  text-center" >
                
          <h2 className=" font-black text-3xl"> {name} </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 relative'>
            <div className='w-1/2 m-auto'>
            <CircularProgressbar
            styles={buildStyles({
                pathColor: colorCircularProgressbar,
                rotation: 0.5,
                trailColor: '#F5F5F5',
                pathTransitionDuration: 0.5,
                textSize: '10px',
                textColor: colorCircularProgressbar
            })}
            value={percentage}
            text={`${percentage}% Spent`}
            
            ></CircularProgressbar>
  

            </div>
            <div className=' flex flex-col text-center text-2xl gap-y-5'>
              <h3 className=' text-3xl font-bold'> Budget </h3>
              <h3 className={`${colorText} mt-auto mb-5`}>
                  <span className='font-bold'>Available: </span>{formatAmount(available)}
              </h3>
              <h3 className=' mb-auto'>
                  <span className='font-bold'>Spent: </span>{formatAmount(spent)}
              </h3>
              
            </div>
            
            
          </div>
          
                
    </div>
  )
}

DisplayBudget.propTypes = {
  name: PropTypes.string.isRequired,
  expenses:PropTypes.array.isRequired
}
export default DisplayBudget