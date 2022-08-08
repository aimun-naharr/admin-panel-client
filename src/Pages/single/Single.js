import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './single.scss'

const Single = () => {
    return (
        <div className='single'>
            <Sidebar/>
            <div className="singleContainer">
            <Navbar/>
            </div>
        </div>
    );
};

export default Single;