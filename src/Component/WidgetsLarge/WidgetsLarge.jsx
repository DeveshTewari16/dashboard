import React from 'react'
import './widgetslarge.css'


export default function WidgetsLarge() {

    const Button=({type})=>{
        return <button className={"widgetlgButton"+ type }>{type}</button>
    }
    return (
        <div className="large">
          <h3 className="lgwidgetTittle">Latest Transactions</h3>
                
                <table className="lgwidgetTable">
               <tr className="Row">
                <th className="lgwidgetCustomer">Customer</th>
                <th className="lgwidgetDate">Date</th>
                <th className="lgwidgetAmount">Amount</th>
                <th className="lgwidgetStatus">Status</th>
               
                </tr>
                <tr className="Data">
                <td className="lgwidgetCustomer">Devesh</td>
                <td className="lgwidgetDate">21st-JUN</td>
                <td className="lgwidgetAmount">500</td>
                <Button  type="Approved"></Button> 
               
                </tr>
                <tr className="Data">
                <td className="lgwidgetCustomer">NC Tewari</td>
                <td className="lgwidgetDate">10th-JUN</td>
                <td className="lgwidgetAmount">1500</td>
               <Button  type="Approved"></Button> 
               
                </tr>

            
                <tr className="Data">
                <td className="lgwidgetCustomer">Akshat Raj</td>
                <td className="lgwidgetDate">18th-JUN</td>
                <td className="lgwidgetAmount">100</td>
               <Button  type="Rejected"></Button> 
               
                </tr>
                
                <tr className="Data">
                <td className="lgwidgetCustomer">Shantanu Raj</td>
                <td className="lgwidgetDate">18th-JUL</td>
                <td className="lgwidgetAmount">1000</td>
               <Button  type="Pending"></Button> 
               
                </tr>

                 <tr className="Data">
                <td className="lgwidgetCustomer">Suman</td>
                <td className="lgwidgetDate">21st-JUN</td>
                <td className="lgwidgetAmount">100</td>
                <Button  type="Pending"></Button> 
               
                </tr>
                <tr className="Data">
                <td className="lgwidgetCustomer">Nitish</td>
                <td className="lgwidgetDate">10th-JUN</td>
                <td className="lgwidgetAmount">1500</td>
               <Button  type="Rejected"></Button> 
               
                </tr>
                
                </table>
                
        </div>
    )
}
