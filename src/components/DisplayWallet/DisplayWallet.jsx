import { useEffect, useState } from "react";
import DisplayBudget from "../DisplayBudget/DisplayBudget"
import PropTypes from 'prop-types';
import { getYear, nameMonth } from "../../helpers";
import DisplayGraphic from "../DisplayGraphic/DisplayGraphic";

const DisplayWallet = ({name, expenses, filterMonth, filterYear,setFilterCategory}) => {
    const [expensesDisplayWallet, setExpensesDisplayWallet] = useState([])

    useEffect(()=>{

        const result = () => {
          
          
        
          return expenses.filter(expense => {
           
        
            if (filterMonth && nameMonth(expense.date) !== filterMonth) {
              return false;
            }
        
            if (filterYear && getYear(expense.date ) !== filterYear) {
              return false;
            }
        
            return true;
          });
        };
      
        setExpensesDisplayWallet(result())
    
        },[filterMonth,filterYear,expenses])
    
  return (
    <>
        <div className="select-none grid gap-4 grid-cols-1 md:grid-cols-2">
          <DisplayBudget name={name} expenses={expensesDisplayWallet}/>
          <DisplayGraphic 
          wallet={expensesDisplayWallet}
          setFilterCategory={setFilterCategory}
          />
        </div>
    </>
  )
}

DisplayWallet.propTypes = {
    expenses: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    filterMonth: PropTypes.string.isRequired,
    filterYear: PropTypes.number.isRequired,
    setFilterCategory: PropTypes.func.isRequired
   
    }

export default DisplayWallet