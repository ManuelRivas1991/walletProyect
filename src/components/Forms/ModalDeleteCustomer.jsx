import { useState } from "react"
import { Form } from "react-router-dom"
import PropTypes from 'prop-types';

const ModalDeleteCustomer = ({id, setModal, name}) => {

  const [result, setResult] = useState(false)

  return (
    <Form
    method='post' 
    action={`/customer/${id}/delete`}
    onSubmit={(e)=>{
      setModal(false)
      if(!result){
        e.preventDefault()
      }
    }}
    >
      <div className="fixed z-50 bg-black/95 text-white top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col">
      
      <div className="w-4/5 md:w-1/3 text-3xl">
          <h2 className='border-b-4 border-emerald-500 font-bold text-center'>Do you want to delete {name}?</h2>

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
      </div>

    </Form>
  )
}

ModalDeleteCustomer.propTypes = {
  setModal: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
}

export default ModalDeleteCustomer