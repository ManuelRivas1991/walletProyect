import { getCustomer } from "../data/HTTPMethods"


export async function loader({params}){

    const customer = await getCustomer(params.id)

    if(!Object.values(customer).length){
        throw new Response('',{
            status: 404,
            statusText: 'The customer was not found'
        })
    }

    return customer

}