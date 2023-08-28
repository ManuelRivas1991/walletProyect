import PropTypes from 'prop-types';
import { Form } from "react-router-dom"

const EditCustomerForm = ({customer}) => {
    return (
        <Form 
        method="post"
        noValidate>
            <div className="mb-4">
                <label
                    className="font-bold"
                    htmlFor="name"
                >Name:</label>
                <input 
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 cursor-pointer rounded-md"
                    placeholder="Customer Name"
                    name="name"
                    defaultValue={customer?.name}
                />
            </div>

            <div className="mb-4">
                <label
                    className="font-bold"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50 cursor-pointer rounded-md" 
                    placeholder="Customer E-mail"
                    name="email"
                    defaultValue={customer?.email}
                />
            </div>

            <div className="mb-4">
                <label
                    className="font-bold"
                    htmlFor="tel"
                >Phone Number:</label>
                <input 
                    id="tel"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50 cursor-pointer rounded-md"
                    placeholder="Customer Phone Number"
                    name="tel"
                    defaultValue={customer?.tel}
                />
            </div>

            <input type="submit" 
          className=" mt-5 w-full bg-emerald-600 hover:bg-emerald-700 p-3 rounded-md uppercase font-bold text-white text-lg cursor-pointer"  
          value="Send"/>
        </Form>
    )
}

EditCustomerForm.propTypes = {
    customer: PropTypes.object.isRequired
  }

export default EditCustomerForm