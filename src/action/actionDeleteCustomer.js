import { redirect } from "react-router-dom";
import { deleteCustomer } from "../data/HTTPMethods";



export async function action({params}){

    await deleteCustomer(params.id)
    return redirect('/')


}