import { redirect } from "react-router-dom";
import { editExpense } from "../data/HTTPMethods";




export async function action({request,params}){
    
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    
    //Validation
    const errors = []
    
    if(Object.values(data).includes('')){
        errors.push('All inputs are required')
    }

    // Return data if there are errors
    if(Object.keys(errors).length){
        return redirect('/expense/planner')
    }

    const date = new Date(data.date).getTime()

    const obj = {
        "cost": Number(data.cost),
        "category": data.category,
        "date": date,
        "id": params.id,
        "name": data.name
      }
   

    await editExpense(obj, params.customer)
    return redirect('/expense/planner')

    
}