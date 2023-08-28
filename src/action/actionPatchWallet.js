import { redirect } from "react-router-dom";
import { newExpense } from "../data/HTTPMethods";
import { generateId } from "../helpers";



export async function action({request}){
   
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
   
    const id = generateId()

    const obj = {
        "cost": Number(data.cost),
        "category": data.category,
        "date": new Date(data.date).getTime(),
        "id": id,
        "name": data.name
      }

   
    await newExpense(obj, data.customer)
    return redirect('/expense/planner')

    
}