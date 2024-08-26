import { useState } from "react";
import { Customer } from "./Customer"
import customers from "../customers.json"


export function Customers () {

    return (
      customers.map(c => <Customer customer={c}/>)
    )
}
