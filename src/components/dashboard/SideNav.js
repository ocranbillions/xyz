import React from 'react'
import PropTypes from 'prop-types'

function SideNav({ user }) {
  return (
    <div className="side_nav">
      <div className="user-info margin-bottom-small">
        <img src="../assets/images/profilepic.JPG" alt="" />
        <h3 className="heading-3" id="fullName">{`${user.firstName} ${user.lastName}`}</h3>
        <span id="email">{user.email}</span>
      </div>

      <a href="./client.dashboard.html" className="active"><span className="icon"><i
            className="fas fa-home"></i></span>Dashboard</a>
      <a href="./client.history.html"><span className="icon"><i className="fas fa-dollar-sign"></i></span>History</a>
      <a href="#" className="new-acct"><span className="icon"><i className="fas fa-folder-open"></i> </span>New
        Account</a>
      <a href="#"><span className="icon"><i className="fas fa-tools"></i> </span>Settings</a>
      <a href="#"><span className="icon"><i className="fas fa-external-link-square-alt"></i> </span>Quick Links</a>
      <a href="#"><span className="icon"><i className="far fa-question-circle"></i></span>FAQ</a>
    </div>
  )
}

SideNav.propTypes = {
  user: PropTypes.object.isRequired,
}

export default SideNav;

