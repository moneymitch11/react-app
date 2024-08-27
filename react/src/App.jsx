import { Customers } from "./components/Customers.jsx"
import { UpdateForm } from "./components/UpdateForm.jsx"
import customer_data from "./customers.json"
import { useState } from 'react';

function App() {

    const [customers, setCustomers] = useState(customer_data)
    const [currentCustomer, setCurrentCustomer] = useState({ name: "", emal: "", pass: "" })
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
                    <Customers customers={customers} setCurrentCustomer={setCurrentCustomer} current={currentCustomer} />
                </tbody>
            </table>
            <UpdateForm
                current={currentCustomer}
                customers={customers}
                setCustomers={setCustomers}
                setCurrentCustomer={setCurrentCustomer}
                addANewCustomer={addANewCustomer} />
        </>
    )

    function addANewCustomer(customer) {
        setCustomers([...customers, customer])
    }
}

export default App
