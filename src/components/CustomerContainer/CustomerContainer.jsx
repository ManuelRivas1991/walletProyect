import PropTypes from 'prop-types';
import DisplayBudget from '../DisplayBudget/DisplayBudget';
import DisplayExpense from "../DisplayExpense/DisplayExpense";
import { useEffect, useState } from 'react';
import { getYear, nameMonth } from '../../helpers';



const CustomerContainer = ({customer,filterCategory,filterMonth, filterYear}) => {
  const [expensesFiltered, setExpensesFiltered] = useState([])
  const [expensesDisplayWallet, setExpensesDisplayWallet] = useState([])
  

  useEffect(()=>{

    const result = () => {
      return customer.expenses.filter(expen => {
        if (filterCategory && expen.category !== filterCategory) {
          return false;
        }
    
        if (filterMonth && nameMonth(expen.date) !== filterMonth) {
          return false;
        }
    
        if (filterYear && getYear(expen.date ) !== filterYear) {
          return false;
        }
    
        return true;
      });
    };

    const compare = (a, b) => {
      if(a.date<b.date) return -1
      if(a.date>b.date)return 1
      return 0
    }
    const final = result().sort( compare );
  
  
    setExpensesFiltered(final)

    },[filterCategory,filterMonth,filterYear, customer.expenses])

    useEffect(()=>{

      const result = () => {
        
        
      
        return customer.expenses.filter(expen => {
         
      
          if (filterMonth && nameMonth(expen.date) !== filterMonth) {
            return false;
          }
      
          if (filterYear && getYear(expen.date ) !== filterYear) {
            return false;
          }
      
          return true;
        });
      };
    
      setExpensesDisplayWallet(result())
  
      },[filterMonth,filterYear,customer.expenses])

      const title = ()=>{
        if(filterMonth && filterCategory){
          return filterCategory+' in '+filterMonth+', '+filterYear
        }
        if(filterMonth && !filterCategory){
          return 'All in '+filterMonth+', '+filterYear 
        }
      } 
      
      const alternativeTitle = ()=>{
        if(filterMonth && filterCategory){
          return filterCategory+" in "+filterMonth+", "+filterYear+" is empty"
        }
        if(filterMonth && !filterCategory){
          return filterMonth+", "+filterYear+" is empty"
        }
      } 
  
  return (
    <div className={` select-none space-y-5 mt-5 md:mt-0 pb-10 border-b-2`}> 
            
      <DisplayBudget  name={customer.name} expenses={expensesDisplayWallet}/>
      
      <h3 className=" font-black text-center text-3xl mb-5"> {expensesFiltered.length ? title() : alternativeTitle()} </h3>
      <div className=" font-bold text-center text-lg mb-5 flex justify-around"> 
        {expensesFiltered.length > 0 && (
          <>
            <span>{'<--'}Swipe to delete</span>
            <span>Swipe to edit{'-->'}</span>
          </>
        )}
      </div>

      {
   expensesFiltered.map(payout => (
    <div key={payout.id}>
      <DisplayExpense 
      filterMonth={filterMonth} 
      filterCategory={filterCategory} 
      filterYear={filterYear} 
      payout={payout}
      customer={customer}
      />
    </div>
      ))
    }
    </div>
  )
}

CustomerContainer.propTypes = {
  customer: PropTypes.object.isRequired,
  filterCategory: PropTypes.string.isRequired,
  filterMonth: PropTypes.string.isRequired,
  filterYear: PropTypes.number.isRequired
  }

export default CustomerContainer