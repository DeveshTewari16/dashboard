import React from 'react';
 import "./charts.css";
 import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Charts({tittle,data,dataKey,grid}) {
    
    return (
        <div className="displayCharts">
            <h3 className="chartTittle">{tittle} </h3>
            <ResponsiveContainer width="100%" aspect={5/1}>
            <LineChart data={data} width="100%" height="100%">     
               <XAxis dataKey="name" stroke="#5550bd" ></XAxis> 
               <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>            
               <Tooltip/>
             {  grid &&<CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                <Legend/>
            </LineChart></ResponsiveContainer>
        </div>
    )
}
