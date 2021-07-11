import React from 'react'
import "./Sidebar.css"
import {LineStyle,Timeline,TrendingUp,Accessibility,AddBox,AccountTree,Group,Person,AttachMoney
,Assessment,Forum,Feedback,VpnKey} from '@material-ui/icons/';
import {NavLink,Router,Link} from 'react-router-dom';

export default function Sidebar() {
   function handleClickEvent(event){
        console.log(event.target.name);
    }

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
               <div className="sidebarMenu">
                    <h3 className="sideTittle">Dashboard</h3>
                        <ul className="sidebarList" >
                            <li className="itemlistName" ><LineStyle name="home" className="sidebarIcon" /><a href="/home">Home</a></li>
                            <li className="itemlistName"><Timeline className="sidebarIcon"/><Link to="/analytics">Anlaytics</Link></li>
                            <li className="itemlistName"><TrendingUp className="sidebarIcon"/>< a href="/users">User details</a></li>
            
                            </ul>
                    <h3 className="sideTittle">Quick Menu</h3>
                        <ul className="sidebarList">
                            <li className="itemlistName" ><Person className="sidebarIcon"/><Link to="/newuser">Users</Link> </li>
                            <li className="itemlistName"><AddBox className="sidebarIcon"/><Link to="/products">Products</Link></li>
                            <li className="itemlistName"><AttachMoney className="sidebarIcon"/><Link to="/history">Transaction History</Link></li>
                            <li className="itemlistName"><Assessment className="sidebarIcon"/><Link to="/reports">Reports</Link></li>
                        </ul>
                    <h3 className="sideTittle">Admin</h3>
                        <ul className="sidebarList">
                            <li className="itemlistName"><AccountTree className="sidebarIcon"/>Access</li>
                            <li className="itemlistName"><Group className="sidebarIcon"/>Group</li>
                            <li className="itemlistName"><Forum className="sidebarIcon"/>Messages</li>
                            <li className="itemlistName"><Feedback className="sidebarIcon"/>Feedback</li>
                            
                        </ul>
                    <h3 className="sideTittle">Security</h3>
                        <ul className="sidebarList">
                           <Link to="/passwordManagement"> <li className="itemlistName"><VpnKey className="sidebarIcon"/> Password Management</li></Link>                             <li className="itemlistName"><AccountTree className="sidebarIcon"/>Access</li>
                        </ul>

                </div>
            </div>
        </div>
    
    )
}
