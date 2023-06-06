import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material'

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
                   src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"

          alt=""
        />
        <Avatar className="sidebar__avatar">

        </Avatar>
        <h2>sa'ed</h2>
        <h4> sa'ed gurey@sa'eed.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,300</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,570</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactJs')}
        {recentItem('programming')}
        {recentItem('software eng')}
        {recentItem('design')}
        {recentItem('developer')}

      </div>
    </div>
  )
}

export default Sidebar