import React from 'react';
import { useEffect, useState } from 'react';


const Home = () => {

    const [gadgets, setGadgets] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/gadgetsAll')
            .then(res => res.json())
            .then(data => setGadgets(data))
    }, [])
    return (
        <div className='w-100 mx-auto'>
            <h1>All gadgets: {gadgets.length}</h1>
        </div>
    );
};

export default Home;