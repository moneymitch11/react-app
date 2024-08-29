import { Customer } from "./Customer"; // Importing the Customer component for rendering individual customer details

// Customers component to display a list of customer items
export const Customers = ({ customers, setCurrentCustomer, current }) => {
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
                {customers.map(c => <Customer 
                                        customer={c} 
                                        key={c.id} 
                                        setCurrentCustomer={setCurrentCustomer} 
                                        currentCustomer={current}/>)}
                </tbody>
              </table>
    </>  
  )
}


