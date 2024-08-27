/* eslint-disable react/prop-types */

export const Customer = ({ customer, setCurrentCustomer, currentCustomer }) => {

    const handleListClick = () => {
        setCurrentCustomer(customer)
        console.log(customer)
        /* return (
            <UpdateForm current={currentCustomer}/>
        ) */
    }


    return (
        <tr onClick={handleListClick} className={(customer === currentCustomer) ? "checked" : ""}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.pass}</td>
        </tr>
    )
}