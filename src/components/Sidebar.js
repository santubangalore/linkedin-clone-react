import React from 'react'
import {Avatar} from '@material-ui/core';
import './Sidebar.css';

function Sidebar({name}) {

const recentItems =(topic) =>(
    <div className="sidebar__recntItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>

    </div>
);

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="vitor-monthay-c9RoBYOHLeA-unsplash.jpg" alt="" ></img>
                <Avatar />
                <h3>{name}</h3>
                <h4>santu.india@yahoo.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,753</p>               
                </div>
                <div className="sidebar__stat">
                   <p>Views on posts</p>
                    <p className="sidebar__statNumber">1,780</p>               
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent </p>
                {recentItems('ReactJs')}
                {recentItems('.Net Core')}
                {recentItems('Rabbit MQ')}
                {recentItems('Sql Server')}
                {recentItems('Angular 10')}
                {recentItems('Cloud Technology')}
            </div>
        </div>
    )
}

export default Sidebar
