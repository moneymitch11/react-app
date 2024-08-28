import { useState, useEffect } from 'react';

// UpdateForm component for managing updates to customer information
export const UpdateForm = ({ current, setOption, customers, setCustomers }) => {
    
    let updatedCustomers;

    // State to manage the form's input values, initialized with the current customer data
    const [formState, setFormState] = useState({ ...current });

    // Update formState whenever the current customer changes
    useEffect(() => {
        setFormState({ ...current });
    }, [current]);

    // Handler for the Delete button click
    const ondeleteclick = (customer) => {
        // Filter out the customer to delete from the list
        updatedCustomers = customers.filter(c => c !== customer);
        console.log({ updatedCustomers, customer });
        // Update the customer list state
        setCustomers(updatedCustomers);
    };

    // Handler for the Save button click
    const onsaveclick = () => {
        // Update the customer with the matching id from formState
        updatedCustomers = customers.map(c => c.id === formState.id ? { ...formState } : c);
        console.log({ updatedCustomers });
        // Update the customer list state
        setCustomers(updatedCustomers);
    };

    // Handler for the Cancel button click
    const oncancelclick = () => {
        // Reset the form state
        setFormState({ name: "", email: "", pass: "" });
    };

    // Handler for the Add button click
    const onAddClick = () => {
        // Add new or updated customer information to the list
        updatedCustomers = customers.map(c => ({ ...c, ...formState }));
        console.log(updatedCustomers);
        // Update the customer list state
        setCustomers(updatedCustomers);
    };

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
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name="name" 
                        value={formState.name || ''} 
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formState.email || ''} 
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Pass: </label>
                    <input 
                        type="password" 
                        name="pass" 
                        value={formState.pass || ''} 
                        onChange={handleInputChange}
                    />
                </div>
            </form>
            <button onClick={onAddClick}>Add</button>
            <button onClick={() => ondeleteclick(current)}>Delete</button>
            <button onClick={onsaveclick}>Save</button>
            <button onClick={oncancelclick}>Cancel</button>
        </>
    );
}
