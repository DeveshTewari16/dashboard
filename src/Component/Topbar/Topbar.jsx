import React from 'react';
import "./topbar.css";

import {NotificationsNone,Language,Settings} from '@material-ui/icons/';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                    <div className="topLeft">
                        <span className="logo"></span>
                        <img src="https://www.socialbakers.com/website/storage/2020/01/OG-BLOG_data.jpg" alt="Project Image" className="logoImage"/>
                    </div>
                    <div className="topRight">
                        <div className="iconsContainer">
                            <NotificationsNone/>
                             <span className="topiconBag">2</span>
                        </div>
                        <div className="iconsContainer">
                        <span className="topiconBag">3</span>
                            <Language/>
                        </div>
                        <div className="iconsContainer">
                            <Settings/>
                        </div>
                        <img src="https://images.unsplash.com/photo-1523251343397-9225e4cb6319?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Profile Image" className="profileImage"></img>
                    </div>
                </div>
        </div>
    )
}
