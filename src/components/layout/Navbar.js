import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/authActions';

const Navbar = ({ isAuthenticated, logout }) => {
  return (
    <nav>
      <div className="nav-flex-container">
          <div className="logo-container margin-bottom-small">
              <Link to="/" className="logo">Ban<i>ka</i><i className="icon-basic-home"></i> </Link>
          </div>
          <div className="nav-links margin-top-small">
              <ul className="list">
                  <li><Link to="#">About</Link></li>
                  <li><Link to="#">Stories</Link></li>
                  <li><Link to="#">FAQ</Link></li>
                  {
                    isAuthenticated ?
                      <Fragment>
                        <li><Link to="/" onClick={logout}>Sign Out</Link></li>
                      </Fragment>
                    :
                      <Fragment>
                        <li><Link to="/">Sign in</Link></li>
                        <li><Link to="/signup">Sign up</Link></li>
                      </Fragment>
                  }
              </ul>
          </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);