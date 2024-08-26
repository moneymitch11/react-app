import { Customer } from "./Customer"
import customers from "../customers.json"


export function Customers () {

    let counter = 1;
    customers.map(cust => ({...cust, id: counter++}))
    return (
      customers.map(c => <Customer customer={c} key={c.id}/>)
    )
}
