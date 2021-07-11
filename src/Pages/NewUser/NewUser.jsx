import React from 'react';
import "./newuser.css";
import {useState,useEffect,Ax} from 'react';
import {
    Publish
  } from "@material-ui/icons";
import Axios from 'axios';
  

export default function NewUser() {

  const[userId,setuserId]=useState('');
  const[fullName,setfullName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[address,setAddress]=useState('');
 
  const handleSubmit=(event)=>{
    Axios.post("http://localhost:3001/api/insert",
    {userId:userId,
  fullName:fullName,
email:email,phone:phone,address:address}).then(()=>{ 
window.alert('Data Submitted');
})
    
};
    return (
        <div className="NewUser">
        <div className="userUpdate">
          <span className="userUpdateTitle">Create New User</span>
          <form className="userUpdateForm" onSubmit={handleSubmit} >
            <div className="userUpdateLeft" >
              <div className="userUpdateItem">
                <label>UserId</label>
                <input
                  type="text"
                  placeholder="1, 2, 212"
                  name="userid" onChange={(e)=>{
                    setuserId(e.target.value);
                  }}
                  className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Devesh Tewari"
                  className="userUpdateInput" 
                  name="fullname" onChange={(e)=>{
                    setfullName(e.target.value);
                  }}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="devesh@gmail.com"
                  className="userUpdateInput"
                  name="email"  onChange={(e)=>{
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91929292929"
                  className="userUpdateInput"
                  name="phone"
                  onChange={(e)=>{
                    setPhone(e.target.value);
                  }}
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="India"
                  className="userUpdateInput"
                  name="address"  onChange={(e)=>{
                    setAddress(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                
               Add Profile Image <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Submit</button>
            </div>
          </form>
        </div>
           
        </div>
    )
}
