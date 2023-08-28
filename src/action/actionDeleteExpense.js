import { redirect } from "react-router-dom";
import { deleteExpense } from "../data/HTTPMethods";



export async function action({request, params}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)

    if(Object.values(data).includes('true')){
        await deleteExpense(params.customer, params.id)
        return redirect('/expense/planner')
    }

        return redirect('/expense/planner')
}