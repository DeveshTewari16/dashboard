import React from 'react';
import Charts from '../../Component/Charts/Charts.jsx'
import "./home.css";
import FeatureInfo from '../../Component/featureInfo/FeatureInfo'
import {userData} from '../../../src/userdata.js' ;
import WidgetsLarge from '../../Component/WidgetsLarge/WidgetsLarge';
import WidgetsSmall from '../../Component/WidgetsSmall/WidgetsSmall';
import  {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';

export default function Home() {    
    var tittle ="Analytics Section"
    console.log(userData);
    return (
       
        <div className="home">
             <div className="featureInfo"><FeatureInfo/></div>
                <div className="charts"><Charts  data={userData} tittle={tittle} grid dataKey="Users"/></div>
            <div className="homeWidgets">
                <div className="smallWidgets"><WidgetsSmall/></div>
                 <div className="largeWidgets"><WidgetsLarge/></div>
             </div>
        </div>
        );  
}
