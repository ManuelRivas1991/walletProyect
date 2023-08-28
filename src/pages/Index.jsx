import { useLoaderData } from "react-router-dom";
import TableContainer from "../components/tableContainer/tableContainer";

const Index = () => {

  const info = useLoaderData()
  
  return (
    <>
      <h1 className=" font-black text-4xl text-emerald-600">CRM - Customers</h1>
      <p className="mt-3">Manage your customers</p>


     {info.length ? (
      
          <TableContainer info={info} />
       
     ):(
      <p className=" text-center mt-10S">No Customers</p>
     )}


    </>
  )
}

export default Index