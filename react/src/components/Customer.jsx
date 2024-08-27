import { UpdateForm } from "./UpdateForm"

export const Customer = ( {customer, setOption, option} ) => {

    const handleListClick = () =>{
        setOption(customer)
        console.log(option)
        return (
            <UpdateForm current={option}/>
        )
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