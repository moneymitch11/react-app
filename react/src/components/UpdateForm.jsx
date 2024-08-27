import {useState, useEffect} from 'react';

export const UpdateForm = ( {current, setOption, customers, setCustomers} ) => {
    
    let updatedCustomers

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        setName(current?.name??"")
        setEmail(current?.email??"")
        setPass(current?.pass??"")
    }, [current])
    const ondeleteclick = (customer) =>{
        updatedCustomers = customers.filter(c => c !== customer);
        console.log({updatedCustomers,customer})
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
            <label>Name: </label><input type="text" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
            <label>Email: </label><input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div>
            <label>Pass: </label><input type="password" value={pass} onChange={e => setPass(e.target.value)}/>
        </div>
      </form>
      <button onClick={() => ondeleteclick(current)}>Delete</button>
      <button onClick={onsaveclick}>Save</button>
      <button onClick={oncancelclick}>Cancel</button>
        </>
    )

}