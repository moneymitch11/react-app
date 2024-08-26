import { useState } from "react"

function fetchCustomers () {
    const newPeople = await fetch('../src/customers.json')
      .then(res => res.json())
      .then(ppl => ppl.map(p => ({ ...p, id: counter++ })))
    setPeople(newPeople);
} 
export const Customers = ({Customers}) => {
    const [customers,setCustomers] = useState([])

    customers.map(c =>{<Customer customer = {c} key = {c.id}/>}) 

}
