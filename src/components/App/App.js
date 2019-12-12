import React from "react";

import Filter from "../Filter";
import List from "../List";
import AddItem from "../AddItem";
import "./App.css";

const data = [
    {
        id: 1,
        title:'List 1',
        isDone: true
    },
    {
        id: 2,
        title:'List 2',
        isDone: false
    },
    {
        id: 3,
        title:'List 3',
        isDone: false
    }
];

const App = () => {
    return (
        <div className="Appdiv">
            <h3>To Do List</h3>
            <Filter />
            <List />
            <AddItem />

        </div>
    )
}

export default App;