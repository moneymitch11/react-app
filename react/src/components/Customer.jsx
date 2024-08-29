/* eslint-disable react/prop-types */

// Customer component to display an individual customer's information
export const Customer = ({ customer, setCurrentCustomer, currentCustomer }) => {

    // Handler function to set the current customer when a row is clicked
    const handleListClick = () => {
        setCurrentCustomer(customer)
    }

    return (
        <tr onClick={handleListClick} className={(customer === currentCustomer) ? "checked" : ""}>
            <td>{customer.name}</td>
            <td>{customer.email}</td>
            <td>{customer.pass}</td>
        </tr>
    )
}
