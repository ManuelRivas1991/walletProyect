import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalDeleteCustomer from '../Forms/ModalDeleteCustomer';

const Row = ({customer}) => {

  const navigate = useNavigate()

  const {name, email, tel, id} = customer

  const [modal, setModal] = useState(false)

 
  return (
        <>
        <div className={`p-6 space-y-2 grid grid-cols-1 md:grid-cols-2 border bg-white shadow rounded-md `} >
          
          <p className=' text-2xl text-gray-700 font-bold'> {name} </p>
          <p> <span className=' text-gray-700 uppercase font-bold'> Email: </span> {email} </p>
          <p> <span className=' text-gray-700 uppercase font-bold'> Tel: </span> {tel} </p>

          <div className=' space-x-10 flex justify-center'>
            <button type="button" 
            className=' text-emerald-600 hover:text-emerald-700 uppercase font-bold'
            onClick={()=>navigate(`/customer/${id}/edit`)}
            >Edit</button>

        
            <button type="button" 
            className=' text-red-500 hover:text-red-600 uppercase font-bold'
            onClick={()=>setModal(true)}
            >
              Delete
            </button>
          
          </div>
         
        </div>

        {modal &&
              <ModalDeleteCustomer id={id} name={name} setModal={setModal} />
             }   
       
        </>
    
  )
}

Row.propTypes = {
    customer: PropTypes.object.isRequired
    
  }

export default Row