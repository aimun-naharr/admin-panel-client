import React, { useState } from 'react';
import Navbar from '../../Components/navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUpload'
import './new.scss'
const New = ({inputs, title}) => {
    const [file, setFile]=useState("")
    console.log(file)
    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file? URL.createObjectURL(file):"https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo="} alt="" />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formContainer">
                            <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className='icon'/></label>
                                <input  onChange={e=>setFile(e.target.files[0])} type="file" id='file' style={{display: "none"}}/>
                            </div>
                            {
                                inputs.map((input)=>(
                                    <div className="formInput" key={input.id}>
                                <label htmlFor="">{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder} />
                            </div>
                                ))
                            }
                            
                           
                            </div>
                            <button>Send</button>
                        </form>
                       
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default New;