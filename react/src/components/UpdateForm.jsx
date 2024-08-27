import {useState} from 'react';
export const UpdateForm = ( {current, setOption, customers, setCustomers} ) => {
    
    let updatedCustomers
    const ondeleteclick = (id) =>{
        updatedCustomers = customers.filter(c => c.id !== +id);
        console.log(updatedCustomers)
        setCustomers(updatedCustomers)
    } 
    
    const onsaveclick = () =>{
        return console.log("In onsaveclick")
    } 
    
    const oncancelclick = () =>{
        return console.log("In oncancelclic")
    } 
    
    return(
        <>
        <h2>Update</h2>
      <form action="update">
        <div>
            <label>Name: </label><input type="name" value={current.name}/>
        </div>
        <div>
            <label>Email: </label><input type="email" value={current.email}/>
        </div>
        <div>
            <label>Pass: </label><input type="password" value={current.pass}/>
        </div>
      </form>
      <button onClick={ondeleteclick}>Delete</button>
      <button onClick={onsaveclick}>Save</button>
      <button onClick={oncancelclick}>Cancel</button>
        </>
    )

}