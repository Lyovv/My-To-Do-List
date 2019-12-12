import React from "react";

import './ListItems.css'

const ListItems = () => {
    return (
        <>
        <li className='todo-list'>
            <span>Organize office</span>
            <button className ="list btn btn-success"><i className ='fa fa-check'></i></button>
            <button className ="list btn btn-warning"><i className ='fa fa-remove'></i></button>
        </li>
        <li className='todo-list'>
            <span>To do gym</span>
            <button className ="list btn btn-success"><i className ='fa fa-check'></i></button>
            <button className ="list btn btn-warning"><i className ='fa fa-remove'></i></button>
        </li>
        <li className='todo-list'>
            <span>Read a book</span>
            <button className ="list btn btn-success"><i className ='fa fa-check'></i></button>
            <button className ="list btn btn-warning"><i className ='fa fa-remove'></i></button>
        </li> 
        </>   
    )
};

export default ListItems;  

