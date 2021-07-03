import React from 'react'
import {Avatar} from '@material-ui/core';

function Sidebar(name) {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" ></img>
                <Avatar />
                <h3>{name}</h3>
                <h4>santu.india@yahoo.com</h4>
            </div>
            <div className="sidebar__bottom">

            </div>
        </div>
    )
}

export default Sidebar
