import { useNavigate, useActionData } from "react-router-dom"
import Error from "../components/Error/Error"
import NewCustomerForm from "../components/Forms/NewCustomerForm"


const NewCustomers = () => {


  const errors = useActionData()
  const navigate = useNavigate()
  
  return (
    <>
      <div className="flex justify-end">
        <button type="button" 
        className=" bg-emerald-600 hover:bg-emerald-700 text-white px-3  py-1 text-xl font-bold uppercase rounded-full"
        onClick={()=>navigate(-1)}>X</button>
      </div>
      <h1 className=" font-black text-4xl text-emerald-600">New Customer</h1>
      <p className="mt-3">Fill in all the fields to register a new customer</p>
      

      <div className=" bg-white shadow rounded-md md:w-3/4 mx-auto px-4 py-10 mt-5">

        {errors?.length && errors.map((error, i)=> <Error key={i} > {error} </Error>)}
        <NewCustomerForm/>
        
      </div>
    </>
  )
}

export default NewCustomers