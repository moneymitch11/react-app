import { Customer } from "./Customer"


export const Customers = ( {customers, setOption, current } ) => {

    let counter = 1;
    customers = customers.map(cust => ({...cust, id: counter++}))
    return (
      customers.map(c => <Customer customer={c} key={c.id} setOption={setOption} option={current}/>)
    )
}
