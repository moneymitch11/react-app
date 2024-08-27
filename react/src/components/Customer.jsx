import { UpdateForm } from "./UpdateForm"

export const Customer = ( {customer, setCurrentCustomer, currentCustomer} ) => {

    const handleListClick = () =>{
        setCurrentCustomer(customer)
        console.log(customer)
        /* return (
            <UpdateForm current={currentCustomer}/>
        ) */
    }

    
    return (
        //ASK RAP ABOUT QUESTION-MARK
        <tr onClick={handleListClick}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.pass}</td>
        </tr>
    )
}