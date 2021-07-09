import React from 'react';
import "./user.css";
import { DataGrid } from '@material-ui/data-grid';
import {rowData} from "../../userdata.js";
import {Visibility,DeleteOutline} from '@material-ui/icons'
import {useState} from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
 
export default function User() {

    const [data,setData]=useState(rowData);

    const handleDeleteButton=(id)=>{
        setData(data.filter(items=>items.id!==id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100
        },
        { field: ('Name'), headerName: 'Name',
         width: 330},
        {field: 'status', headerName: 'Status', width: 130 },
        {
          field: 'transaction',
          headerName: 'Transactions',
          width: 200,
          renderCell:(params)=>{
              return (
                  <>
                  <Link to={"/UserPageDetails/"+params.row.id}>
                    <button className="editButton" >Edit</button>
                  </Link> 
                     <DeleteOutline className="delete" onClick={()=>handleDeleteButton(params.row.id)}/> 
                  </>
              )
          }
        }
      ];

      function handleEditButton(e){
        console.log("Edit Button clicked");
        e.preventdefault();
      }
    return (
        <div className="data"> 
            <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />

        </div>
    )
}
