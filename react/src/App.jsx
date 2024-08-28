import { Customers } from "./components/Customers.jsx";
import { UpdateForm } from "./components/UpdateForm.jsx";
import customer_data from "./customers.json";
import { useState } from 'react';

function App() {
    // State variable to hold the list of customers, initialized with data from JSON file
    const [customers, setCustomers] = useState(customer_data);
    
    // State variable to hold the details of the currently selected customer for editing
    const [currentCustomer, setCurrentCustomer] = useState({ name: "", email: "", pass: "" });

    return (
        <>
            <h1>Customers List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pass</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Pass the list of customers and the function to set the current customer to the Customers component */}
                    <Customers 
                        customers={customers} 
                        setCurrentCustomer={setCurrentCustomer} 
                        current={currentCustomer} 
                    />
                </tbody>
            </table>
            
            {/* Pass the current customer, function to set options (for handling cancel actions), 
                list of customers, and the function to update the list to the UpdateForm component */}
            <UpdateForm 
                current={currentCustomer} 
                setOption={setCurrentCustomer} 
                customers={customers} 
                setCustomers={setCustomers} 
            />
        </>
    );
}

export default App;
