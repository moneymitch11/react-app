import { Customer } from "./Customer"

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
                {customers.map(c => <Customer customer={c} key={c.id} setCurrentCustomer={setCurrentCustomer} currentCustomer={current} />)}
                </tbody>
              </table>
    </>  
  )
}
