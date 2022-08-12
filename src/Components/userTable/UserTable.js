import React from 'react';
import './usertable.scss'
import { userColumns, userRows } from '../../DataSource';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const UserTable = () => {
   const actionColumn=[{field: "action", headerName: "Action", width:200, renderCell:()=>{
    return(
        <div className="cellAction">
           <Link style={{textDecoration:"none"}} to='/users/id'> <div className="viewButton">View</div></Link>
            <div className="deleteButton">Delete</div>
        </div>
    )
   }}]


    return (
        <div className='userTable'>
            <div className="userTableTitle">
                Add new user
                <Link className='link' to='/users/new' style={{textDecoration:"none"}}>Add new</Link>
            </div>
            <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
      />
        </div>
    );
};

export default UserTable;