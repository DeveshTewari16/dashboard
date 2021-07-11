import  React from 'react';
import "./password.css";


export default function Password() {
    return (
        <div className="password">
        <div className="userUpdate">
          <span className="userUpdateTitle">Password Management</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Enter Old Password</label>
                <input
                  type="text"
                  className="userUpdateInput"
                />
              </div>
              
              <div className="userUpdateItem">
                <label>Enter New Password</label>
                <input
                  type="password"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="userUpdateInput"
                />
              </div>
              <button className="userUpdateButton">Submit</button>
            </div>
            
          </form>

        </div>
           
        </div>

    )
};