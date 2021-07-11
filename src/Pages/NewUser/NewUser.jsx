import React from 'react';
import "./newuser.css";
import {useState,useEffect} from 'react';
import {
    Publish
  } from "@material-ui/icons";
  

export default function NewUser() {

  const[formData,setFormData]=useState({});

 
  const handleSubmit=(event)=>{
    console.log('Submit clicked'); 
    
  }
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
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Devesh Tewari"
                  className="userUpdateInput" 
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="devesh@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+91929292929"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="India"
                  className="userUpdateInput"
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
