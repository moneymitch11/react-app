/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export const UpdateForm = ({ current, addCustomer, deleteCustomer, updateCustomer, cancelSelection }) => {

    const [formState, setFormState] = useState({ ...current });

    useEffect(() => {
        setFormState({ ...current });
    }, [current])

    const ondeleteclick = () => {
       deleteCustomer(formState)
       setFormState("");
    }

    const onsaveclick = () => {
        updateCustomer(formState)
    }

    const oncancelclick = () => {
        setFormState("");
        cancelSelection()
    }

    const onAddClick = () => {
        if (formState.name === '' || formState.email === '' || formState.pass === ''){
            alert("Please enter valid input")
        }else{
            addCustomer(formState);
        }
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
            <button onClick={ondeleteclick}>Delete</button>
            <button onClick={onsaveclick}>Save</button>
            <button onClick={oncancelclick}>Cancel</button>
        </>
    )

}