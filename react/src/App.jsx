import { Customers } from "./components/Customers.jsx";
import { UpdateForm } from "./components/UpdateForm.jsx";
import customer_data from "./customers.json";
import { useState } from 'react';

function App() {
    // State variable to hold the list of customers, initialized with data from JSON file
    const [customers, setCustomers] = useState(customer_data);
    
    let updatedCustomers
    // State variable to hold the details of the currently selected customer for editing
    const [currentCustomer, setCurrentCustomer] = useState({ name: "", email: "", pass: "" });

    return (
        <> 
          <Customers 
              customers={customers}
              setCurrentCustomer={setCurrentCustomer} 
              current={currentCustomer} />
          <UpdateForm
              current={currentCustomer}
              addCustomer={addCustomer}
              deleteCustomer={deleteCustomer}
              cancelSelection={cancelSelection}
              updateCustomer={updateCustomer} />
        </>
    )

    function addCustomer(customer) {
        setCustomers([...customers, customer])
    }

    function deleteCustomer(customer) {
      updatedCustomers = customers.filter(c => c.id !== customer.id);
      console.log({ updatedCustomers, customer })
      setCustomers(updatedCustomers)
    }
  
    function updateCustomer (customer) {
        updatedCustomers = customers.map(c => c.id === customer.id ? { ...customer } : c);
        console.log({ updatedCustomers, customer })
        setCustomers(updatedCustomers)
    }
  
    function cancelSelection () {
        setCurrentCustomer(undefined);
    }
}

export default App;
