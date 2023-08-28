import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';

const ModalDeleteExpense = ({customer,id, setModalDelete}) => {
  const [result, setResult] = useState(false)
  const [opacity, setOpacity] = useState('opacity-0')

  
  useEffect(()=>{

   
        setOpacity('opacity-95')
   
},[])

  return (
    <Form
    className={`fixed  z-50 bg-black/95 text-white top-0 left-0 right-0 bottom-0  flex justify-center items-center flex-col transition-all duration-300 ease-in  ${opacity}`}
    method='post' 
    action={`/expense/planner/${customer}/delete/${id}`}
    onSubmit={(e)=>{
      setModalDelete(false)
      if(!result){
        e.preventDefault()
      }
    }}
    >  
      
        <div className="w-4/5 md:w-1/3 text-3xl">
            <h2 className='border-b-4 border-emerald-500 font-bold text-center'>Do you want to delete this expense?</h2>

            <div className="flex  flex-col my">
               <div className="flex justify-center text-2xl my-5">
                <label htmlFor="checkbox">Check the box</label>
                <input
                className="appearance-none form-checkbox mx-10 h-6 w-6 my-auto rounded-md border-2 border-gray-500 cursor-pointer checked:bg-gray-500"
                type="checkbox" 
                name="checkbox"
                id="checkbox"  
                value={result}
                 onClick={(e)=>{
                    setResult(e.target.checked)
                }}/>
              </div>

                <button 
                type="submit" 
                className=' w-1/2 mx-auto border-4 border-emerald-500 rounded-md p-4 hover:border-emerald-500/5 hover:bg-emerald-500/50 cursor-pointer'
                >{result ? 'Accept' : 'Cancel'} </button>

            </div>
        </div>
    
    </Form>
  )
}

ModalDeleteExpense.propTypes = {
    customer: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    setModalDelete: PropTypes.func.isRequired,
    }

export default ModalDeleteExpense