import React from "react";
import Chart from "../../Components/Chart/Chart";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DataTable from "../../Components/Table/DataTable";

import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="leftContainer">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsupI89wVbXLRzxaiHG_rezqk3FrqDeMmog&usqp=CAU" alt="" className="itemImg" />
                <div className="details">
                    <h1 className="itemTitle">Jane Doe</h1>
                    <div className="detailItem">
                        <span className="itemKey">Email:</span>
                        <span className="itemValue">Jane@doe.com</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Phone:</span>
                        <span className="itemValue">97855-8586</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Address:</span>
                        <span className="itemValue">Elton st. 234 Garden YD New york</span>
                    </div>
                    <div className="detailItem">
                        <span className="itemKey">Country:</span>
                        <span className="itemValue">USA</span>
                    </div>
                </div>
            </div>
            </div>
          </div>
          <div className="right">
            <Chart title="User spending (Last six months)"/>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <DataTable/>
        </div>
      </div>
    </div>
  );
};

export default Single;
