/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export const UpdateForm = ({ current, setCurrentCustomer, customers, setCustomers, addANewCustomer }) => {

    let updatedCustomers
    const [formState, setFormState] = useState({ ...current });

    useEffect(() => {
        setFormState({ ...current });
    }, [current])

    const ondeleteclick = (customer) => {
        updatedCustomers = customers.filter(c => c !== customer);
        console.log({ updatedCustomers, customer })
        setCustomers(updatedCustomers)
    }

    const onsaveclick = (customer) => {
        updatedCustomers = customers.map(c => c.id === formState.id ? { ...formState } : c);
        console.log({ updatedCustomers, customer })
        setCustomers(updatedCustomers)
    }

    const oncancelclick = () => {
        setFormState("");
        setCurrentCustomer(undefined);
    }

    const onAddClick = () => {
        addANewCustomer(formState);
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
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
                    <label>Name: </label><input type="text" name="name" value={formState.name || ''} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Email: </label><input type="email" name="email" value={formState.email || ''} onChange={handleInputChange} />
                </div>
                <div>
                    <label>Pass: </label><input type="password" name="pass" value={formState.pass || ''} onChange={handleInputChange} />
                </div>
            </form>
            <button onClick={onAddClick}>Add</button>
            <button onClick={() => ondeleteclick(current)}>Delete</button>
            <button onClick={onsaveclick}>Save</button>
            <button onClick={oncancelclick}>Cancel</button>
        </>
    )

}