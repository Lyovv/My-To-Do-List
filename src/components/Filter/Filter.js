import React from 'react';

import './Filter.css';

const Filter = () => {
    return(
        <div className="filter">
            <input type = 'text' className="search-input" placeholder='search...'/>
            <button className="srch Light"><i className='fa fa-search'></i></button>
            <button className ="srch-btn btn btn-secondary">active</button>
            <button className ="srch-btn btn btn-secondary">passive</button>
        </div>
)}

export default Filter;