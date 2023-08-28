import { useNavigate, useActionData, useLoaderData } from "react-router-dom"
import Error from "../components/Error/Error"
import EditCustomerForm from "../components/Forms/EditCustomerForm"

const EditCustomer = () => {
  
  const errors = useActionData()
  const navigate = useNavigate()
  const customer =useLoaderData()
  
  return (
    <>
    <div className="flex justify-end">
      <button type="button" 
      className=" bg-emerald-600 hover:bg-emerald-700 text-white px-3  py-1 text-xl font-bold uppercase rounded-full"
      onClick={()=>navigate(-1)}>X</button>
    </div>
    <h1 className=" font-black text-4xl text-emerald-600">Edit Customer</h1>
    <p className="mt-3">Fill in all the fields to edit the customer.</p>
    

    <div className=" bg-white shadow rounded-md md:w-3/4 mx-auto px-4 py-10 mt-5">

      {errors?.length && errors.map((error, i)=> <Error key={i} > {error} </Error>)}
      <EditCustomerForm customer={customer} />
      
    </div>
  </>
  )
}

export default EditCustomer