import React from 'react';
import './usertable.scss'
import { userColumns, userRows } from '../../DataSource';
import { DataGrid} from '@mui/x-data-grid';

const UserTable = () => {
   const actionColumn=[{field: "action", headerName: "Action", width:200, renderCell:()=>{
    return(
        <div className="cellAction">
            <div className="viewButton">View</div>
            <div className="deleteButton">Delete</div>
        </div>
    )
   }}]


    return (
        <div className='userTable'>
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