import { Customers } from "./components/Customers.jsx"
import { UpdateForm } from "./components/UpdateForm.jsx"
import customer_data from "./customers.json"
import { useState } from 'react';

function App() {
  
    const [customers,setCustomers] = useState([])
    const [option, setOption] = useState({name:"",emal:"",pass:""})
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
            <Customers customers={customer_data} setOption={setOption} current={option}/>  
        </tbody>
    </table>
    <UpdateForm current={option} setOption={setOption} customers={customer_data} setCustomers={setCustomers}/>
  </>
  )
}

export default App
