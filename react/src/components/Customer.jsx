/* eslint-disable react/prop-types */

// Customer component to display an individual customer's information
export const Customer = ({ customer, setCurrentCustomer, currentCustomer }) => {

    // Handler function to set the current customer when a row is clicked
    const handleListClick = () => {
        setCurrentCustomer(customer)
    }

    return (
       <tr onClick={handleListClick}>
            <td>{customer.name}</td> {/* Display the customer's name */}
            <td>{customer.email}</td> {/* Display the customer's email */}
            <td>{customer.pass}</td> {/* Display the customer's password */}
        </tr>
    )
}
