import React from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import UserTable from '../../Components/userTable/UserTable';
import './list.scss'
const List = () => {
    return (
        <div className='list'>
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <UserTable/>
            </div>
        </div>
    );
};

export default List;