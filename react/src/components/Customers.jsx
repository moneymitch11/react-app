import { Customer } from "./Customer"; // Importing the Customer component for rendering individual customer details

// Customers component to display a list of customer items
export const Customers = ({ customers, setCurrentCustomer, current }) => {
    return (
        // Map over the array of customers and render a Customer component for each
        customers.map(c => (
            <Customer 
                customer={c} 
                key={c.id} // Unique key for each Customer component to help React identify which items have changed
                setCurrentCustomer={setCurrentCustomer} // Function to set the current customer being edited
                currentCustomer={current} // The current customer object to indicate which customer is currently selected
            />
        ))
    );
}

