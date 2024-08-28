import { UpdateForm } from "./UpdateForm"; // Importing the UpdateForm component for potentially handling updates

// Customer component to display an individual customer's information
export const Customer = ({ customer, setCurrentCustomer, currentCustomer }) => {

    // Handler function to set the current customer when a row is clicked
    const handleListClick = () => {
        setCurrentCustomer(customer); // Set the clicked customer as the current customer
        console.log(customer); // Log the clicked customer to the console (for debugging purposes)

        // The following code is commented out. It appears to be a previous attempt or future implementation
        // to conditionally render the UpdateForm component when a row is clicked.
        // If you need to show the UpdateForm when a customer is clicked, you can uncomment and adjust this part:
        /*
        return (
            <UpdateForm current={currentCustomer} />
        )
        */
    }

    return (
        // Render a table row (<tr>) for displaying customer details
        // On click, invoke handleListClick to update the current customer
        <tr onClick={handleListClick}>
            <td>{customer.name}</td> {/* Display the customer's name */}
            <td>{customer.email}</td> {/* Display the customer's email */}
            <td>{customer.pass}</td> {/* Display the customer's password */}
        </tr>
    )
}
