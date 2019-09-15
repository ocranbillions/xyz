import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alertActions';
import { register } from '../../actions/authActions';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Alert from '../layout/Alert';


const SignUp = ({ setAlert, register, isAuthenticated, loading }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { firstName, lastName, email, password } = formData;

  const onChange = event => setFormData({...formData, [event.target.name]: event.target.value });

  const onSubmit = event => {
    event.preventDefault();
    // setAlert('wrong inputs', 'danger');
    register(formData);
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <main className="padding-top-big padding-bottom-big">
      <div className="wrapper">
        <section className="login-section">
          <h1 className="heading-1">Create A Free Account</h1>
          <div>
            <form action="" className="login_form margin-bottom-small" onSubmit={e => onSubmit(e)}>
              <div className="form__group">
                <label for="fname" className="form__label">First Name</label>
                <input type="text" className="form__input" placeholder="First Name" id="fname" name="firstName" value={firstName} onChange={e => onChange(e)}/>
              </div>
              <div className="form__group">
                <label for="lname" className="form__label">Last Name</label>
                <input type="text" className="form__input" placeholder="Last Name" id="lname" name="lastName" value={lastName} onChange={e => onChange(e)}/>
              </div>
              <div className="form__group">
                <label for="email" className="form__label">Email</label>
                <input type="email" className="form__input" placeholder="email" id="email" name="email" value={email} onChange={e => onChange(e)}/>
              </div>

              <div className="form__group">
                <label for="password" className="form__label">Password</label>
                <input type="password" className="form__input" placeholder="password" id="password" name="password" value={password} onChange={e => onChange(e)}/>
              </div>
              <input type="submit" id="submit" className="btn btn-blue" value='Register' value={loading ? "loading..." : "Register"}/>

              <Alert />
            </form>

            <div className="align-center">
              <p className="">Already have an Account? <Link to="/" className="">Login</Link></p>
              <p>By continuing, I agree to Banka's <a href="#" className="">Terms of Use & Privacy.</a></p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  loading: state.authReducer.loading,
});
export default connect(mapStateToProps, { setAlert, register })(SignUp);