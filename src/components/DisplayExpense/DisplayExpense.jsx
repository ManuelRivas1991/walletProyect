import PropTypes from 'prop-types';
import { dateFormat, formatAmount } from '../../helpers';
import expensesIcon from "../../img/expenses_icon.svg";
import foodIcon from "../../img/food_icon.svg";
import healthIcon from "../../img/health_icon.svg";
import houseIcon from "../../img/house_icon.svg";
import leisureIcon from "../../img/leisure_icon.svg";
import subscriptionsIcon from "../../img/subscriptions_icon.svg";
import savingsIcon from "../../img/savings_icon.svg";
import newExpense from "../../img/new_expense.svg";


import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from "react-swipeable-list";

import "react-swipeable-list/dist/styles.css"
import { useState } from 'react';
import ModalDeleteExpense from '../Forms/ModalDeleteExpense';
import ModalEditExpense from '../Forms/ModalEditExpense';

const dictionaryIcons = {
  Expenses : expensesIcon,
  Food: foodIcon,
  Health: healthIcon,
  House: houseIcon,
  Leisure:leisureIcon,
  Subscriptions: subscriptionsIcon,
  Savings:savingsIcon,
  Incomes:newExpense
  
}


const DisplayExpense = ({payout, customer}) => {

  const [modalDelete, setModalDelete] = useState(false)
  const [modalEdit, setModalEdit] = useState(false)

const leadingActions = () =>(
  <LeadingActions>
    <SwipeAction 
    onClick={()=>setModalEdit(true)}
    className=' bg-emerald-500'
    >
      <span className=' text-white text-3xl m-auto text-center'>Edit</span>
    </SwipeAction>
  </LeadingActions>
)
const trailingActions = () =>(
  <TrailingActions>
    
    <SwipeAction 
    onClick={()=>setModalDelete(true)}
    className=' bg-red-500'
    >
      <span className=' text-white text-3xl m-auto text-center'>Delete</span>
    </SwipeAction>
  </TrailingActions>
)


  return (
  <>  
      <SwipeableList
      className='shadow-md rounded-md bg-white'
      >
        <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
        >
          <div className='p-3 hover:cursor-pointer text-lg grid grid-cols-2 md:grid-cols-4 text-center space-y-2 w-full' > 
            <img src={dictionaryIcons[payout.category]} alt="Icon Payout" className='h-10 mx-auto'/>
            <p className=" font-normal"> {dateFormat(payout.date)} </p>
            <p className=" font-semibold "> {payout.name} </p>
            <p className=" text-xl font-black"> {formatAmount(payout.cost)} </p>
          </div>
        </SwipeableListItem>
      </SwipeableList>

      {modalDelete &&
          <ModalDeleteExpense 
          customer={customer.id} 
          id={payout.id} 
          setModalDelete={setModalDelete} 
          />
      }
       {modalEdit &&
          <ModalEditExpense 
          customer={customer} 
          payout={payout}
          modal={modalEdit}
          setModal={setModalEdit} 
          />
      }    

  </>
  )
}

DisplayExpense.propTypes = {
  payout: PropTypes.object.isRequired,
  customer: PropTypes.object.isRequired
  }


export default DisplayExpense