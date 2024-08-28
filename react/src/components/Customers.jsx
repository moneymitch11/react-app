import { Customer } from "./Customer"; // Importing the Customer component for rendering individual customer details


export const Customers = ( {customers, setCurrentCustomer, current } ) => {

    return (
      customers.map(c => <Customer customer={c} key={c.id} setCurrentCustomer={setCurrentCustomer} currentCustomer={current}/>)
    )
}

