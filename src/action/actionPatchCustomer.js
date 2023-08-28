import { redirect } from "react-router-dom";
import { editCustomer } from "../data/HTTPMethods";


export async function action({request, params}){
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')
  
    const errors = []
    if(Object.values(data).includes('')){
        errors.push('All inputs are required')
    }

    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if (!regex.test(email)) {
    errors.push('The email is not valid')
  }
   
    if(Object.keys(errors).length){
        return errors
    }

    await editCustomer(data, params.id)
    return redirect('/')
}