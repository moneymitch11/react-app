import { useState, useEffect } from 'react';

export const UpdateForm = ({ current, addCustomer, deleteCustomer, updateCustomer, cancelSelection }) => {

    // State to manage the form's input values, initialized with the current customer data
    const [formState, setFormState] = useState({ ...current });

    // Update formState whenever the current customer changes
    useEffect(() => {
        setFormState({ ...current });
    }, [current]);

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
                <div>
                    <button onClick={onAddClick}>Add</button>
                    <button onClick={ondeleteclick}>Delete</button>
                    <button onClick={onsaveclick}>Save</button>
                    <button onClick={oncancelclick}>Cancel</button>
                </div>
            </form>
            
        </>
    );
}
