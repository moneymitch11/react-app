import {useState, useEffect} from 'react';

export const UpdateForm = ( {current, setOption, customers, setCustomers} ) => {
    
    let updatedCustomers
    const [formState, setFormState] = useState({ ...current });

    // Update formState whenever the current customer changes
    useEffect(() => {
        setFormState({ ...current });
    }, [current]);

    const ondeleteclick = (customer) =>{
        updatedCustomers = customers.filter(c => c !== customer);
        console.log({updatedCustomers,customer})
        setCustomers(updatedCustomers)
    } 
    
    const onsaveclick = (customer) =>{

        updatedCustomers = customers.map(c => c.id === formState.id ? { ...formState } : c);
        console.log({updatedCustomers,customer})
        setCustomers(updatedCustomers)
    } 
    
    const oncancelclick = () =>{
        setFormState("");
    }

    const onAddClick = () => {
        updatedCustomers = customers.map(c => ( {...c, ...formState}));
        console.log(updatedCustomers);
        setCustomers(updatedCustomers);
    }

    // Handler for form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update the formState with the new input value
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
        <h2>Update</h2>
      <form action="update">
        <div>
            <label>Name: </label><input type="text" name="name" value={formState.name || ''} onChange={handleInputChange}/>
        </div>
        <div>
            <label>Email: </label><input type="email" name="email" value={formState.email || ''} onChange={handleInputChange}/>
        </div>
        <div>
            <label>Pass: </label><input type="password" name="pass" value={formState.pass || ''} onChange={handleInputChange}/>
        </div>
      </form>
      <button onClick={onAddClick}>Add</button>
      <button onClick={() => ondeleteclick(current)}>Delete</button>
      <button onClick={onsaveclick}>Save</button>
      <button onClick={oncancelclick}>Cancel</button>
        </>
    );
}
