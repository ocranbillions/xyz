import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';

import Alert from '../layout/Alert';


const SignIn = ({ login, isAuthenticated, loading }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = event => setFormData({...formData, [event.target.name]: event.target.value });

  const onSubmit = async event => {
    event.preventDefault();
    login(email, password);
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <main className="padding-top-big padding-bottom-big">
        <div className="">
            <section className="login-section">
                <h1 className="heading-1">Secure Login</h1>
                <div>
                    <form action="" className="login_form margin-bottom-small" onSubmit={onSubmit}>

                        <div className="form__group">
                            <label for="email" className="form__label">Email</label>
                            <input type="email" className="form__input" id="email" placeholder="example@domain.com" name="email" value={email} onChange={e => onChange(e)} />
                        </div>
                        <div className="form__group">
                            <label for="password" className="form__label">Password</label>
                            <input type="password" className="form__input" id="password" placeholder="secret" name="password" value={password} onChange={e => onChange(e)} />
                        </div>

                        <input type="submit" id="submit" className="btn btn-blue login-btn" value={loading ? "loading..." : "Login"} />

                         <Alert />
                    </form>

                    <div className="align-center">
                        <p className=""><Link to="signup" className="">Create an account</Link></p>
                        <p><a href="" className="">Forgot password?</a></p>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  loading: state.authReducer.loading
});

export default connect(mapStateToProps, { login })(SignIn);