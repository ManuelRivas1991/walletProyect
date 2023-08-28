import { redirect } from "react-router-dom";
import { postInfo } from "../data/HTTPMethods";
import { generateId } from "../helpers";


export async function action({request}){

    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    const email = formData.get('email')
    
    //Validation
    const errors = []
    if(Object.values(data).includes('')){
        errors.push('All inputs are required')
    }

    const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if (!regex.test(email)) {
    errors.push('The email is not valid')
  }
    // Return data if there are errors
    if(Object.keys(errors).length){
        return errors
    }

    data.budget=0
    data.expenses=[]
    data.id= generateId()


    await postInfo(data)
    return redirect('/')

    
}