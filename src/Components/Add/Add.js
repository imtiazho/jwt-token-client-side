import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';


const Add = () => {
    const [user, loading, error] = useAuthState(auth);


    const handleAddGadget = (e) => {
        e.preventDefault();
        const gadget = {
            name: e.target.name.value,
            price: e.target.price.value
        }
        // console.log(gadget)
        fetch('http://localhost:5000/gadgetsAll', {
            method: 'POST', // or 'PUT'
            headers: {
                authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gadget),
        })

            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className='w-50 mx-auto'>
            <form onSubmit={handleAddGadget}>
                <input type="text" name='name' />
                <input type="text" name='price' />
                <input type="submit" value='Add' />
            </form>
        </div>
    );
};

export default Add;