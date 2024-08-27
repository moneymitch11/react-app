import { Customer } from "./Customer"

export const Customers = ({ customers, setCurrentCustomer, current }) => {
  return (
    customers.map(c => <Customer customer={c} key={c.id} setCurrentCustomer={setCurrentCustomer} currentCustomer={current} />)
  )
}
